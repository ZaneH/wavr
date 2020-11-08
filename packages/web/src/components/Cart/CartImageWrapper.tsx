import React from 'react'

interface Props {
  imageURL?: string
}

const CartImageWrapper = ({ imageURL }: Props) => {
  return (
    <img
      src={imageURL ?? process.env.REACT_APP_PLACEHOLDER_IMAGE}
      alt="Product"
    />
  )
}

export default CartImageWrapper
