import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../Pages/data";
import "./CardDetails.css";
const CardDetails = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const details = products.filter((product) => product.id === parseInt(id));

  const { name, image, price, description } = details[0];
  console.log(details);

  return (
    <div className="container">
      <button
        type="button"
        className="btn button w-auto"
        onClick={() => navigate(-1)}
      >
        Regresar
      </button>
      <h2 className="h2 text-center">Detalles del producto</h2>
      <div className="row">
        <div className="col-lg-6 col-xs-12 p-5 d-flex flex-column gap-5">
          <img src={image} alt={name} className="img-fluid main-img rounded" />
          <div className="row d-flex secondary-images">
            <figure className=" col-4 figure">
              <img
                src={image}
                alt={name}
                className="figure-img img-fluid rounded secondary-img "
              />
            </figure>
            <figure className=" col-4 figure ">
              <img
                src={image}
                alt={name}
                className="figure-img img-fluid rounded secondary-img "
              />
            </figure>
            <figure className=" col-4 figure">
              <img
                src={image}
                alt={name}
                className="figure-img img-fluid rounded secondary-img "
              />
            </figure>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12">
          <div className="row gap-5 ">
            <div className="col card d-flex gap-5 card-details-info p-0">
              <div className="card-body p-0">
                <h5 className="card-title p-3 fs-1 ">{name}</h5>
                <p className="card-text fs-4 ps-3 pe-3">{description}</p>
                <p className="card-text d-flex justify-content-end pe-2 fs-4">
                  {price} €
                </p>
                <Link to="/makeorder" class="btn button button--contact">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col card d-flex gap-3 p-0">
                <h5 className=" text-center title-card2 p-2">
                  Más información del proveedor
                </h5>
                <p className="text-center">DIRECCIÓN</p>
                <p className="text-center">TELÉFONO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
