import iconCart from '../../assets/icon-cart.svg';

const CartWidget = () => {

  return (
    <div className="header-cart">
      <img src={iconCart}  className="header-cart__img" alt="Cart Widget" />
      <div className="header-cart__bubble">
        <span>2</span>
      </div>
    </div>
  );
  
}

export default CartWidget;