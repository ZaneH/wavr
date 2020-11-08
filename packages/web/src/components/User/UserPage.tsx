import { routes, SortOptions, Strings } from '@wavegrid/common/constants'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import {
  Container,
  Divider,
  FlexboxGrid,
  Icon,
  IconButton,
  SelectPicker,
} from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import {
  Product,
  SortOrder,
  useUserDisplayQuery,
  useUserProductsQuery,
} from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { EnumDashSidebar } from '../Dashboard/DashSidebar'
import { ProductSquare } from '../Product'
import UserAvatar from './UserAvatar'

interface UserProps {
  username: string
}

const UserPage = () => {
  const { user } = useAuthUser()
  const { go } = useGo()
  const { username } = useParams<UserProps>()
  const [sort, setSort] = useState(SortOptions.Newest)
  const [numOfResults, setNumOfResults] = useState(16)

  let productOrderBy = {}
  if (sort === SortOptions.Newest) {
    productOrderBy = { createdAt: SortOrder.Desc }
  } else if (sort === SortOptions.AZ) {
    productOrderBy = { name: SortOrder.Asc }
  } else if (sort === SortOptions.HighLow) {
    productOrderBy = { amount: SortOrder.Desc }
  } else if (sort === SortOptions.LowHigh) {
    productOrderBy = { amount: SortOrder.Asc }
  }

  const {
    data: productsData,
    refetch: refetchProducts,
    loading: productsLoading,
  } = useUserProductsQuery({
    variables: {
      where: {
        username,
      },
      productsWhere: {
        isArchived: {
          equals: false,
        },
      },
      orderBy: [productOrderBy],
      first: 16,
    },
  })

  const { data: userData } = useUserDisplayQuery({
    variables: {
      where: {
        username,
      },
    },
  })

  useEffect(() => {
    refetchProducts({
      where: {
        username,
      },
      orderBy: [productOrderBy],
      first: numOfResults,
      productsWhere: {
        isArchived: {
          equals: false,
        },
      },
    })
  }, [numOfResults])

  useEffect(() => {
    setNumOfResults(16)
  }, [sort])

  const isMyPage = user?.username === username

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>
          {userData?.user?.displayName ?? userData?.user?.username ?? ''}
        </title>
        <meta
          property="og:title"
          content={`Wavr Profile: ${
            userData?.user?.displayName ?? userData?.user?.username
          }`}
        />
        <meta property="og:description" content="Checkout my digital store!" />
        <meta
          property="og:image"
          content={
            userData?.user?.avatarURL ?? process.env.REACT_APP_PLACEHOLDER_IMAGE
          }
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:site" content={`${Strings.twitter_handle}`} />
        <meta
          property="twitter:title"
          content={`Wavr Profile: ${
            userData?.user?.displayName ?? userData?.user?.username
          }`}
        />
        <meta
          property="twitter:description"
          content="Checkout my digital store!"
        />
        <meta
          property="twitter:image"
          content={
            userData?.user?.avatarURL ?? process.env.REACT_APP_PLACEHOLDER_IMAGE
          }
        />
        <meta property="twitter:image:alt" content="User avatar" />
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16} style={{ textAlign: 'center' }}>
          <UserAvatar isMyPage={isMyPage} user={userData} />
          <h2 className="less-top-space">
            {userData?.user?.displayName || userData?.user?.username}
          </h2>
          {isMyPage && (
            <IconButton
              className="tiny-top-space"
              onClick={() => {
                go.push(routes.dashboard, {
                  username: username,
                  tabId: EnumDashSidebar.MyPacks,
                })
              }}
              icon={<Icon icon="pencil" />}
              placement="left"
            >
              Dashboard
            </IconButton>
          )}
          <Divider />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          <FlexboxGrid justify="start">
            <FlexboxGrid.Item colspan={6}>
              <SelectPicker
                searchable={false}
                data={[
                  { label: 'Newest', value: SortOptions.Newest },
                  { label: 'Lowest Price', value: SortOptions.LowHigh },
                  { label: 'Highest Price', value: SortOptions.HighLow },
                  { label: 'A → Z', value: SortOptions.AZ },
                ]}
                defaultValue={SortOptions.Newest}
                cleanable={false}
                onChange={setSort}
              />
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          {productsData?.user?.products?.length === 0 && (
            <p style={{ textAlign: 'center' }}>No items to show</p>
          )}
          <InfiniteScroll
            dataLength={productsData?.user?.products?.length ?? 16}
            hasMore={true}
            loader={productsLoading}
            next={() => {
              setNumOfResults(numOfResults + 16)
            }}
          >
            <FlexboxGrid justify="start">
              {productsData?.user?.products?.map((product) => (
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

export default UserPage
