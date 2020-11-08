import { routes, Strings } from '@wavegrid/common/constants'
import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { Alert, Button, Loader } from 'rsuite'
import { useCart } from 'use-cart'
import { useAuthState, useAuthUser } from 'use-eazy-auth'
import { useCreateTransactionMutation } from '../../generated/types'
import { useGo } from '../../hooks/useGo'
import ConditionalComponent from './ConditionalComponent'

interface Props {
  amount: number
  products: any[]
  loading?: boolean
  code?: string
}

const CheckoutForm = (props: Props) => {
  const [createTransaction] = useCreateTransactionMutation()

  const { user } = useAuthUser()
  const { authenticated } = useAuthState()
  const { go } = useGo()
  const { clearCart } = useCart()

  return (
    <ConditionalComponent
      condition={props.loading ?? false}
      otherChildren={
        <ConditionalComponent
          condition={props.amount !== 0}
          otherChildren={
            <div>
              <Button
                appearance="primary"
                color="green"
                block
                size="lg"
                onClick={() => {
                  let buyer = {}
                  let licenseRedeemed = {}

                  // if the buyer is authenticated, attach the buyer and disable license redemption
                  if (authenticated) {
                    buyer = {
                      buyer: {
                        connect: {
                          id: user.id,
                        },
                      },
                    }

                    licenseRedeemed = {
                      licenseRedeemed: true,
                    }
                  }

                  // this will be double-checked on the backend
                  createTransaction({
                    variables: {
                      data: {
                        amount: props.amount,
                        email: user?.email ?? undefined,
                        ...buyer,
                        ...licenseRedeemed,
                        ...(props.code
                          ? {
                              promos: {
                                connect: [
                                  {
                                    code: props.code,
                                  },
                                ],
                              },
                            }
                          : {}),
                        products: {
                          connect: props.products.map((product) => {
                            return {
                              id: product.id,
                            }
                          }),
                        },
                      },
                    },
                  })
                    .then((res) => {
                      clearCart()

                      go.push(routes.thankyou, {
                        transactionId: res?.data?.createOneTransaction?.id,
                      })
                    })
                    .catch((err) => {
                      console.log(err)
                    })
                }}
              >
                Checkout
              </Button>
            </div>
          }
        >
          <div>
            <PayPalButton
              amount={props.amount}
              currency="USD"
              options={{
                commit: true,
                clientId:
                  process.env.NODE_ENV === 'production'
                    ? process.env.REACT_APP_PAYPAL_CLIENT_ID
                    : process.env.REACT_APP_SANDBOX_PAYPAL_ID,
              }}
              createOrder={async (data, actions) => {
                console.log(props.products)
                console.log(props.amount)
                const newOrder = await actions.order.create({
                  intent: 'CAPTURE',
                  payer: {
                    payment_method: 'paypal',
                  },
                  application_context: {
                    shipping_preference: 'NO_SHIPPING',
                    brand_name: Strings.brand_name,
                  },
                  purchase_units: [
                    {
                      soft_descriptor: 'Creative assets',
                      amount: {
                        currency_code: 'USD',
                        value: props.amount.toFixed(2),
                        breakdown: {
                          item_total: {
                            currency_code: 'USD',
                            value: props.amount.toFixed(2),
                          },
                        },
                      },
                      items: props.products.map((product) => {
                        return {
                          name: product.name,
                          sku: product.id,
                          unit_amount: {
                            currency_code: 'USD',
                            value: product?.onSale
                              ? product?.salePrice
                              : product.amount?.toFixed(2)!,
                          },
                          currency: 'USD',
                          quantity: 1,
                          category: 'DIGITAL_GOODS',
                        }
                      }),
                    },
                  ],
                })

                return newOrder
              }}
              onError={(err) => {
                console.log('PayPal Error: ', err)
                Alert.error(err?.toString(), 5000)
              }}
              onSuccess={async (details, data) => {
                console.log('Details: ', details)
                console.log('Data: ', data)

                let buyer = {}
                let licenseRedeemed = {}

                // if the buyer is authenticated, attach the buyer and disable license redemption
                if (authenticated) {
                  buyer = {
                    buyer: {
                      connect: {
                        id: user.id,
                      },
                    },
                  }

                  licenseRedeemed = {
                    licenseRedeemed: true,
                  }
                }

                // this will be double-checked on the backend
                createTransaction({
                  variables: {
                    data: {
                      paypalPaymentId: details?.id,
                      amount: props.amount,
                      email: user?.email ?? undefined,
                      ...(props.code
                        ? {
                            promos: {
                              connect: [
                                {
                                  code: props.code,
                                },
                              ],
                            },
                          }
                        : {}),
                      ...buyer,
                      ...licenseRedeemed,
                      products: {
                        connect: props.products.map((product) => {
                          return {
                            id: product.id,
                          }
                        }),
                      },
                    },
                  },
                })
                  .then((res) => {
                    clearCart()

                    go.push(routes.thankyou, {
                      transactionId: res?.data?.createOneTransaction?.id,
                    })
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              }}
            ></PayPalButton>
          </div>
        </ConditionalComponent>
      }
    >
      <div
        style={{
          textAlign: 'center',
          marginTop: '4vh',
        }}
      >
        <Loader />
      </div>
    </ConditionalComponent>
  )
}

export default CheckoutForm
