import menu from "../assets/images/easy.png";
import hand from "../assets/images/hand.svg";
//@ts-ignore
export default function Easytouse({ lang }) {
  return (
    <div className="container marginTop" >
      <div className="row row-eq-height">
        <div className="col-md-6">
          <div className="center">
            <h4>
              {lang === "es" ? "Facil de actualizar" : "Easy to update"}
            </h4>

            <p>
              {lang === "es"
                ? "Es mas facil para agregar un plato nuevo , modificar el contenido o modificar  los precios."
                : "It is easier to add a new dish, modify the content or modify the prices."}
            </p>
         
              <img src={menu} alt="menu" className="middlewidth" />
           
          </div>
        </div>

        <div className="col-md-6 mobileSeparation">
          <div className="center">
            <h4>
              {lang === "es" ? "A la mano del cliente" : "At the customer's hand"}
            </h4>

            <p>
              {lang === "es"
                ? "Tus clientes siempre tendran el menu en su dispositivo mobil."
                : "Your clients will always have the menu on their mobile device."}
            </p>
            
              <img src={hand} alt="menu" className="middlewidth2" />
            
          </div>
        </div>
      </div>
    </div>
  );
}
