"use client";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/CartSlice";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, currentItem) => {
    return acc + currentItem.price * currentItem.qty;
  }, 0).toFixed(2);

  // toFixed(2); make float value 2 eg: 52.22 , 1000.56

  const handleRemoveFromCart = (cartId) => {
    dispatch(removeFromCart(cartId));
    toast.success("Item removed successfully");
  };

  const handleIncrementQty = (cartId) => {
    dispatch(incrementQty(cartId));
    toast.success("Item Incremented successfully");

  } 
  const handleDecrementQty = (cartId) => {
    dispatch(decrementQty(cartId));
    toast.success("Item decremented successfully");

  } 
  
  // console.log(cartItems,"cartItems");
  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <a href="/">Go to HOME</a>
      </div>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={item.image} alt={item.title} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-500">Price: ${item.price}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500">Quantity: {item.qty}</p>
                <div className="flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleIncrementQty(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleDecrementQty(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Cart Items</p>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-500">Subtotal {totalPrice} </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
