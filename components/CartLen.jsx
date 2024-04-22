"use client"
import React from 'react'
import { useSelector } from 'react-redux'

function CartLen() {
    const cartItems = useSelector(state=>state.cart);
  
  return (
    <span>
        {cartItems.length}
    </span>
  )
}

export default CartLen