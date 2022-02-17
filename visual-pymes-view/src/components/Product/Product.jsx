import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  const { id, name, image, price } = props;
  return (
    <div className="card">
      <img className="card__img" src={image} alt={name} />
      <div className="card__body">
        <div className="card__info">
          <p className="card__title">{name}</p>
          <p className="card__price">{`Precio ${price}`} €</p>
        </div>
        <div className="card__buttons">
          <Link
            to={`/details/${id}`}
            className="card__info card__details card__button"
          >
            Ver detalles
          </Link>
        </div>
      </div>
      <div className="card__footer">
        <p className="card__info card__advertiser">Anunciante</p>
      </div>
    </div>
  );
};

export default Product;
