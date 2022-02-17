import "./makeorder.css";
import Create from './Product/Create';
import image from './compra.png';

const MakeOrder = () => {
    return (
      <div className="create-makeorder container">
        <div className="row">
          <div className="col col-lg-6 col-xs-12">
            <Create title="Realizar Pedido" input1="Dirección" 
            input2="Información de contacto" input3="Algo que agregar a la compra"
            nameButton= "Enviar"/>
          </div>
          <div className="col col-lg-6 col-xs-12">
            <h2>Gracias por confiar en <span className="text-yellow">Visual</span><span className="text-green">Pymes</span></h2>
            <div classname="img-order">
              <img  src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default MakeOrder;
