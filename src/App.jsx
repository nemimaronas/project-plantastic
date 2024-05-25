import './variables.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <>
        <NavBar />
        <ItemListContainer title='Our Bestsellers' />
      </>
    </CartContextProvider>
  )
}

export default App;
