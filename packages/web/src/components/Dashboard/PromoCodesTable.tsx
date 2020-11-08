import moment from 'moment'
import React, { useState } from 'react'
import { Alert, Button, Icon, IconButton, Modal, Table } from 'rsuite'
import { useAuthUser } from 'use-eazy-auth'
import {
  useDeleteOnePromoCodeMutation,
  usePromoCodesQuery,
} from '../../generated/types'
const { Column, HeaderCell, Cell } = Table

const PromoCodesTable = () => {
  const { user } = useAuthUser()

  // showDeleteCode is the promo code ID
  const [showDeleteCode, setShowDeleteCode] = useState<string | undefined>()
  const [deletePromoCode] = useDeleteOnePromoCodeMutation({
    refetchQueries: ['PromoCodes'],
  })

  const { data: promoCodesData, loading } = usePromoCodesQuery({
    variables: {
      where: {
        user: {
          id: {
            equals: user?.id,
          },
        },
      },
    },
  })

  return (
    <>
      <Modal backdrop="static" show={!!showDeleteCode} size="xs">
        <Modal.Title>Confirm</Modal.Title>
        <Modal.Body>
          Are you sure you want to delete this code? This cannot be undone!
        </Modal.Body>
        <Modal.Footer>
          <Button
            appearance="primary"
            onClick={() => {
              deletePromoCode({
                variables: {
                  where: {
                    id: showDeleteCode,
                  },
                },
              })
                .then((result) => {
                  if (!result?.errors) {
                    setShowDeleteCode(undefined)
                    return Alert.success('Promo code was deleted')
                  } else {
                    throw new Error(
                      result?.errors?.map((err) => err.message).toString()
                    )
                  }
                })
                .catch((err) => {
                  setShowDeleteCode(undefined)
                  return Alert.error(`${err}`)
                })
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => setShowDeleteCode(undefined)}
            appearance="subtle"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <Table
        bordered
        autoHeight
        rowHeight={64}
        className="top-space"
        data={promoCodesData?.promoCodes}
        loading={loading}
        rowClassName="middle-row"
      >
        <Column flexGrow={1}>
          <HeaderCell>Product</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.product?.name ?? 'ALL'}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Created</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  {moment(rowData?.createdAt.toString()).format(
                    'MM/DD/YYYY hh:mma'
                  )}
                </span>
              )
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Code</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.code}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Availability</HeaderCell>
          <Cell>
            {(rowData) => {
              if (rowData?.expiresAt) {
                return (
                  <span>
                    Expires:{' '}
                    {moment(rowData?.expiresAt.toString()).format('MM/DD/YYYY')}
                  </span>
                )
              }

              if (rowData?.useLimit) {
                return <span>Limited: {rowData?.useLimit}</span>
              }

              if (!rowData?.useLimit && !rowData?.expiresAt) {
                return <span>Unlimited</span>
              }
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Effect</HeaderCell>
          <Cell>
            {(rowData) => {
              if (rowData?.percentOff.toString() === '100') {
                return <span>Free</span>
              }

              if (rowData?.percentOff) {
                return <span>{rowData?.percentOff}% off</span>
              }

              if (!rowData?.useLimit && !rowData?.expiresAt) {
                return <span>Unlimited</span>
              }
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Uses</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.uses}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  <IconButton
                    onClick={() => {
                      setShowDeleteCode(rowData?.id)
                    }}
                    appearance="subtle"
                    icon={<Icon icon="close" />}
                    color="red"
                  />
                </span>
              )
            }}
          </Cell>
        </Column>
      </Table>
    </>
  )
}

export default PromoCodesTable
