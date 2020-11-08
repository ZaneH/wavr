import { routes, Strings } from '@wavegrid/common/constants'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Button, Container, FlexboxGrid } from 'rsuite'
import { useAuthState } from 'use-eazy-auth'
import {
  Product,
  useGetRandomAdQuery,
  useNewProductsQuery,
} from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import { ProductSquare } from '../Product'
import TagGrid from './TagGrid'

const topSpace = {
  marginTop: '32px',
}

const viewAllButton = {
  alignSelf: 'center',
  marginLeft: '16px',
}

const HomePage = () => {
  const { go } = useGo()
  const { authenticated } = useAuthState()

  // const { data: featuredData } = useFeaturedProductsQuery({
  //   fetchPolicy: 'cache-and-network',
  //   variables: {
  //     first: 5,
  //   },
  // })

  const { data: adData } = useGetRandomAdQuery({
    fetchPolicy: 'cache-and-network',
  })

  const { data: newData } = useNewProductsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      count: 5,
    },
  })

  const newDataWithAd = [
    adData?.getRandomAd?.product && (
      <>
        <FlexboxGrid.Item colspan={4}>
          <ProductSquare
            ad
            onClick={() => {
              go.push(routes.pack, { packId: adData?.getRandomAd?.product?.id })
            }}
            responsive
            product={adData?.getRandomAd?.product as Product}
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
      </>
    ),
    newData?.products.map((product, i) => {
      // if an ad is showing, cutoff #4
      let cutoffLast = false
      if (adData?.getRandomAd?.product) {
        if (i === 4) {
          cutoffLast = true
          return null
        }
      }

      return (
        <>
          <FlexboxGrid.Item colspan={4}>
            <ProductSquare
              onClick={() => {
                go.push(routes.pack, { packId: product?.id })
              }}
              responsive
              product={product as Product}
            />
          </FlexboxGrid.Item>
          {!cutoffLast && <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>}
        </>
      )
    }),
  ]

  return (
    <Container style={topSpace}>
      <Helmet titleTemplate="Wavr / %s">
        <title>Home</title>
        <meta
          name="description"
          content="We want to enable creators to make money from their work. It's as simple as Sign Up, Upload, Profit! Find drum kits, sample packs, Photoshop presets and more, all on Wavr."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Wavr! An open marketplace for creators"
        />
        <meta
          property="og:description"
          content="Join for free and see how Wavr can help you sell your digital products. Loops, drum kits, Photoshop templates, we host it all!"
        />
        <meta
          property="og:image"
          content="https://wavr.me/img/wavr-meta-home.png"
        />
        <meta property="twitter:site" content={`${Strings.twitter_handle}`} />
        <meta
          property="twitter:title"
          content="Wavr! An open marketplace for creators"
        />
        <meta
          property="twitter:description"
          content="Join for free and see how Wavr can help you sell your digital products. Loops, drum kits, Photoshop templates, we host it all!"
        />
        <meta
          property="twitter:image"
          content="https://wavr.me/img/wavr-meta-home.png"
        />
        <link type="application/json+oembed" href="/meta/home.oembed.json" />
      </Helmet>
      <FlexboxGrid justify="center" style={{ textAlign: 'center' }}>
        <FlexboxGrid.Item colspan={24}>
          <img
            src="/img/wavr-headline.svg"
            width="80%"
            style={{
              maxHeight: '110px',
              marginTop: '16px',
              marginBottom: '18px',
            }}
            alt="Heading"
          />
          <br />
          <a
            href="https://help.wavr.me/beta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/beta-badge-2.svg"
              width="15%"
              style={{ maxWidth: '70px' }}
              alt="Beta"
            />
          </a>
        </FlexboxGrid.Item>
        {!authenticated && (
          <FlexboxGrid.Item
            colspan={24}
            className="top-space less-bottom-space"
          >
            <>
              <Button
                onClick={() => {
                  go.push(routes.signup)
                }}
                appearance="primary"
                size="lg"
              >
                Join for Free!
              </Button>
              <Button
                className="less-left-space"
                onClick={() => {
                  go.push(routes.login)
                }}
                appearance="ghost"
                size="lg"
              >
                Sign In
              </Button>
            </>
          </FlexboxGrid.Item>
        )}
      </FlexboxGrid>
      <FlexboxGrid justify="center" className="more-top-space">
        <FlexboxGrid.Item colspan={16}>
          <TagGrid />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <FlexboxGrid justify="center" className="top-space">
        <FlexboxGrid.Item colspan={18}>
          {/* <FlexboxGrid justify="start">
            <FlexboxGrid.Item>
              <h3>Featured</h3>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item style={viewAllButton}>
              <Button
                appearance="ghost"
                onClick={() => {
                  go.push(routes.all, { type: 'featured' })
                }}
              >
                View All
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <FlexboxGrid justify="space-around" className="less-top-space">
            {featuredData?.featuredProducts.map((product) => (
              <FlexboxGrid.Item colspan={4}>
                <ProductSquare
                  onClick={() => {
                    go.push(routes.pack, { packId: product?.id })
                  }}
                  responsive
                  product={product as Product}
                />
              </FlexboxGrid.Item>
            ))}
          </FlexboxGrid> */}
          <FlexboxGrid justify="start" className="top-space">
            <FlexboxGrid.Item>
              <h3>New</h3>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item style={viewAllButton}>
              <Button
                appearance="ghost"
                onClick={() => {
                  go.push(routes.all, { type: 'newest' })
                }}
              >
                View All
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
          <FlexboxGrid justify="start" className="less-top-space">
            {newDataWithAd}
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  )
}

export default HomePage
