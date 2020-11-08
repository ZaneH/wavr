import React from 'react'
import { Table } from 'rsuite'
import { useWithdrawsQuery } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'
import moment from 'moment'
const { Column, Cell, HeaderCell } = Table

const WithdrawTable = () => {
  const { user } = useAuthUser()

  const withdraws = useWithdrawsQuery({
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
      <Table
        bordered
        autoHeight
        rowHeight={64}
        className="withdraw-table top-space"
        rowClassName="middle-row"
        data={withdraws?.data?.withdraws ?? []}
      >
        <Column flexGrow={1}>
          <HeaderCell>ID</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.id}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Approved</HeaderCell>
          <Cell>
            {(rowData) => {
              return <span>{rowData?.approved ? 'Yes' : 'No'}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={1}>
          <HeaderCell>Requested</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  {moment(rowData?.createdAt?.toString()).format(
                    'MM/DD/YYYY hh:mma'
                  )}
                </span>
              )
            }}
          </Cell>
        </Column>
      </Table>
    </>
  )
}

export default WithdrawTable
