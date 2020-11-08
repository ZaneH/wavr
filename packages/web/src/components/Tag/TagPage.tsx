import { routes } from '@wavegrid/common/constants'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { Container, Divider, FlexboxGrid } from 'rsuite'
import { Product, useTaggedProductsQuery } from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { ProductSquare } from '../Product'

interface TagProps {
  tagId: string
}

const TagPage = () => {
  const { tagId } = useParams<TagProps>()
  const { go } = useGo()

  const [numOfResults, setNumOfResults] = useState(16)

  const { data: taggedProducts, refetch, loading } = useTaggedProductsQuery({
    variables: {
      id: tagId,
      first: 16,
      where: {
        isArchived: {
          equals: false,
        },
      },
    },
  })

  useEffect(() => {
    refetch({
      first: numOfResults,
    })
  }, [numOfResults])

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Tags</title>
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          <h2>Packs tagged &quot;{taggedProducts?.tag?.name ?? '...'}&quot;</h2>
          <Divider />
          <InfiniteScroll
            dataLength={taggedProducts?.tag?.products?.length ?? 16}
            hasMore={true}
            loader={loading}
            next={() => {
              setNumOfResults(numOfResults + 16)
            }}
          >
            <FlexboxGrid justify="start" className="less-top-space">
              {taggedProducts?.tag?.products.map((product) => (
                <>
                  <FlexboxGrid.Item colspan={5} className="top-space">
                    <ProductSquare
                      onClick={() => {
                        go.push(routes.pack, { packId: product?.id })
                      }}
                      responsive
                      product={product as Product}
                    />
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
                </>
              ))}
            </FlexboxGrid>
          </InfiniteScroll>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  )
}

export default TagPage
