// pages/cart.js
"use client"
export default function CartPage() {
  const cartItems = useSelector((state) => state.cart);


  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrementQty = (id) => {
    dispatch(incrementQty(id));
  };

  const handleDecrementQty = (id) => {
    dispatch(decrementQty(id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleIncrementQty(item.id)}>+</button>
            <button onClick={() => handleDecrementQty(item.id)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
