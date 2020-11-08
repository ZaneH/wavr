import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  Alert,
  Button,
  ButtonToolbar,
  Col,
  Container,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  Grid,
  Row,
} from 'rsuite'
import { useResetPasswordMutation } from '../../generated/types'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')
  const [resetPasswordRequest, { loading }] = useResetPasswordMutation()

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Reset Password</title>
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item>
          <Grid>
            <Row>
              <Col xs={24} md={12} mdOffset={6}>
                <h3>Reset Password</h3>
                <Form fluid>
                  <FormGroup className="less-top-space">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      name="email"
                      type="email"
                      onChange={setEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      appearance="primary"
                      onClick={() => {
                        resetPasswordRequest({
                          variables: {
                            email,
                          },
                        }).then(() => {
                          Alert.success('Sent!')
                        })
                      }}
                      loading={loading}
                      disabled={loading}
                    >
                      Send Email
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </Grid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  )
}

export default ForgotPasswordPage
