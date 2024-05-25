import { Link } from 'react-router-dom';
import Item from "../Item/Item";
import "../Item/Item.css";

const ItemList = ({ items }) => {
  return (
    <div className="item-list grid grid--1-col grid--2-col-tablet grid--4-col-desktop">
      {items.map(item => (
        <Link to={`/item/${item.id}`} className="grid__item item">
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;