import { routes, Strings } from '@wavegrid/common/constants'
import { noHTML } from '@wavegrid/common/utils'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'
import { useParams } from 'react-router-dom'
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  RedditIcon,
  RedditShareButton,
  RedditShareCount,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'
import {
  Alert,
  Button,
  Container,
  Content,
  Divider,
  Dropdown,
  FlexboxGrid,
  Header,
  Icon,
  IconButton,
  Rate,
  Tag,
  Tooltip,
  Whisper,
} from 'rsuite'
import { useCart } from 'use-cart'
import { useAuthState, useAuthUser } from 'use-eazy-auth'
import {
  Product,
  Review,
  useProductQuery,
  useReviewsQuery,
  useToggleFavoriteMutation,
} from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import ReportModal from './ReportModal'
import ReviewCard from './ReviewCard'
import ReviewModal from './ReviewModal'

interface ProductProps {
  packId: string
}

const ProductPage = () => {
  const { packId } = useParams<ProductProps>()
  const { go } = useGo()
  const { addItem, removeItem, isInCart } = useCart()
  const { user } = useAuthUser()
  const { authenticated } = useAuthState()
  const [showReviewModal, setShowReviewModal] = useState(false)
  const [showReportModal, setShowReportModal] = useState(false)

  const [toggleFavorite] = useToggleFavoriteMutation()

  const { data: reviewsData, refetch: refetchReviews } = useReviewsQuery({
    variables: {
      where: {
        product: {
          id: {
            equals: packId,
          },
        },
      },
    },
  })

  const {
    data: productData,
    loading: productDataLoading,
    refetch: refetchProduct,
  } = useProductQuery({
    variables: {
      where: {
        id: packId,
      },
    },
  })

  const processDescription = (desc: string) => {
    return desc.replace(/\n\n+/g, '<br />')
  }

  return (
    <FlexboxGrid justify="center" className="more-top-space store-content">
      <Helmet titleTemplate="Wavr / %s">
        <title>{productData?.product?.name ?? ''}</title>
        <meta
          property="og:title"
          content={
            productData?.product?.name?.trim() === ''
              ? 'Wavr! An open marketplace for creators'
              : `${
                  productData?.product?.owner?.displayName ??
                  productData?.product?.owner?.username
                }: ${productData?.product?.name}`
          }
        />
        <meta
          property="og:description"
          content={
            noHTML(productData?.product?.description) ??
            'Description not available'
          }
        />
        <meta
          property="og:image"
          content={
            productData?.product?.images?.[0] ??
            'https://wavr.me/img/wavr-meta-home.png'
          }
        />
        <meta property="og:type" content="article" />
        <meta
          property="article:published_time"
          content={productData?.product?.createdAt}
        />
        <meta
          property="article:modified_time"
          content={productData?.product?.updatedAt}
        />
        <meta
          property="article:author"
          content={`https://wavr.me/user/${productData?.product?.owner?.username}`}
        />
        <meta
          property="author:username"
          content={productData?.product?.owner?.username}
        />
        <meta property="twitter:site" content={`${Strings.twitter_handle}`} />
        <meta
          property="twitter:title"
          content={
            productData?.product?.name?.trim() === ''
              ? 'Wavr! An open marketplace for creators'
              : `${
                  productData?.product?.owner?.displayName ??
                  productData?.product?.owner?.username
                }: ${productData?.product?.name}`
          }
        />
        <meta
          property="twitter:image"
          content={
            productData?.product?.images?.[0] ??
            'https://wavr.me/img/wavr-meta-home.png'
          }
        />
        <meta
          property="twitter:description"
          content={
            noHTML(productData?.product?.description) ??
            'Description not available'
          }
        />
      </Helmet>
      <FlexboxGrid.Item colspan={6}>
        <InnerImageZoom
          src={
            productData?.product?.images?.[0] ??
            process.env.REACT_APP_PLACEHOLDER_IMAGE
          }
        />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={1} />
      <FlexboxGrid.Item colspan={11}>
        <h2>
          {productData?.product?.name !== ''
            ? productData?.product?.name ?? '--'
            : '(no name)'}
          <Dropdown
            trigger={['hover', 'click']}
            placement="bottomEnd"
            style={{ float: 'right' }}
            renderTitle={() => {
              return (
                <IconButton
                  icon={<Icon icon="caret-down" />}
                  circle
                  appearance="subtle"
                />
              )
            }}
            onSelect={async (e) => {
              switch (e) {
                case 0: {
                  return setShowReportModal(true)
                }
                case 1: {
                  const added = await toggleFavorite({
                    variables: {
                      productId: packId,
                    },
                    refetchQueries: ['Product'],
                  })

                  return Alert.info(
                    added?.data?.toggleFavorite
                      ? 'Added to favorites'
                      : 'Removed from favorites'
                  )
                }
                default: {
                  return console.error('Unknown dropdown option')
                }
              }
            }}
          >
            <Dropdown.Item eventKey={0} disabled={!authenticated}>
              Report
            </Dropdown.Item>
            <Dropdown.Item eventKey={1} disabled={!authenticated}>
              {productData?.product?.isFavorite
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </Dropdown.Item>
          </Dropdown>
        </h2>
        <b>
          Sold by:{' '}
          <Button
            style={{
              padding: '0',
              verticalAlign: 'baseline',
            }}
            appearance="link"
            onClick={() =>
              go.push(routes.user, {
                username: productData?.product?.owner?.username,
              })
            }
          >
            {productData?.product?.owner?.displayName ||
              productData?.product?.owner?.username}
          </Button>
        </b>
        <div className="less-top-space">
          {productData?.product?.onSale ? (
            <>
              <h4>
                {productData?.product.salePrice === 0
                  ? 'Free'
                  : `On Sale: $${productData?.product.salePrice?.toFixed(2)}`}
              </h4>
              <b>File:</b> {productData?.product?.filename ?? '--'}
              <p style={{ color: '#aaa' }}>
                Normally: ${productData?.product.amount.toFixed(2)}
              </p>
            </>
          ) : (
            <>
              <h4>
                {productData?.product?.amount === 0
                  ? 'Free'
                  : `Price: $${
                      productData?.product?.amount.toFixed(2) ?? '--'
                    }`}
              </h4>
              <b>File:</b> {productData?.product?.filename ?? '--'}
            </>
          )}
        </div>
        <div className="less-top-space">
          <IconButton
            disabled={
              user?.id === productData?.product?.owner?.id ||
              productDataLoading ||
              productData?.product?.ownsProduct === true
            }
            size="lg"
            icon={
              <Icon
                icon={
                  isInCart(productData?.product?.id) ? 'check' : 'shopping-cart'
                }
              />
            }
            appearance="primary"
            onClick={() => {
              // don't add unloaded products
              if (!productData?.product?.id) {
                return
              }

              // never let someone add 2 to the cart
              if (isInCart(productData?.product?.id)) {
                removeItem(productData?.product?.id)
                Alert.info('Removed item from your cart')
              } else {
                addItem(productData?.product?.id)
                Alert.info('Item added to your cart')
                go.push(routes.cart)
              }
            }}
          >
            {
              // TODO: Add a View cart button nearby
              user?.id === productData?.product?.owner?.id ||
              productData?.product?.ownsProduct === true
                ? productData?.product?.ownsProduct === true
                  ? 'You own this'
                  : user?.id === (productData?.product?.owner?.id ?? '--')
                  ? 'You are the owner'
                  : '--'
                : isInCart(productData?.product?.id)
                ? 'In Cart'
                : 'Add to Cart'
            }
          </IconButton>
        </div>
        {productData?.product?.tags?.length !== 0 && (
          <div className="top-space">
            <h6>Tags:</h6>
            {productData?.product?.tags.map((tag) => (
              <Tag className="larger-tag">
                <span onClick={() => go.push(routes.tag, { tagId: tag?.id })}>
                  {tag.name}
                </span>
              </Tag>
            ))}
          </div>
        )}
        {productData?.product?.description.length !== 0 && (
          <div className="top-space">
            <h6>Description:</h6>
            <p
              dangerouslySetInnerHTML={{
                __html: processDescription(
                  productData?.product?.description ?? ''
                ),
              }}
            ></p>
          </div>
        )}
        <div className="top-space">
          <h6>Share:</h6>
          <div
            style={{
              padding: '8px 0px',
            }}
          >
            <div className="share-container">
              <TwitterShareButton
                title={`${productData?.product?.name} by ${
                  productData?.product?.owner?.displayName ??
                  productData?.product?.owner?.username
                }:`}
                url={window.location.href}
                children={<TwitterIcon size={32} round={true} />}
              />
            </div>
            <div className="share-container">
              <FacebookShareButton
                url={window.location.href}
                children={<FacebookIcon size={32} round={true} />}
              />
              <div>
                <FacebookShareCount url={window.location.href} />
              </div>
            </div>
            <div className="share-container">
              <RedditShareButton
                title={`${productData?.product?.name} by ${
                  productData?.product?.owner?.displayName ??
                  productData?.product?.owner?.username
                }`}
                url={window.location.href}
                children={
                  <RedditIcon
                    bgStyle={{ fill: '#FF4500' }}
                    size={32}
                    round={true}
                  />
                }
              />
              <div>
                <RedditShareCount url={window.location.href} />
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <Container>
          <Header>
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item>
                <h3>Reviews</h3>
                <Rate
                  value={productData?.product?.stars}
                  size="sm"
                  allowHalf
                  readOnly
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item style={{ alignSelf: 'center' }}>
                <Whisper
                  placement="top"
                  trigger={
                    productData?.product?.ownsProduct === false ||
                    productData?.product?.hasReviewed === true
                      ? 'hover'
                      : 'none'
                  }
                  speaker={
                    <Tooltip>
                      {productData?.product?.hasReviewed
                        ? "You've already reviewed this product"
                        : user?.id === productData?.product?.owner?.id
                        ? "You can't review your own product"
                        : productData?.product?.ownsProduct === false
                        ? "You don't own this product!"
                        : '(unknown)'}
                    </Tooltip>
                  }
                >
                  <Button
                    loading={productDataLoading}
                    disabled={
                      productDataLoading ||
                      productData?.product?.ownsProduct === false ||
                      productData?.product?.hasReviewed === true
                    }
                    onClick={() => {
                      setShowReviewModal(true)
                    }}
                  >
                    Write a review
                  </Button>
                </Whisper>
                <ReviewModal
                  show={showReviewModal}
                  onSuccess={() => {
                    refetchReviews()
                    refetchProduct()
                  }}
                  setShow={setShowReviewModal}
                  product={productData?.product as Product}
                />
                <ReportModal
                  show={showReportModal}
                  setShow={setShowReportModal}
                  product={productData?.product as Product}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Header>
          <Content>
            {reviewsData?.reviews?.map((review) => (
              <ReviewCard review={review as Review} />
            ))}
          </Content>
        </Container>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default ProductPage
