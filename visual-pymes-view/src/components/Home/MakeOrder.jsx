import "./makeorder.css";
import Create from './Product/Create';
import image from './compra.png';



const MakeOrder = () => {
    return (
      <div className="create-makeorder">
          <div>
            <Create title="Realizar Pedido" input1="Dirección" 
            input2="Información de contacto" input3="Algo que agregar a la compra"
            nameButton= "Enviar"/>
          </div>
          <div>
              <h2>Gracias por confiar en </h2>
              <div>
                  <h3>Visual</h3><h3>Pymes</h3>
              </div>
              <div classname="img-order">
                <img  src={image} alt="" />
              </div>
          </div>

      </div>
    );
  };
  
  export default MakeOrder;