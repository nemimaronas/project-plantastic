import ProductCard from "../ProductCard/ProductCard";
import "../ProductCard/ProductCard.css";
import imgMaranta from "../../temporary/maranta-lemon-lime.jpeg";
import imgOlivo from "../../temporary/olivo-bonsai.jpeg";
import imgOrquidea from "../../temporary/orquidea.jpeg";
import imgSunset from "../../temporary/time-of-sunset.jpeg";

const ItemListContainer = ({ title }) => {

  return (
    <div className="item-list-container page-width">
      <h2>{ title }</h2>
      <ul className="item-list list-unstyled grid grid--1-col grid--2-col-tablet grid--4-col-desktop">
        <li className="grid__item item-list__item">
          <ProductCard title="Maranta Lemon Lime" price="29.99€" image={imgMaranta} link="/products" />
        </li>
        <li className="grid__item item-list__item">
          <ProductCard title="Olivo Bonsai" price="39.99€" image={imgOlivo} link="/products" />
        </li>
        <li className="grid__item item-list__item">
          <ProductCard title="Lirios Rosas" price="24.99€" image={imgSunset} link="/products" />
        </li>
        <li className="grid__item item-list__item">
          <ProductCard title="Orquídea Blanca" price="42.99€" image={imgOrquidea} link="/products" />
        </li>
      </ul>
    </div>
  );

}

export default ItemListContainer;