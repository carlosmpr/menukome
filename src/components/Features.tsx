import flexible from "../assets/images/computer.svg";
import mail from "../assets/images/application.svg";
import updates from "../assets/images/update.svg";
//@ts-ignore
export default function Features({lang}) {
  return (
    <div className="container marginTop"  id="features">
      <h3 style={{ textAlign: "center", marginBottom: "35px" }}> {lang === 'es' ? 'Sobre la Aplicación' : 'About the App'}</h3>
      <div className="row row-eq-height">
        <div className="col-md-4 marginmobileBotton">
          <div className="center">
            <img src={flexible} alt="menu" className="halfwidth" />
            <h3 className="little"> Flexible</h3>
            <p>
              {lang ==='es' ? 'Le brinda la facilidad si desea manejarla usted mismo, agregar más funcionalidades, como pedidos, pagos entre otros.':'You can manage yourself, add more functionalities such as orders and payments.'}
              
            </p>
          </div>
        </div>

        <div className="col-md-4 marginmobileBotton mobileSeparation">
          <div className="center ">
            <img src={mail} alt="menu" className="halfwidth" />
            <h3 className="little"> {lang === 'es' ? 'No hay que instalarla' :'No need to install'}</h3>
            <p>
              {lang ==='es' ? 'Una aplicación web progresiva que combina la apariencia de las aplicaciones móviles nativas sin la necesidad de instalarla.':'A progressive web application that combines the appearance of native mobile applications without the need to install it.'}
              
            </p>
          </div>
        </div>

        <div className="col-md-4 mobileSeparation">
          <div className="center ">
            <img src={updates} alt="menu" className="halfwidth " />
            <h3 className="little"> {lang === 'es' ? 'Mantenimiento' :' support'}</h3>
            <p >
            {lang ==='es' ? 'Soporte técnico, en caso de modificaciones, mantenimientos, actualizaciones o errores para su aplicación a toda hora.':'Technical support, in case of modifications, maintenance, updates or errors for your application at any time'}
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
