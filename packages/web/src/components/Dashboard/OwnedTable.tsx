import moment from 'moment'
import React, { useState } from 'react'
import { Button, Table } from 'rsuite'
import { TransactionModal } from '.'
import { Transaction } from '../../generated/types'

const { HeaderCell, Cell, Column } = Table

interface Props {
  transactions: Partial<Transaction>[]
  loading: boolean
}

const OwnedTable = (props: Props) => {
  const [viewingTransaction, setViewingTransaction] = useState()
  const [show, setShow] = useState(false)

  const openModal = (transaction) => {
    setViewingTransaction(transaction)
    setShow(true)
  }

  return (
    <>
      <TransactionModal
        show={show}
        setShow={setShow}
        transaction={viewingTransaction}
      />
      <Table
        bordered
        autoHeight
        rowHeight={64}
        className="owned-table"
        data={props.transactions}
        loading={props.loading}
        rowClassName="middle-row"
      >
        <Column flexGrow={2}>
          <HeaderCell>Transaction ID</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.id}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Date</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  {moment(rowData?.createdAt.toString()).format('MM/DD/YYYY')}
                </span>
              )
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Price</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{`$${rowData?.amount.toFixed(2)}`}</span>
            }}
          </Cell>
        </Column>
        <Column width={100}>
          <HeaderCell></HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <Button
                  onClick={() => {
                    openModal(rowData)
                  }}
                >
                  View
                </Button>
              )
            }}
          </Cell>
        </Column>
      </Table>
    </>
  )
}

export default OwnedTable
