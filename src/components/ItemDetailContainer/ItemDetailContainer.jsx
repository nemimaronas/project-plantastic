import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const selectedItem = data.find((item) => item.id === parseInt(id));
        setItem(selectedItem);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching item data:', error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div className="item-detail-container page-width">
      {loading ? (
        <div className="loading-fade-in">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      ) : (
        <ItemDetail
          item={item}
        />
      )}
    </div>
  );

}

export default ItemDetailContainer;