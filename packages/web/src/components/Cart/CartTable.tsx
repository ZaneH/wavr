import React from 'react'
import { Table, ButtonToolbar, ButtonGroup, Button } from 'rsuite'
import { useGo } from '../../hooks/useGo'
import CartImageWrapper from './CartImageWrapper'
import CartNameWrapper from './CartNameWrapper'
import { routes } from '@wavegrid/common/constants'
import { CartPriceWrapper } from '.'
import { Product } from '../../generated/types'

const { Column, HeaderCell, Cell } = Table

interface Props {
  items: Partial<Product>[]
  // removeLineItem is passed from useCart
  removeLineItem?: Function
  readonly?: Boolean
  loading?: boolean
}

const CartTable = (props: Props) => {
  const { go } = useGo()

  // TODO: This table could be optimized with a custom resolver
  // https://www.npmjs.com/package/react-use-cart (or use this)

  return (
    <Table
      loading={props.loading}
      bordered
      data={props.items}
      autoHeight
      rowHeight={64}
      className={`cart-table ${props.readonly ? 'readonly-table' : ''}`}
      rowClassName="middle-row"
    >
      <Column flexGrow={1} align="center">
        <HeaderCell></HeaderCell>
        <Cell>
          {(rowData) => <CartImageWrapper imageURL={rowData?.images?.[0]} />}
        </Cell>
      </Column>
      <Column flexGrow={3}>
        <HeaderCell>Name</HeaderCell>
        <Cell>{(rowData) => <CartNameWrapper name={rowData?.name} />}</Cell>
      </Column>
      <Column flexGrow={2}>
        <HeaderCell>Price</HeaderCell>
        <Cell>
          {(rowData) => (
            <CartPriceWrapper
              price={rowData?.onSale ? rowData?.salePrice : rowData?.amount}
            />
          )}
        </Cell>
      </Column>
      {!(props.readonly === true) && (
        <Column width={200} align="right">
          <HeaderCell></HeaderCell>
          <Cell>
            {(rowData) => {
              const removeItem = () => {
                return props.removeLineItem?.(rowData?.id)
              }

              const viewItem = () => {
                return go.push(routes.pack, { packId: rowData?.id })
              }

              return (
                <span>
                  <ButtonToolbar>
                    <ButtonGroup>
                      <Button appearance="ghost" onClick={viewItem}>
                        View
                      </Button>
                      <Button appearance="ghost" onClick={removeItem}>
                        Remove
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </span>
              )
            }}
          </Cell>
        </Column>
      )}
    </Table>
  )
}

export default CartTable
