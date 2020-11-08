import React, { useState } from 'react'
import {
  Alert,
  Button,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormGroup,
  HelpBlock,
  Input,
  Modal,
} from 'rsuite'
import { Product, useCreateReportMutation } from '../../generated/types'

interface Props {
  show: boolean
  setShow: Function
  onClose?: Function
  onSuccess?: Function
  product?: Product
}

const ReportModal = ({ show, setShow, onClose, onSuccess, product }: Props) => {
  const [message, setMessage] = useState('')
  const [createReport, createReportResults] = useCreateReportMutation()

  return (
    <Modal
      backdrop="static"
      overflow={true}
      show={show}
      onHide={() => setShow(false)}
      onExited={() => onClose?.()}
    >
      <Modal.Header>
        <Modal.Title>Report a product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={20}>
            <Form fluid>
              <FormGroup>
                <ControlLabel>
                  Message
                  <HelpBlock tooltip style={{ marginTop: '0' }}>
                    Include any information that may help
                  </HelpBlock>
                </ControlLabel>
                <Input
                  onChange={setMessage}
                  componentClass="textarea"
                  rows={8}
                />
              </FormGroup>
            </Form>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Modal.Body>
      <Modal.Footer>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={20}>
            <Button
              color="green"
              appearance="primary"
              loading={createReportResults.loading}
              disabled={createReportResults.loading}
              onClick={() => {
                createReport({
                  variables: {
                    data: {
                      message,
                      product: {
                        connect: {
                          id: product?.id,
                        },
                      },
                    },
                  },
                })
                  .then((res) => {
                    if (res?.data === null) {
                      throw new Error(res?.errors?.[0].message)
                    }

                    Alert.success('Sent report. Thank you!')
                    onSuccess?.()
                    setShow(false)
                  })
                  .catch((err) => {
                    Alert.error(`${err}`)
                  })
              }}
            >
              Submit
            </Button>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Modal.Footer>
    </Modal>
  )
}

export default ReportModal
