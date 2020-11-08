import React from 'react'
import { Container, Header, Content, Divider } from 'rsuite'
import {
  useReviewsQuery,
  Review,
  Product,
  SortOrder,
} from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'
import { ReviewCard } from '../Product'

const MyReviews = () => {
  const { user } = useAuthUser()

  const { data: reviewsData } = useReviewsQuery({
    variables: {
      where: {
        author: {
          id: {
            equals: user?.id,
          },
        },
      },
      orderBy: [
        {
          createdAt: SortOrder.Desc,
        },
      ],
    },
  })

  return (
    <Container>
      <Header>
        <h2>My Reviews</h2>
        <p>View the reviews you've left</p>
        <Divider />
      </Header>
      <Content>
        {reviewsData?.reviews?.length === 0 && (
          <p>You haven't left any reviews!</p>
        )}
        {reviewsData?.reviews?.map((review) => {
          return (
            <ReviewCard
              review={review as Review}
              product={review.product as Product}
            />
          )
        })}
      </Content>
    </Container>
  )
}

export default MyReviews
