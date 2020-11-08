import { useEffect } from 'react'
import { useCart } from 'use-cart'

/**
 * Simple Wrapper to keep the shopping cart in localStorage
 */
const CartStorageProvider = ({ children }) => {
  const { items } = useCart()

  useEffect(() => {
    localStorage.setItem('user/cart', JSON.stringify({ cart: items }))
  }, [items])

  return children
}

export default CartStorageProvider
