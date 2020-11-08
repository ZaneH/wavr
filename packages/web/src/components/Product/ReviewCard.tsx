import React from 'react'
import { Avatar, FlexboxGrid, Panel, Rate, Divider } from 'rsuite'
import { Review, Product } from '../../generated/types'
import moment from 'moment'
import { useGo } from '../../hooks/useGo'
import { routes } from '@wavegrid/common/constants'

interface Props {
  review: Review
  product?: Product
}

const ReviewCard = ({ review, product }: Props) => {
  const { go } = useGo()

  return (
    <Panel
      className="top-space review-card"
      header={
        <FlexboxGrid className="review-header-wrapper" justify="space-between">
          <FlexboxGrid className="review-header" justify="start">
            <FlexboxGrid.Item>
              <div
                className="can-click"
                onClick={() => {
                  go.push(routes.user, {
                    username: review?.author?.username,
                  })
                }}
              >
                <Avatar
                  className="avatar-picture"
                  circle
                  src={review?.author?.avatarURL!}
                >
                  {(review?.author?.displayName || review?.author?.username)
                    .charAt(0)
                    .toUpperCase()}
                </Avatar>
              </div>
            </FlexboxGrid.Item>
            <FlexboxGrid
              className="review-author"
              style={{ display: 'inline' }}
            >
              <FlexboxGrid.Item colspan={24}>
                <h5
                  className="can-click"
                  onClick={() => {
                    go.push(routes.user, {
                      username: review?.author?.username,
                    })
                  }}
                >
                  {review?.author?.displayName || review?.author?.username}
                </h5>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={24}>
                <p className="review-date">
                  Reviewed {moment(review?.createdAt).format('MMM D, YYYY')}
                </p>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid>
          <FlexboxGrid.Item>
            <Rate value={review?.stars} size="xs" allowHalf readOnly />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      }
      shaded
    >
      <p className="review-message">{review.message}</p>
      {product && (
        <>
          <Divider />
          <b>Product:</b> <a href={`/pack/${product.id}`}>{product.name}</a>
          <br />
          <b>Seller:</b>{' '}
          <a href={`/user/${product.owner?.username}`}>
            {product.owner?.displayName ?? product.owner?.username}
          </a>
        </>
      )}
    </Panel>
  )
}

export default ReviewCard
