import React from "react";
import "./Home.css";
import Create from "./Product/Create.jsx";

const CreateView = () => {
  return (
    <div className="create">
        <Create  title="Crear nuevo anuncio" input1="Nombre del producto" 
          input2="Precio (0,00 €)" input3="Descripción"
          nameButton= "Crear"/>
    </div>
  );
};

export default CreateView;
