import {useEffect,useState} from 'react';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('./data/products.json');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  return (
    <div className="item-list-container page-width">
      <h2>{ title }</h2>
      {loading ? (
        <div className="loading-fade-in">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );

}

export default ItemListContainer;