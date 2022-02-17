import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, image, price } = props;
  return (
    <div className="card">
      <img className="card__img" src={image} alt={name} />
      <h3 className="card__title"> {name}</h3>
      <p className="card__info card__price">{`Precio ${price}`}</p>
      <p className="card__info card__details">Ver detalles</p>
    </div>
  );
};

export default Product;
