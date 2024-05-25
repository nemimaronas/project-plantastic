import {useEffect,useState} from 'react';
import ItemList from "../Item/Item";
import "../Item/Item.css";

const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          title: "Example Item",
          description: "Example Item description.",
          price: 29.99,
          pictureUrl: "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        });
      }, 2000);
    });
  };

const ItemDetailContainer = ({ itemId }) => {

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem().then((itemData) => {
      setItem(itemData); 
      setLoading(false);
    });
  }, []);

  return (
    <div className="item-detail-container page-width">
      {loading ? (
        <div className="loading-fade-in">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      ) : (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          pictureUrl={item.pictureUrl}
        />
      )}
    </div>
  );

}

export default ItemDetailContainer;