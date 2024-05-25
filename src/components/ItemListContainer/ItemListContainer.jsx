import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const filteredItems = id ? data.filter(item => item.categoryId === parseInt(id)) : data;

        setItems(filteredItems);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, [id]);

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