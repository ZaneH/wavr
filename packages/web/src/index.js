import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { setContext } from 'apollo-link-context'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

const cache = new InMemoryCache()
const link = createHttpLink({
  uri: `${process.env.REACT_APP_BACKEND_ENDPOINT}`,
})

const authLink = setContext((_, { headers }) => {
  try {
    const jsonToken = localStorage.getItem('user/token')
    const token = JSON.parse(jsonToken)?.accessToken

    if (token) {
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
    } else {
      return {
        headers,
      }
    }
  } catch (err) {
    const token = localStorage.getItem('user/token')

    if (token) {
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      }
    }

    return {
      headers,
    }
  }
})

const client = new ApolloClient({
  cache,
  link: authLink.concat(link),
  name: 'wavr',
  version: '1.0',
  queryDuplication: false,
  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
  },
})

Sentry.init({
  dsn:
    'https://9b4d7559c260471a97ebeff062025a86@o452283.ingest.sentry.io/5439435',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.5,
  environment: process.env.NODE_ENV,
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
