import "./makeorder.css";
import Create from './Product/Create';



const MakeOrder = () => {
    return (
      <div className="create">
          <Create title="Realizar Pedido" input1="Dirección" 
          input2="Información de contacto" input3="Algo que agregar a la compra"
          nameButton= "Enviar"/>

      </div>
    );
  };
  
  export default MakeOrder;