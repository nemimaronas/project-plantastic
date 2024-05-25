import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Item from "../Item/Item";
import "../Item/Item.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const { addItem, isInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAdd = (quantity) => {
    addItem(item, quantity);
    console.log(`Added ${quantity} of ${item.title} to cart`);
  };

  const handleFinishPurchase = () => {
    navigate('/cart');
  };

  return (
    <div className="item-detail">
      <Item
        key={item.id}
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        pictureUrl={item.pictureUrl}
      />
      {quantityToAdd > 0 ? (
        <button onClick={handleFinishPurchase} className='button button--primary'>Terminar mi compra</button>
      ) : (
        <ItemCount stock={item.stock} initial="1" onAdd={handleAdd} />
      )}
    </div>
  );
}

export default ItemDetail;