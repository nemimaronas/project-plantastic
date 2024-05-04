const ProductCard = ({ title, image, price, link }) => {
  return (
    <a href={link} className="card product-card card--link">
      <div className="card__media">
        <div className="media media--square">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="card__info">
        <h3 className="card__info--title">{title}</h3>
        <div className="card__info--title">{price}</div>
      </div>
    </a>
  );
}

export default ProductCard;