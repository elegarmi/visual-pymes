import React from "react";
import Create from "../Product/Create.jsx";

import "./CreateView.css";

const CreateView = () => {
  return (
    <div className="create container">
      <div className="row">
        <div className="col col-lg-6 col-xs-12">
          <h2>¿Te gustaría que tu negocio esté en <span className="text-yellow">Visual</span><span className="text-green">Pymes</span>?</h2>
          <p>Rellena el formulario y disfruta de los beneficios</p>        
        </div>
        <Create />
      </div>
    </div>
  );
};

export default CreateView;
