import React from "react";
import { products } from "./data.js";
import Product from "./Product/Product.jsx";
/* import Searchbar from "./Searchbar/Searchbar"; */
import "./Home.css";
import Create from "./Product/Create.jsx";

const Home = () => {
  return (
    <div className="home">
      {/*     <Searchbar  onChange={filterName}/> */}
      <article className="home__cards">
        {products.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </article>
          <Create />
    </div>
  );
};

export default Home;
