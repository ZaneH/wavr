import { routes } from '@wavegrid/common/constants'
import React from 'react'
import {
  Alert,
  Button,
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Footer,
  Header,
  Icon,
  IconButton,
} from 'rsuite'
import { useCart } from 'use-cart'
import { useGo } from '../../hooks/useGo'
import { CartTable } from '.'
import { useCalculateCartQuery, Product } from '../../generated/types'
import { Helmet } from 'react-helmet'

const clearCartButton = {
  alignSelf: 'center',
  marginRight: '16px',
}

const CartPage = () => {
  const { items, removeLineItem, clearCart } = useCart()
  const { go } = useGo()
  const { data: cartData, loading: cartLoading } = useCalculateCartQuery({
    variables: {
      productIds: items?.map((item) => item.sku),
    },
  })

  const calculatedProducts = JSON.parse(cartData?.calculateCart ?? '{}')
    .products as Partial<Product>[]

  return (
    <FlexboxGrid justify="center" className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Cart</title>
      </Helmet>
      <FlexboxGrid.Item colspan={16}>
        <Container>
          <Header>
            <h2>My Cart</h2>
            <Divider />
          </Header>
          <Content>
            <CartTable
              loading={cartLoading}
              removeLineItem={removeLineItem}
              items={calculatedProducts}
            />
          </Content>
        </Container>
        <Footer className="top-space">
          <FlexboxGrid justify="end">
            <FlexboxGrid.Item style={clearCartButton}>
              <Button
                appearance="ghost"
                onClick={() => {
                  clearCart()
                  Alert.info('Cleared!')
                }}
              >
                Clear Cart
              </Button>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item>
              <IconButton
                appearance="primary"
                color="green"
                icon={<Icon icon="credit-card" />}
                size="lg"
                onClick={() => go.push(routes.checkout)}
              >
                Checkout
              </IconButton>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Footer>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default CartPage
