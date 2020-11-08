import { SortOptions } from '@wavegrid/common/constants'
import debounce from 'lodash.debounce'
import React, { useCallback, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Header,
  Icon,
  SelectPicker,
  TagPicker,
} from 'rsuite'
import {
  Product,
  SortOrder,
  useProductsQuery,
  useTagsLazyQuery,
} from '../../generated/types'
import useDebounce from '../../hooks/useDebounce'
import BrowseList from './BrowseList'
import TagList from './TagList'

const BrowsePage = () => {
  const [browseTags, setBrowseTags] = useState<Array<string>>([])
  const [numOfResults, setNumOfResults] = useState(15)
  const [displaying, setDisplaying] = useState<'filtered' | 'sorted'>('sorted')
  const [getTags, allTags] = useTagsLazyQuery()

  const [sort, setSort] = useState(SortOptions.Newest)

  let productSortBy = {}
  if (sort === SortOptions.Newest) {
    productSortBy = { createdAt: SortOrder.Desc }
  } else if (sort === SortOptions.AZ) {
    productSortBy = { name: SortOrder.Asc }
  } else if (sort === SortOptions.HighLow) {
    productSortBy = { amount: SortOrder.Desc }
  } else if (sort === SortOptions.LowHigh) {
    productSortBy = { amount: SortOrder.Asc }
  }

  const {
    refetch: refetchProducts,
    data: sortedProductsData,
    loading: sortedLoading,
  } = useProductsQuery({
    variables: {
      first: 15,
      orderBy: [productSortBy],
      where: {
        isArchived: {
          equals: false,
        },
      },
    },
    onCompleted: () => {
      setDisplaying('sorted')
    },
  })

  const {
    refetch: getFilteredProducts,
    data: filteredProductData,
    loading: filterLoading,
  } = useProductsQuery({
    variables: {
      first: 15,
      where: {
        isArchived: {
          equals: false,
        },
      },
    },
    onCompleted: () => {
      if (browseTags?.length) {
        setDisplaying('filtered')
      }
    },
  })

  useEffect(() => {
    setNumOfResults(15)
  }, [displaying, browseTags, sort])

  const debounceFilter = useDebounce(browseTags, 750)

  useEffect(() => {
    if (browseTags?.length > 0) {
      if (browseTags?.length > 0) {
        getFilteredProducts({
          first: 15,
          where: {
            isArchived: {
              equals: false,
            },
            tags: {
              some: {
                OR: browseTags?.map((tag) => {
                  return { id: { equals: tag } }
                }),
              },
            },
          },
        })

        setDisplaying('filtered')
      } else {
        if (!sortedLoading) {
          refetchProducts({
            where: {
              isArchived: {
                equals: false,
              },
            },
            orderBy: [productSortBy],
            first: 15,
          })
        }

        setDisplaying('sorted')
      }
    }
  }, [debounceFilter])

  useEffect(() => {
    if (displaying === 'filtered') {
      console.log('refetching filtered')
      getFilteredProducts({
        first: numOfResults,
      })
    } else if (displaying === 'sorted') {
      console.log('refetching sorted')
      refetchProducts({
        first: numOfResults,
      })
    }

    console.log(displaying, ': ', numOfResults)
  }, [numOfResults, browseTags])

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Browse</title>
        <meta
          name="description"
          content="Find creative assets for your next project! Find what you're looking for by using tags or checkout the featured products on the home page!"
        />
      </Helmet>
      <Header>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <h2>Browse</h2>
            <div className="less-top-space">
              <TagList defaultAmount={10} />
            </div>
            <TagPicker
              onOpen={() => {
                if (!allTags.called) {
                  getTags()
                }
              }}
              onChange={(value) => {
                setBrowseTags(value)
              }}
              className="less-top-space"
              data={
                allTags?.data?.tags.map((tag) => {
                  return {
                    label: tag.name,
                    value: tag.id,
                  }
                }) ?? []
              }
              block
              renderMenu={(menu) => {
                if (!allTags.called || !allTags?.data?.tags.length) {
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
            <Divider />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Content>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <SelectPicker
              searchable={false}
              data={[
                { label: SortOptions.Newest, value: SortOptions.Newest },
                { label: SortOptions.LowHigh, value: SortOptions.LowHigh },
                { label: SortOptions.HighLow, value: SortOptions.HighLow },
                { label: SortOptions.AZ, value: SortOptions.AZ },
              ]}
              defaultValue={SortOptions.Newest}
              cleanable={false}
              onChange={setSort}
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={16}>
            <BrowseList
              displayData={
                (displaying === 'filtered'
                  ? (filteredProductData?.products as Product[])
                  : (sortedProductsData?.products as Product[])) ?? []
              }
              loading={filterLoading || sortedLoading}
              next={() => {
                setNumOfResults(numOfResults + 15)
              }}
            />
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
    </Container>
  )
}

export default BrowsePage
