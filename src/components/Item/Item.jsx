const Item = ({ id, title, description, price, pictureUrl }) => {
  return (
    <div className="product-card card--link">
      <div className="item__media">
        <div className="media media--square">
          <img src={pictureUrl} alt={title} />
        </div>
      </div>
      <div className="item__info">
        <h3 className="item__info--title">{title}</h3>
        <div className="item__info--price">${price.toFixed(2)}</div>
        <p className="item__info--description">{description}</p>
      </div>
    </div>
  );
}

export default Item;