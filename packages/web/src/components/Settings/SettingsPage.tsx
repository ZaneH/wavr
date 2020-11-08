import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import {
  Alert,
  Button,
  Container,
  Content,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormControl,
  FormGroup,
  Header,
  Panel,
  CheckboxGroup,
  Checkbox,
  Divider,
  HelpBlock,
} from 'rsuite'
import { useAuthUser, useAuthActions } from 'use-eazy-auth'
import {
  useChangePasswordMutation,
  useResendVerificationEmailMutation,
  useUpdateUserMutation,
} from '../../generated/types'

const topSpace = {
  marginTop: '32px',
}

const lessTopSpace = {
  marginTop: '16px',
}

const SettingsPage = () => {
  const { user } = useAuthUser()
  const { patchUser } = useAuthActions()

  const [updateUser, updateUserResult] = useUpdateUserMutation()
  const [changePassword, changePasswordResult] = useChangePasswordMutation()
  const [resendVerificationEmail] = useResendVerificationEmailMutation()

  const [infoFormValue, setInfoFormValue] = useState({
    email: user?.email,
    displayName: user?.displayName,
    username: user?.username,
    paypalEmail: user?.paypalEmail,
  })

  const [emailPrefs, setEmailPrefs] = useState([
    ...(user?.emailOnSale ? ['emailOnSale'] : []),
    ...(user?.emailUpdates ? ['emailUpdates'] : []),
  ])

  const [passFormValue, setPassFormValue] = useState({
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  })

  return (
    <Container style={topSpace}>
      <Helmet titleTemplate="Wavr / %s">
        <title>Settings</title>
        <meta
          name="description"
          content="Configure your Wavr account here. Feel free to change your password, update your email prefs, and update your account information."
        />
      </Helmet>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={16}>
          <Header>
            <h2>Hi, {user?.displayName || user?.username}!</h2>
            <Divider />
          </Header>
          <FlexboxGrid justify="space-between" style={lessTopSpace}>
            <FlexboxGrid.Item colspan={12}>
              <Container>
                <Panel bordered>
                  <Header>
                    <h4>Change Info</h4>
                  </Header>
                  <Content>
                    <Form
                      fluid
                      style={lessTopSpace}
                      formValue={infoFormValue}
                      // @ts-ignore
                      onChange={(formValue) => setInfoFormValue(formValue)}
                      onSubmit={() => {
                        updateUser({
                          variables: {
                            where: {
                              id: user?.id,
                            },
                            data: {
                              email: {
                                set: infoFormValue.email,
                              },
                              username: {
                                set: infoFormValue.username,
                              },
                              displayName: {
                                set: infoFormValue.displayName,
                              },
                              paypalEmail: {
                                set: infoFormValue.paypalEmail,
                              },
                              emailOnSale: {
                                set: emailPrefs.includes('emailOnSale'),
                              },
                              emailUpdates: {
                                set: emailPrefs.includes('emailUpdates'),
                              },
                            },
                          },
                        })
                          .then((result) => {
                            if (!result.data) {
                              throw new Error(
                                'There was an error updating your profile...'
                              )
                            }

                            // this has to be done manually if we are to save a network call
                            patchUser({
                              emailOnSale: emailPrefs.includes('emailOnSale'),
                              emailUpdates: emailPrefs.includes('emailUpdates'),
                              displayName: infoFormValue.displayName,
                              username: infoFormValue.username,
                              email: infoFormValue.email,
                            })

                            Alert.success('Settings updated!', 4000)
                          })
                          .catch((err) => {
                            Alert.error(
                              `There was an issue with the request: ${err}`,
                              4000
                            )
                          })
                      }}
                    >
                      <FormGroup>
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                          placeholder="Username"
                          name="username"
                          autocomplete="new-password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <ControlLabel>Display Name</ControlLabel>
                        <FormControl
                          placeholder="Display name"
                          name="displayName"
                          autocomplete="new-password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                          placeholder="Email"
                          name="email"
                          type="email"
                          autocomplete="new-password"
                        />
                        {!user?.emailVerified && (
                          <HelpBlock>
                            You email is <b>unverified</b>.{' '}
                            <span
                              style={{ color: '#f44336', cursor: 'pointer' }}
                              onClick={() => {
                                resendVerificationEmail({
                                  variables: {
                                    email: user?.email,
                                  },
                                })

                                Alert.success('Resent verification email!')
                              }}
                            >
                              Resend verification
                            </span>
                          </HelpBlock>
                        )}
                      </FormGroup>

                      <FormGroup>
                        <ControlLabel>Withdraw PayPal Email</ControlLabel>
                        <FormControl
                          name="paypalEmail"
                          placeholder="my-paypal@gmail.com"
                          type="email"
                        />
                      </FormGroup>

                      <CheckboxGroup
                        value={emailPrefs}
                        onChange={setEmailPrefs}
                      >
                        <Checkbox value="emailOnSale">
                          Email me when I make a sale
                        </Checkbox>
                        <Checkbox value="emailUpdates">
                          Send me service updates via email
                        </Checkbox>
                      </CheckboxGroup>

                      <FormGroup className="less-top-space">
                        <Button
                          type="submit"
                          appearance="primary"
                          loading={updateUserResult.loading}
                          disabled={updateUserResult.loading}
                        >
                          Submit
                        </Button>
                      </FormGroup>
                    </Form>
                  </Content>
                </Panel>
              </Container>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={11}>
              <Panel bordered>
                <Container>
                  <Header>
                    <h4>Change Password</h4>
                  </Header>
                  <Content>
                    <Form
                      fluid
                      style={lessTopSpace}
                      formValue={passFormValue}
                      // @ts-ignore
                      onChange={(formValue) => setPassFormValue(formValue)}
                      onSubmit={() => {
                        changePassword({
                          variables: {
                            oldPassword: passFormValue.oldPassword,
                            newPassword: passFormValue.newPassword,
                            confirmNewPassword:
                              passFormValue.confirmNewPassword,
                          },
                        }).then((result) => {
                          // TODO: if ran twice, it may appear successful when it's not
                          if (result?.errors) {
                            Alert.error(
                              `${result?.errors?.map(
                                (err) => `Error: ${err.message}`
                              )}`,
                              4000
                            )
                          } else {
                            Alert.success(
                              'Successfully changed password!',
                              4000
                            )
                          }

                          setPassFormValue({
                            oldPassword: '',
                            newPassword: '',
                            confirmNewPassword: '',
                          })
                        })
                      }}
                    >
                      <FormGroup>
                        <ControlLabel>Old Password</ControlLabel>
                        <FormControl
                          placeholder="Old password"
                          name="oldPassword"
                          type="password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <ControlLabel>New Password</ControlLabel>
                        <FormControl
                          placeholder="New password"
                          name="newPassword"
                          type="password"
                          autocomplete="new-password"
                        />
                      </FormGroup>

                      <FormGroup>
                        <ControlLabel>Confirm New Password</ControlLabel>
                        <FormControl
                          placeholder="Confirm new password"
                          name="confirmNewPassword"
                          type="password"
                          autocomplete="new-password"
                        />
                      </FormGroup>

                      <Button
                        appearance="primary"
                        type="submit"
                        loading={changePasswordResult.loading}
                        disabled={changePasswordResult.loading}
                      >
                        Change Password
                      </Button>
                    </Form>
                  </Content>
                </Container>
              </Panel>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Container>
  )
}

export default SettingsPage
