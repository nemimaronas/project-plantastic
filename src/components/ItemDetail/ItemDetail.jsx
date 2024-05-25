import Item from "../Item/Item";
import "../Item/Item.css";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
  const handleAdd = (quantity) => {
    console.log(`Added ${quantity} of ${item.title} to cart`);
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
      <ItemCount stock={item.stock} initial="1" onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetail;