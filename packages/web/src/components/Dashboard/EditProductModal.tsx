import moment from 'moment'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Alert,
  Button,
  Checkbox,
  CheckboxGroup,
  ControlLabel,
  Drawer,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  Icon,
  Input,
  InputGroup,
  Modal,
  TagPicker,
} from 'rsuite'
import { useAuthActions, useAuthUser } from 'use-eazy-auth'
import {
  Product,
  useGetFilesQuery,
  useGetImagesQuery,
  useStartAdMutation,
  useTagsLazyQuery,
  useUpdateProductMutation,
} from '../../generated/types'
import PriceInput from './PriceInput'
import UploadBlock from './UploadBlock'

interface Props {
  show: boolean
  setShow: Function
  onSuccess: Function
  onClose?: Function
  product: Product
}

const EditProductModal = ({
  show,
  setShow,
  onSuccess,
  onClose,
  product,
}: Props) => {
  const { patchUser } = useAuthActions()
  const { user } = useAuthUser()

  // lazy queries
  const [getTags, getTagsResult] = useTagsLazyQuery()
  const [startAd] = useStartAdMutation()

  // data queries
  const { data: getImagesData, refetch: imageRefetch } = useGetImagesQuery({
    variables: {
      where: {
        isArchived: {
          equals: false,
        },
        productId: {
          equals: product.id,
        },
      },
    },
  })

  const { data: getFilesData, refetch: fileRefetch } = useGetFilesQuery({
    variables: {
      where: {
        isArchived: {
          equals: false,
        },
        product: {
          id: {
            equals: product.id,
          },
        },
      },
    },
  })

  // form logic
  const [productForm, setProductForm] = useState<Partial<Product>>(product)
  const [updateProduct, updateProductResults] = useUpdateProductMutation({
    refetchQueries: ['UserProducts'],
  })
  const [productTags, setProductTags] = useState<string[]>([])

  // onSale logic
  const [isOnSale, setOnSale] = useState(product.onSale ?? false)
  const [salePrice, setSalePrice] = useState(product.salePrice ?? null)

  // this manages the <Input /> because it's not supported by <Form />
  const [formDescription, setFormDescription] = useState(product.description)
  const [formAmount, setFormAmount] = useState(product.amount)

  const [showDeleteProduct, setShowDeleteProduct] = useState(false)
  const [showStartAd, setShowStartAd] = useState(false)

  return (
    <>
      <Modal backdrop="static" show={showDeleteProduct} size="xs">
        <Modal.Title>Confirm</Modal.Title>
        <Modal.Body>
          Are you sure you want to delete this product? This cannot be undone!
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              updateProduct({
                variables: {
                  where: {
                    id: product.id,
                  },
                  data: {
                    isArchived: {
                      set: true,
                    },
                  },
                },
              })

              setShowDeleteProduct(false)
              setShow(false)

              Alert.success('Product was deleted')
            }}
            appearance="primary"
          >
            Yes
          </Button>
          <Button
            onClick={() => setShowDeleteProduct(false)}
            appearance="subtle"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal backdrop="static" show={showStartAd} size="xs">
        <Modal.Title>Use Ad Token</Modal.Title>
        <Modal.Body>
          Are you sure you'd like to spend an Ad Token on {product.name}? Learn
          more about Ad Tokens{' '}
          <a
            href="https://help.wavr.me/sellers/ad-tokens"
            rel="noreferrer noopener"
            target="_blank"
          >
            here
          </a>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              startAd({
                variables: {
                  productId: product.id,
                },
              }).then((result) => {
                if (result?.data?.startAd?.id) {
                  Alert.success('Ad Token redeemed!')

                  // update the user object (w/o refresh)
                  patchUser({
                    adTokens: user?.adTokens - 1,
                  })
                } else {
                  Alert.error(
                    'There was an issue starting your Ad. Contact support if you believe this is a mistake.',
                    6000
                  )
                }
              })

              setShowStartAd(false)
            }}
            appearance="primary"
            color="green"
          >
            Yes
          </Button>
          <Button onClick={() => setShowStartAd(false)} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Drawer
        backdrop="static"
        size="sm"
        overflow={true}
        show={show}
        onHide={() => setShow(false)}
        onExited={() => onClose?.()}
      >
        <Drawer.Header>
          <Drawer.Title>Edit Pack</Drawer.Title>
        </Drawer.Header>
        <Form
          fluid
          formValue={productForm}
          onChange={(formValue) => setProductForm(formValue)}
          onSubmit={() => {
            if (
              (isOnSale && Number(salePrice) < 1.49) ||
              (Number(formAmount) < 1.49 && Number(formAmount) !== 0)
            ) {
              return Alert.error(
                'The minimum you can charge is $1.49. Sorry',
                4000
              )
            }

            if (Number(salePrice) > Number(formAmount)) {
              return Alert.error(
                'Your sale price is higher than the normal price.',
                4000
              )
            }

            updateProduct({
              variables: {
                where: {
                  id: product?.id,
                },
                data: {
                  name: {
                    set: productForm.name,
                  },
                  amount: {
                    set: Number(formAmount),
                  },
                  description: {
                    set: formDescription,
                  },
                  onSale: {
                    set: isOnSale,
                  },
                  salePrice: {
                    set: Number(salePrice),
                  },
                  tags: {
                    set: productTags.map((tag) => {
                      return {
                        id: tag,
                      }
                    }),
                  },
                },
              },
            })
              .then((result) => {
                setShow(false)
                onSuccess()
              })
              .catch((err) => {
                Alert.error('There was an issue updating your pack. Try again?')
              })
          }}
        >
          <Drawer.Body style={{ padding: '0 10px' }}>
            <FormGroup>
              <ControlLabel>Pack Thumbnail</ControlLabel>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={12}>
                  <UploadBlock
                    title="Click or drag to upload an image"
                    type="image"
                    accept="image/*"
                    attachedObjectId={product.id}
                    onSuccess={() => {
                      imageRefetch()
                    }}
                  />
                  <HelpBlock>Choose an image to represent your pack!</HelpBlock>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={11}>
                  <div className="thumbnail-preview">
                    <img
                      alt="preview"
                      src={
                        getImagesData?.images[0]?.url ??
                        process.env.REACT_APP_PLACEHOLDER_IMAGE
                      }
                    />
                  </div>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Pack Contents</ControlLabel>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={12}>
                  <UploadBlock
                    title="Click or drag to upload content"
                    type="content"
                    attachedObjectId={product.id}
                    onSuccess={() => {
                      fileRefetch()
                    }}
                  />
                  <HelpBlock>
                    Buyers will receieve this file after purchase.
                  </HelpBlock>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={11}>
                  <p>
                    <b>File:</b> {getFilesData?.files[0]?.name}
                  </p>
                  <p>
                    <b>Uploaded:</b>{' '}
                    {getFilesData?.files[0]
                      ? moment(getFilesData?.files[0]?.createdAt).format(
                          'MM/DD/YYYY'
                        )
                      : null}
                  </p>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Pack Name</ControlLabel>
              <FormControl name="name" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Normal Price</ControlLabel>
              <InputGroup style={{ width: '100%' }}>
                <InputGroup.Addon>$</InputGroup.Addon>
                <PriceInput
                  defaultValue={product.amount.toFixed(2)}
                  onChange={(e) => {
                    setFormAmount(e)
                  }}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Sale Price</ControlLabel>
              <InputGroup style={{ width: '100%' }}>
                <InputGroup.Addon>On Sale</InputGroup.Addon>
                <CheckboxGroup>
                  <Checkbox
                    checked={isOnSale}
                    onChange={(e, checked) => setOnSale(checked)}
                  />
                </CheckboxGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <PriceInput
                  defaultValue={product.salePrice?.toFixed(2) ?? ''}
                  onChange={(e) => {
                    setSalePrice(e)
                  }}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Tags</ControlLabel>
              <TagPicker
                defaultValue={product.tags?.map((tag) => tag.id)}
                onOpen={() => {
                  if (!getTagsResult.called) {
                    getTags()
                  }
                }}
                onChange={(value) => {
                  setProductTags(value)
                }}
                data={
                  getTagsResult?.data?.tags.map((tag) => {
                    return {
                      label: tag.name,
                      value: tag.id,
                    }
                  }) ??
                  // this allows us to load initial state tags
                  product.tags?.map((tag) => {
                    return {
                      label: tag.name,
                      value: tag.id,
                    }
                  })
                }
                block
                renderMenu={(menu) => {
                  if (!getTagsResult.called) {
                    return (
                      <p
                        style={{
                          padding: '16px 4px',
                          color: '#999',
                          textAlign: 'center',
                        }}
                      >
                        <Icon icon="spinner" spin /> Loading...
                      </p>
                    )
                  }

                  return menu
                }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <Input
                componentClass="textarea"
                rows={6}
                placeholder="Product description..."
                defaultValue={product?.description}
                onChange={setFormDescription}
              />
            </FormGroup>
            <FormGroup className="bottom-space">
              <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={6}>
                  <Link
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                    to={`/pack/${product.id}`}
                  >
                    <Button block color="blue" appearance="primary">
                      View Product
                    </Button>
                  </Link>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                  <div
                    onClick={() => {
                      setShowStartAd(true)
                    }}
                  >
                    <Button
                      className="token-button token-button-no-hover"
                      block
                      appearance="primary"
                    >
                      Use Ad Token
                    </Button>
                  </div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                  <Button
                    block
                    color="red"
                    appearance="primary"
                    onClick={() => {
                      setShowDeleteProduct(true)
                    }}
                  >
                    Delete Product
                  </Button>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FormGroup>
          </Drawer.Body>
          <Drawer.Footer>
            <Button appearance="ghost" onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button
              appearance="primary"
              color="green"
              type="submit"
              loading={updateProductResults?.loading}
              disabled={updateProductResults?.loading}
            >
              Save
            </Button>
          </Drawer.Footer>
        </Form>
      </Drawer>
    </>
  )
}

export default EditProductModal
