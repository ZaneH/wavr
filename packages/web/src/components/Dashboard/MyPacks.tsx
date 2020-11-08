import React, { useEffect, useState } from 'react'
import {
  Alert,
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Grid,
  Header,
  Icon,
  IconButton,
  Progress,
  Row,
  Col,
} from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import { EditProductModal } from '.'
import {
  Product,
  SortOrder,
  useCreateProductMutation,
  useUserProductsQuery,
} from '../../generated/types'
import { ProductSquare } from '../Product'

const iconText = {
  verticalAlign: 'middle',
  display: 'inline',
  marginRight: '16px',
}

const MyPacks = () => {
  const { user } = useAuthUser()
  const [createProduct] = useCreateProductMutation()
  const [show, setShow] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product>()
  const { data: productsData, refetch } = useUserProductsQuery({
    variables: {
      where: {
        id: user?.id,
      },
      productsWhere: {
        isArchived: {
          equals: false,
        },
      },
      orderBy: [
        {
          createdAt: SortOrder.Desc,
        },
      ],
    },
  })

  useEffect(() => {
    setShow(true)
  }, [editingProduct])

  return (
    <Container>
      <Header>
        <Grid fluid>
          <Row>
            <Col xs={18}>
              <h2 style={iconText}>My Packs</h2>
              <IconButton
                onClick={() => {
                  createProduct({
                    variables: {
                      data: {
                        name: '',
                        description: '',
                        amount: 0,
                      },
                    },
                  }).then((result) => {
                    if (result?.data?.createOneProduct) {
                      refetch()

                      Alert.info('Created a pack')
                    } else {
                      Alert.error(
                        'There was an issue adding the product. You may have reached your limit.',
                        4000
                      )
                    }
                  })
                }}
                icon={<Icon icon="plus" />}
                placement="left"
              >
                Create pack
              </IconButton>
              <p>Manage your products</p>
            </Col>
            <Col xs={6} style={{ textAlign: 'right' }}>
              <span className="progress-label">
                <Progress.Circle
                  percent={productsData?.user?.storageQuotaPercent}
                />
                <p>Storage</p>
              </span>
              <span className="progress-label">
                <Progress.Circle
                  percent={productsData?.user?.productQuotaPercent}
                />
                <p>Products</p>
              </span>
            </Col>
          </Row>
          <Divider />
        </Grid>
      </Header>
      <Content>
        {editingProduct && (
          <EditProductModal
            product={editingProduct}
            show={show}
            setShow={setShow}
            onSuccess={() => {
              // update the products
              refetch()
              Alert.success('Updated product')
            }}
            onClose={() => {
              setEditingProduct(undefined)
            }}
          />
        )}
        <FlexboxGrid justify="start">
          <FlexboxGrid.Item colspan={20}>
            <FlexboxGrid justify="start">
              {productsData?.user?.products?.length === 0 && (
                <p>No items to show</p>
              )}
              {productsData?.user?.products?.map((product, idx) => (
                <>
                  <FlexboxGrid.Item colspan={4} className="top-space">
                    <ProductSquare
                      onClick={() => {
                        setEditingProduct(product as Product)
                      }}
                      responsive
                      product={product as Product}
                    />
                  </FlexboxGrid.Item>
                  {idx % 5 !== 4 && (
                    <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                  )}
                </>
              ))}
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  )
}

export default MyPacks
