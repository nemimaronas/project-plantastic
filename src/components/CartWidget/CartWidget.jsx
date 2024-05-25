import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import iconCart from '../../assets/icon-cart.svg';

const CartWidget = () => {
  const { cartList } = useContext(CartContext);

  const calcItemsQty = () => {
    return cartList.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <div className="header-cart">
      <img src={iconCart} className="header-cart__img" alt="Cart Widget" />
      {cartList.length > 0 && (
        <div className="header-cart__bubble">
          <span>{calcItemsQty()}</span>
        </div>
      )}
    </div>
  );
}

export default CartWidget;