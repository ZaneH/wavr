/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Button, Table } from 'rsuite'
import { useGetFavoritesForUserQuery } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'
import { useGo } from '../../hooks/useGo'
import { routes } from '@wavegrid/common/constants'
const { Column, HeaderCell, Cell } = Table

const FavoritesTable = () => {
  const { user } = useAuthUser()
  const { go } = useGo()
  const { data: favoritesData, loading } = useGetFavoritesForUserQuery({
    variables: {
      where: {
        id: user?.id,
      },
    },
  })

  return (
    <>
      <Table
        bordered
        autoHeight
        rowHeight={64}
        className="favorites-table top-space"
        rowClassName="middle-row"
        loading={loading}
        data={favoritesData?.user?.favorites ?? []}
      >
        <Column flexGrow={1}>
          <HeaderCell>Product</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  {rowData?.name === '' ? '(no name)' : rowData?.name}
                </span>
              )
            }}
          </Cell>
        </Column>
        <Column flexGrow={2}>
          <HeaderCell>Seller</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  <a
                    className="can-click"
                    onClick={() => {
                      go.push(routes.user, {
                        username: rowData?.owner?.username,
                      })
                    }}
                  >
                    {rowData?.owner?.displayName ?? rowData?.owner?.username}
                  </a>
                </span>
              )
            }}
          </Cell>
        </Column>
        <Column flexGrow={1} align="right">
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {(rowData) => {
              return (
                <span>
                  <Button
                    appearance="ghost"
                    color="red"
                    onClick={() => {
                      go.push(routes.pack, { packId: rowData?.id })
                    }}
                  >
                    View
                  </Button>
                </span>
              )
            }}
          </Cell>
        </Column>
      </Table>
    </>
  )
}

export default FavoritesTable
