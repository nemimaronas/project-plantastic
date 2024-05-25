import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial, 10));

  const handleDecrement = () => {
    setCount(prevCount => prevCount > 1 ? prevCount - 1 : prevCount);
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount < stock ? prevCount + 1 : prevCount);
  };

  const handleAddToCart = () => {
    if (stock > 0 && count > 0) onAdd(count);
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrement} disabled={count <= 0} className='button button--secondary'>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement} disabled={count >= stock} className='button button--secondary'>+</button>
      <button onClick={handleAddToCart} disabled={stock <= 0} className='button button--primary'>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;