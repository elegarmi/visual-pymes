import "./makeorder.css";
import Create from './Product/Create';
import image from './compra.png';

const MakeOrder = () => {
    return (
      <div className="create-makeorder container">
        <div className="row">

            <Create title="Realizar Pedido" input1="Dirección" 
            input2="Información de contacto" input3="Algo que agregar a la compra"
            nameButton= "Enviar"/>

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


const CreateView = () => {
  return (
    <div className="create container">
      <div className="row">
        <div className="col col-lg-6 col-xs-12">
          <h2>Gracias por confiar en <span className="text-yellow">Visual</span><span className="text-green">Pymes</span></h2>
          <p>Rellena el formulario y disfruta de los beneficios</p>        
        </div>
        <Create  title="Crear nuevo anuncio" input1="Nombre del producto" 
          input2="Precio (0,00 €)" input3="Descripción"
          nameButton= "Crear"/>
      </div>
    </div>
  );
};