
    import React, { createContext, useEffect, useState } from 'react';


// 1. إنشاء الكونتكست
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // حفظ السلة في localStorage عند التحديث
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);



  // increase 
  const increase = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // decrease 
  const decrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  // add product 
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };




  // delete product 
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increase ,decrease }}>
      {children}
    </CartContext.Provider>
  );
};
