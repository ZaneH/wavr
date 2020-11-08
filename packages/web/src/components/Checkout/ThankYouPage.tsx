import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Content,
  Divider,
  FlexboxGrid,
  Header,
  Icon,
  Panel,
} from 'rsuite'
import { useAuthState } from 'use-eazy-auth'
import {
  useGetFileUrlsQuery,
  useTransactionWithLicenseKeyQuery,
} from '../../generated/types'
import { Strings } from '@wavegrid/common/constants'
import { Helmet } from 'react-helmet'

interface ParamProps {
  transactionId: string
}

const ThankYouPage = () => {
  const { transactionId } = useParams<ParamProps>()
  const { authenticated } = useAuthState()
  const {
    data: transactionData,
    loading: transactionDataLoading,
  } = useTransactionWithLicenseKeyQuery({
    variables: {
      where: {
        id: transactionId,
      },
    },
  })

  let licenseKey: any = transactionData?.transaction?.licenseKey

  const { data: filesJSON, loading: filesJSONLoading } = useGetFileUrlsQuery({
    skip: !licenseKey,
    variables: {
      licenseKey,
    },
  })

  if (!licenseKey) {
    licenseKey = (
      <span className="used-key-text">
        This key has expired. Contact support if this was a mistake.
      </span>
    )
  }

  return (
    <FlexboxGrid justify="center" className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Thank You!</title>
      </Helmet>
      <FlexboxGrid.Item colspan={16}>
        <Container>
          <Header>
            <h3>Thank you!</h3>
            <Divider />
          </Header>
          <Content>
            <Panel bordered>
              {!authenticated && (
                <div className="used-key-text">
                  The data on this page will self destruct. Save the license key
                  if you want to add this purchase to a {Strings.brand_name}{' '}
                  account in the future. We sent you an email of this
                  transaction for safekeeping.
                  <br />
                  <br />
                </div>
              )}
              Thank you for your purchase! You can download your files here:
              {filesJSON?.getFileURLs ? (
                JSON.parse(filesJSON.getFileURLs).urls.map((urlObj) => {
                  return (
                    <div>
                      <a href={urlObj?.url}>{urlObj.name}</a>
                    </div>
                  )
                })
              ) : filesJSONLoading || transactionDataLoading ? (
                <p
                  style={{
                    padding: '16px 4px',
                    color: '#999',
                    textAlign: 'center',
                  }}
                >
                  <Icon icon="spinner" spin /> Loading...
                </p>
              ) : (
                <div className="used-key-text">
                  These links have expired. Contact support if this was a
                  mistake.
                </div>
              )}
            </Panel>
            <Panel bordered className="tiny-top-space">
              <h6>Transaction ID:</h6>
              {transactionId}
              <h6 className="less-top-space">License Key:</h6>
              {!transactionDataLoading ? licenseKey : null}
            </Panel>
          </Content>
        </Container>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}

export default ThankYouPage
