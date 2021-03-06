import React from "react";
import { products } from "./data.js";
import Product from "../Product/Product";
import "./Home.css";
import "../Home/Carousel/Carousel.css";


const Home = () => {
  return (
    <div className="home">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button className="slider_buttons" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button className="slider_buttons" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button className="slider_buttons" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={[products[0].image]} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={[products[8].image]} class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={[products[4].image]} class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
      <article className="home__cards">
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </article>
    </div>
  );
};

export default Home;
