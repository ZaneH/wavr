import React from 'react'
interface Props {
  price: Number
}

const CartNameWrapper = ({ price }: Props) => {
  if (price === 0) {
    return <span>Free</span>
  }

  return <span>{`$${price?.toFixed(2) ?? ''}`}</span>
}

export default CartNameWrapper
