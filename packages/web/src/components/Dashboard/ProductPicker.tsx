import React from 'react'
import { InputPicker, Icon } from 'rsuite'
import { useUserProductsLazyQuery } from '../../generated/types'
import { useAuthUser } from 'use-eazy-auth'

interface Props {
  onChange: Function
  disabled?: boolean
}

const ProductPicker = ({ disabled, onChange }: Props) => {
  const { user } = useAuthUser()

  const [
    getProducts,
    { data: userProductsData, loading, called },
  ] = useUserProductsLazyQuery({
    variables: {
      where: {
        id: user?.id,
      },
    },
  })

  return (
    <InputPicker
      disabled={disabled}
      data={
        userProductsData?.user?.products.map((product) => {
          return {
            label: product?.name.trim() === '' ? '(no name)' : product?.name,
            value: product?.id,
          }
        }) ?? []
      }
      onChange={(value) => {
        onChange(value)
      }}
      style={{ width: 224 }}
      onOpen={() => {
        if (!called) {
          getProducts()
        }
      }}
      renderMenu={(menu) => {
        if (loading || !called) {
          return (
            <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
              <Icon icon="spinner" spin /> Loading...
            </p>
          )
        }
        return menu
      }}
    />
  )
}

export default ProductPicker
