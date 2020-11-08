import { routes } from '@wavegrid/common/constants'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import {
  Button,
  Col,
  Container,
  Content,
  Divider,
  Grid,
  Header,
  Panel,
} from 'rsuite'
import { useVerifyWithdrawMutation } from '../../generated/types'
import { useGo } from '../../hooks/useGo'

interface VerifyProps {
  token: string
}

const VerifyWithdrawPage = () => {
  const [verifyWithdraw, verifyWithdrawResult] = useVerifyWithdrawMutation()

  const { token } = useParams<VerifyProps>()
  const { go } = useGo()

  useEffect(() => {
    verifyWithdraw({
      variables: {
        token,
      },
    })
  }, [])

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Withdraw Verification</title>
      </Helmet>
      <Grid>
        <Col lg={8} lgOffset={8}>
          <Panel bordered>
            {!verifyWithdrawResult.loading && verifyWithdrawResult.called && (
              <Container>
                <Header>
                  <h3>
                    {verifyWithdrawResult.data?.verifyWithdraw
                      ? 'Withdraw Started'
                      : 'Oops...'}
                  </h3>
                  <Divider />
                </Header>
                <Content>
                  {verifyWithdrawResult.data?.verifyWithdraw ? (
                    <span>
                      Your withdraw request has been submitted! We'll send the
                      balance to the PayPal email you specified in your{' '}
                      <a href={routes.settings}>account settings</a>
                    </span>
                  ) : (
                    <span>
                      We're not sure what happened...but there was an issue
                      processing your withdraw request.{' '}
                      <a
                        href="https://help.wavr.me/contact"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Contact support
                      </a>{' '}
                      if this issue persists.
                    </span>
                  )}
                </Content>
                <Button
                  onClick={() => {
                    go.push(routes.home)
                  }}
                  className="top-space"
                  appearance="primary"
                >
                  Go Home
                </Button>
              </Container>
            )}
          </Panel>
        </Col>
      </Grid>
    </Container>
  )
}

export default VerifyWithdrawPage
