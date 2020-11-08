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
import { useVerifyEmailMutation } from '../../generated/types'
import { useGo } from '../../hooks/useGo'

interface EmailProps {
  token: string
}

const EmailVerifiedPage = () => {
  const [verifyEmail, verifyEmailResult] = useVerifyEmailMutation()

  const { token } = useParams<EmailProps>()
  const { go } = useGo()

  useEffect(() => {
    verifyEmail({
      variables: {
        token,
      },
    })
  }, [])

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Email Verification</title>
        <meta name="description" content="Email verification challenge." />
      </Helmet>
      <Grid>
        <Col lg={8} lgOffset={8}>
          <Panel bordered>
            {!verifyEmailResult.loading && verifyEmailResult.called && (
              <Container>
                <Header>
                  <h3>
                    {verifyEmailResult.data?.verifyEmail
                      ? 'Verified!'
                      : 'Oops...'}
                  </h3>
                  <Divider />
                </Header>
                <Content>
                  {verifyEmailResult.data?.verifyEmail
                    ? 'Thank you for verifying your email!'
                    : "We're not sure what happened...but there was an issue verifying your email. Try resending the verification email."}
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

export default EmailVerifiedPage
