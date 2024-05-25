import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItemIndex = cartList.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCartList = [...cartList];
      updatedCartList[existingItemIndex].quantity += quantity;
      setCartList(updatedCartList);
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  const deleteItem = (itemId) => {
    const updatedCartList = cartList.filter(item => item.id !== itemId);
    setCartList(updatedCartList);
  };

  const removeList = () => {
    setCartList([]);
  };

  const isInCart = (itemId) => {
    return cartList.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart, deleteItem, removeList, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;