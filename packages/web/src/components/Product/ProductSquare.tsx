import React from 'react'
import { Product } from '../../generated/types'
import TextTruncate from 'react-text-truncate'
import { Tooltip, Whisper } from 'rsuite'

interface Props {
  product?: Partial<Product>
  responsive?: boolean
  ad?: boolean
  onClick: Function
}

const ProductSquare = ({ product, responsive, onClick, ad }: Props) => {
  return (
    <div
      onClick={() => onClick()}
      style={{ textAlign: 'center' }}
      className={`product-square ${
        !responsive ? 'not-responsive-product-square' : ''
      }`}
    >
      <div className="thumbnail">
        <div className="round-thumbnail">
          <img
            src={`${
              product?.images?.[0] ?? process.env.REACT_APP_PLACEHOLDER_IMAGE
            }`}
            alt="Product"
          />
        </div>
        {ad && (
          <Whisper trigger="hover" speaker={<Tooltip>Paid promotion</Tooltip>}>
            <span className="promo-badge"></span>
          </Whisper>
        )}
      </div>
      <TextTruncate
        line={2}
        element="h5"
        truncateText="..."
        text={product?.name?.trim() === '' ? '(no name)' : product?.name}
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={`by: ${product?.owner?.displayName || product?.owner?.username}`}
      />
    </div>
  )
}

export default ProductSquare
