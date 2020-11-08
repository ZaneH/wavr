import { routes } from '@wavegrid/common/constants'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { FlexboxGrid, Panel } from 'rsuite'
import { Product } from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { ProductSquare } from '../Product'

interface Props {
  loading: boolean
  displayData: Partial<Product>[]
  next: () => any
}

const BrowseList = ({ loading, displayData, next }: Props) => {
  const { go } = useGo()

  if (displayData?.length <= 0 && !loading) {
    return <Panel>No products found</Panel>
  }

  return (
    <InfiniteScroll
      dataLength={displayData?.length ?? 15}
      loader={loading}
      hasMore={true}
      next={next}
    >
      <FlexboxGrid justify="start">
        {displayData?.map((product, idx) => (
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
            {idx % 5 !== 4 && <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>}
          </>
        ))}
      </FlexboxGrid>
    </InfiniteScroll>
  )
}

export default BrowseList
