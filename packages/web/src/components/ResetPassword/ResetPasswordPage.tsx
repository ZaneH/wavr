import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import {
  Alert,
  Button,
  Col,
  Container,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  Panel,
} from 'rsuite'
import { useChangePasswordWithTokenMutation } from '../../generated/types'

interface ResetProps {
  token: string
}

const ResetPasswordPage = () => {
  const [changePassword] = useChangePasswordWithTokenMutation()
  const { token } = useParams<ResetProps>()
  const [formValue, setFormValue] = useState<any>()

  return (
    <Container className="top-space">
      <Helmet titleTemplate="Wavr / %s">
        <title>Reset Password</title>
      </Helmet>
      <Grid>
        <Col lg={8} lgOffset={8}>
          <Panel bordered>
            <Form
              fluid
              formValue={formValue}
              onChange={(_formValue) => setFormValue(_formValue)}
            >
              <FormGroup>
                <ControlLabel>New Password</ControlLabel>
                <FormControl name="newPassword" type="password" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Confirm Password</ControlLabel>
                <FormControl name="confirmPassword" type="password" />
              </FormGroup>
              <FormGroup>
                <Button
                  onClick={() => {
                    changePassword({
                      variables: {
                        token,
                        newPassword: formValue.newPassword,
                        confirmPassword: formValue.confirmPassword,
                      },
                    })
                      .then((res) => {
                        if (!res.data) {
                          throw new Error(
                            res.errors?.map((err) => err.message).toString()
                          )
                        }

                        Alert.success('Password changed!')
                        setFormValue({
                          newPassword: '',
                          confirmPassword: '',
                        })
                      })
                      .catch((err) => {
                        Alert.error(`${err ?? '(unknown)'}`)
                      })
                  }}
                  appearance="primary"
                >
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Panel>
        </Col>
      </Grid>
    </Container>
  )
}

export default ResetPasswordPage
