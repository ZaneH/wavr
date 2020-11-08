import React, { useState } from 'react'
import {
  Alert,
  Button,
  ControlLabel,
  FlexboxGrid,
  Form,
  FormGroup,
  Input,
  Modal,
  Rate,
} from 'rsuite'
import { Product, useCreateReviewMutation } from '../../generated/types'

interface Props {
  show: boolean
  setShow: Function
  onClose?: Function
  onSuccess?: Function
  product?: Product
}

const ReviewModal = ({ show, setShow, onClose, onSuccess, product }: Props) => {
  const [stars, setStars] = useState(5)
  const [message, setMessage] = useState('')
  const [createReview, createReviewResults] = useCreateReviewMutation()

  return (
    <Modal
      backdrop="static"
      overflow={true}
      show={show}
      onHide={() => setShow(false)}
      onExited={() => onClose?.()}
    >
      <Modal.Header>
        <Modal.Title>Write a review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={20}>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Rate</ControlLabel>
                <Rate
                  defaultValue={5}
                  onChange={setStars}
                  readOnly={false}
                  size="lg"
                />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Review</ControlLabel>
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
              loading={createReviewResults.loading}
              disabled={createReviewResults.loading}
              onClick={() => {
                createReview({
                  variables: {
                    data: {
                      stars,
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

                    Alert.success('Review posted!')
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

export default ReviewModal
