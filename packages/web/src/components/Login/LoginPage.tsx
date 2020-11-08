import { routes } from '@wavegrid/common/constants'
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import {
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
  Message,
  Row,
} from 'rsuite'
import { useAuthActions, useAuthState } from 'use-eazy-auth'

const topBottomSpace = {
  margin: '16px 0',
}

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, clearLoginError } = useAuthActions()
  const { loginLoading, loginError } = useAuthState()

  useEffect(() => {
    clearLoginError()
  }, [clearLoginError])

  useEffect(() => {
    clearLoginError()
  }, [email, password, clearLoginError])

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Login</title>
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item>
          <Grid>
            <Row>
              <Col xs={24} md={12} mdOffset={6}>
                <h3>Login</h3>
                {!!loginError?.error && (
                  <Message
                    style={topBottomSpace}
                    showIcon
                    type="error"
                    description={`Error: ${loginError?.error}`}
                  />
                )}
                <Form
                  fluid
                  onSubmit={() => {
                    login({ email, password })
                  }}
                >
                  <FormGroup className="less-top-space">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      name="email"
                      type="email"
                      onChange={setEmail}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      name="password"
                      type="password"
                      onChange={setPassword}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <FlexboxGrid justify="space-between">
                        <FlexboxGrid.Item colspan={12}>
                          <Button
                            type="submit"
                            appearance="primary"
                            loading={loginLoading}
                            disabled={loginLoading}
                          >
                            Login
                          </Button>
                          <Link to={routes.signup}>
                            <Button appearance="subtle">Register</Button>
                          </Link>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item
                          colspan={12}
                          style={{ textAlign: 'right' }}
                        >
                          <Link to={routes.forgotpassword}>
                            <Button appearance="subtle">
                              Forgot password?
                            </Button>
                          </Link>
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </ButtonToolbar>
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

export default LoginPage
