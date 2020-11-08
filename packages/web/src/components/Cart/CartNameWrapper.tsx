import React from 'react'

interface Props {
  name?: string
}

const CartNameWrapper = ({ name }: Props) => {
  return <span>{name ?? '(no name)'}</span>
}

export default CartNameWrapper
