import { routes } from '@wavegrid/common/constants'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
  Message,
  Row,
} from 'rsuite'
import { useSignUpMutation } from '../../generated/types'
import { useAuthActions } from 'use-eazy-auth'
import { Helmet } from 'react-helmet'

const topBottomSpace = {
  margin: '16px 0',
}

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [signUp, signUpResult] = useSignUpMutation()

  const { login } = useAuthActions()

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Sign Up</title>
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item>
          <Grid>
            <Row>
              <Col xs={24} md={12} mdOffset={6}>
                <h3>Sign Up</h3>
                {signUpResult.error && (
                  <Message
                    style={topBottomSpace}
                    showIcon
                    type="error"
                    description={`Error: ${signUpResult.error?.graphQLErrors?.map(
                      (err) => {
                        try {
                          return err?.message
                            .replaceAll(/(`|\(|\))/g, '')
                            .replace(
                              'Unique constraint failed on the fields',
                              'Field must be unique'
                            )
                        } catch (err) {
                          return 'Unknown error, more than likely someone is already using this email/username.'
                        }
                      }
                    )}`}
                  />
                )}
                <Form
                  fluid
                  onSubmit={() => {
                    signUp({
                      variables: {
                        email,
                        username,
                        password,
                        confirmPassword,
                      },
                    }).then(() => {
                      login({ email, password })
                    })
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
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                      name="username"
                      type="text"
                      onChange={setUsername}
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
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                      name="confirm"
                      type="password"
                      onChange={setConfirmPassword}
                    />
                  </FormGroup>
                  <FormGroup>
                    <ButtonToolbar>
                      <Button
                        appearance="primary"
                        disabled={signUpResult.loading}
                        loading={signUpResult.loading}
                        type="submit"
                      >
                        Register
                      </Button>
                      <Link to={routes.login}>
                        <Button appearance="subtle">
                          Already have an account?
                        </Button>
                      </Link>
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

export default SignUpPage
