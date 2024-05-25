import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

const Cart = () => {
  const { cartList, deleteItem } = useContext(CartContext);

  const totalPrice = () => {
    return cartList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart">
      {cartList.length === 0 ? (
        <div className="cart-empty">
          <p>No hay items en el carrito</p>
          <Link to="/products">Volver al catálogo</Link>
        </div>
      ) : (
        <>
          {cartList.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item__details">
                <p>{item.title}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price.toFixed(2)}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button onClick={() => deleteItem(item.id)} className="cart-item__delete">Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${totalPrice().toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;