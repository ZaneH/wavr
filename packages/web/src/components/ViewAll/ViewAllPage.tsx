import { routes } from '@wavegrid/common/constants'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { Container, Content, Divider, FlexboxGrid, Header } from 'rsuite'
import {
  Product,
  SortOrder,
  useFeaturedProductsQuery,
  useProductsQuery,
} from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { ProductSquare } from '../Product'

interface ViewAllProps {
  type: string
}

const ViewAllPage = () => {
  const { go } = useGo()
  const [numOfResults, setNumOfResults] = useState(15)

  const { type } = useParams<ViewAllProps>()

  const {
    data: featuredProductsData,
    loading: featuredLoading,
    refetch: refetchFeatured,
  } = useFeaturedProductsQuery({
    skip: true,
    fetchPolicy: 'cache-and-network',
    variables: {
      first: 15,
    },
  })

  const {
    data: newProductsData,
    loading: newLoading,
    refetch: refetchNew,
  } = useProductsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      first: 15,
      where: {
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
    if (type === 'newest') {
      refetchNew({
        first: numOfResults,
      })
    } else if (type === 'featured') {
      refetchFeatured({
        first: numOfResults,
      })
    }
  }, [numOfResults])

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>{capitalizeFirstLetter(type)}</title>
      </Helmet>
      <Header>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <h2>
              {type === 'newest'
                ? 'New'
                : type === 'featured'
                ? 'Featured'
                : null}
            </h2>
            <Divider />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <InfiniteScroll
              dataLength={
                (type === 'newest'
                  ? newProductsData?.products?.length
                  : featuredProductsData?.featuredProducts?.length) ?? 15
              }
              hasMore={true}
              loader={newLoading || featuredLoading}
              next={() => {
                setNumOfResults(numOfResults + 15)
              }}
            >
              <FlexboxGrid justify="start">
                {type === 'newest'
                  ? newProductsData?.products?.map((product, idx) => (
                      <>
                        <FlexboxGrid.Item colspan={4} className="top-space">
                          <ProductSquare
                            onClick={() => {
                              go.push(routes.pack, { packId: product?.id })
                            }}
                            responsive
                            product={product as Product}
                          />
                        </FlexboxGrid.Item>
                        {idx % 5 !== 4 && (
                          <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                        )}
                      </>
                    ))
                  : type === 'featured'
                  ? featuredProductsData?.featuredProducts?.map(
                      (product, idx) => (
                        <>
                          <FlexboxGrid.Item colspan={4} className="top-space">
                            <ProductSquare
                              onClick={() => {
                                go.push(routes.pack, { packId: product?.id })
                              }}
                              responsive
                              product={product as Product}
                            />
                          </FlexboxGrid.Item>
                          {idx % 5 !== 4 && (
                            <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                          )}
                        </>
                      )
                    )
                  : null}
              </FlexboxGrid>
            </InfiniteScroll>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  )
}

export default ViewAllPage
