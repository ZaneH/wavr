import { useApolloClient } from '@apollo/client'
import React from 'react'
import 'rsuite/lib/styles/themes/dark/index.less'
import { CartProvider } from 'use-cart'
import Auth from 'use-eazy-auth'
import { CartStorageProvider } from './components/CartStorageProvider'
import { MeDocument, useLoginMutation } from './generated/types'
import { AppRouter } from './components/Router'
import './style-override.less'

const App = () => {
  const [login] = useLoginMutation()
  const client = useApolloClient()

  const loginCall = ({ email, password }) =>
    new Promise((resolve, reject) => {
      return login({
        variables: {
          email,
          password,
        },
      })
        .then((result) => {
          const token = result?.data?.login?.token
          if (token) {
            return resolve({ accessToken: token })
          } else {
            return reject({ error: 'Invalid email or password' })
          }
        })
        .catch((err) => {
          return reject({ error: err })
        })
    })

  const meCall = (token) =>
    new Promise(async (resolve, reject) => {
      try {
        // manually call query
        const { data } = await client.query({
          query: MeDocument,
          context: {
            headers: {
              Authorization: token,
            },
          },
        })

        if (data?.me) {
          // resolve
          resolve(data?.me)
        } else {
          reject('There was a problem fetching your profile')
        }
      } catch (err) {
        localStorage.removeItem('user/token')
        localStorage.removeItem('user/cart')
      }
    })

  let cartJSON = localStorage.getItem('user/cart')
  let parsedCart = {}
  try {
    parsedCart = JSON.parse(cartJSON)
  } catch (err) {
    localStorage.removeItem('user/cart')
  }

  return (
    <CartProvider
      // just parses the cart from localStorage, don't trip
      initialCart={parsedCart?.cart ?? []}
    >
      <CartStorageProvider>
        <Auth
          loginCall={loginCall}
          meCall={meCall}
          storageBackend={localStorage}
          storageNamespace={'user/token'}
        >
          <div className="App">
            <AppRouter />
          </div>
        </Auth>
      </CartStorageProvider>
    </CartProvider>
  )
}

export default App
