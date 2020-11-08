import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  Alert,
  Button,
  Container,
  Content,
  ControlLabel,
  Divider,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  Header,
} from 'rsuite'
import { useCart } from 'use-cart'
import { Product, useCalculateCartQuery } from '../../generated/types'
import { CartTable } from '../Cart'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => {
  const { items } = useCart()
  const [afterCost, setAfterCost] = useState(0)
  const [beforeCost, setBeforeCost] = useState(0)
  const [promoFormValue, setPromoFormValue] = useState<any>()

  const productIds = items?.map((item) => item.sku)

  const {
    data: cartData,
    loading: cartLoading,
    refetch: refetchCart,
  } = useCalculateCartQuery({
    variables: {
      productIds,
    },
  })

  const trueCart = JSON.parse(cartData?.calculateCart ?? '{}')
  const promoEffect = trueCart?.effect
  const calculatedProducts = trueCart?.products ?? []

  const [processedCart, setProcessedCart] = useState<any[]>()

  const updateCost = () => {
    setAfterCost(trueCart?.afterTotal)
    setBeforeCost(trueCart?.beforeTotal)
  }

  const promoHadEffect =
    promoEffect?.hadEffect &&
    Number(trueCart?.afterTotal) !== Number(trueCart?.beforeTotal)

  useEffect(() => {
    if (processedCart) {
      updateCost()
    }

    if (cartData) {
      if (promoEffect?.hadEffect) {
        if (Number(trueCart?.afterTotal) === Number(trueCart?.beforeTotal)) {
          Alert.info('The promo code worked, but it had no effect', 4000)
        } else {
          Alert.success(`Promo code added ${promoEffect?.code}!`)
        }
      } else {
        // this fixes a minor bug
        if (promoEffect?.code !== '') {
          Alert.error('Invalid promo code')
        }
      }
    }
  }, [processedCart])

  useEffect(() => {
    setProcessedCart(calculatedProducts)
  }, [cartData])

  return (
    <FlexboxGrid justify="center" className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Checkout</title>
      </Helmet>
      <FlexboxGrid.Item colspan={16}>
        <Container>
          <Header>
            <h2>Checkout</h2>
            <Divider />
          </Header>
          <Content>
            <FlexboxGrid justify="space-between">
              <FlexboxGrid.Item colspan={14}>
                <CartTable
                  loading={cartLoading || calculatedProducts.loading}
                  items={processedCart as Partial<Product>[]}
                  readonly
                />
                <FlexboxGrid className="top-space">
                  <FlexboxGrid.Item colspan={24}>
                    <Form
                      onChange={(_formValue) => {
                        setPromoFormValue(_formValue)
                      }}
                      formValue={promoFormValue}
                      layout="inline"
                    >
                      <FormGroup style={{ marginBottom: '12px' }}>
                        <ControlLabel>Promo code</ControlLabel>
                        <FormControl name="code" />
                      </FormGroup>
                      <FormGroup style={{ marginBottom: '0' }}>
                        <Button
                          disabled={calculatedProducts.loading}
                          loading={calculatedProducts.loading}
                          onClick={() => {
                            refetchCart({
                              productIds,
                              promoCode: promoFormValue?.code ?? '',
                            })
                          }}
                        >
                          Add
                        </Button>
                      </FormGroup>
                    </Form>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}></FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={9}>
                <CheckoutForm
                  products={processedCart!}
                  amount={afterCost}
                  loading={cartLoading}
                  code={promoEffect?.code}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={14} className="tiny-top-space">
                <Divider />
                {promoHadEffect && (
                  <div style={{ textAlign: 'right' }}>
                    <b>Code: {promoEffect?.code}</b>
                  </div>
                )}
                {promoHadEffect ? (
                  <span style={{ textAlign: 'right' }}>
                    <h5 style={{ color: '#aaa' }}>
                      Saved: ${(beforeCost - afterCost).toFixed(2)}
                    </h5>
                    <h3>Total: ${afterCost?.toFixed(2) ?? 0}</h3>
                  </span>
                ) : (
                  <h3 style={{ textAlign: 'right' }}>
                    Total: ${afterCost?.toFixed(2) ?? 0}
                  </h3>
                )}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
        </Container>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default CheckoutPage
