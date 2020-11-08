import moment from 'moment'
import React from 'react'
import { Table } from 'rsuite'
import { useMySalesQuery } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'

const { HeaderCell, Cell, Column } = Table

const SalesTable = () => {
  const { data: salesData, loading } = useMySalesQuery({
    fetchPolicy: 'cache-and-network',
  })

  const { user } = useAuthUser()

  return (
    <>
      <Table
        bordered
        autoHeight
        rowHeight={64}
        className="sales-table top-space"
        // return an array of { product, createdAt }
        data={salesData?.mySales}
        loading={loading}
        rowClassName="middle-row"
      >
        <Column flexGrow={2}>
          <HeaderCell>Product</HeaderCell>
          <Cell>
            {(rowData, i) => {
              return <span>{rowData?.product.name}</span>
            }}
          </Cell>
        </Column>
        <Column flexGrow={2}>
          <HeaderCell>Date</HeaderCell>
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
          <HeaderCell>Earned</HeaderCell>
          <Cell>
            {(rowData, i) => {
              return <span>${rowData?.amount.toFixed(2)}</span>
            }}
          </Cell>
        </Column>
      </Table>
    </>
  )
}

export default SalesTable
