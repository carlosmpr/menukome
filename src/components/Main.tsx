import menu from "../assets/images/menu.png"

//@ts-ignore
export default function Main({lang}) {
  return (
    <div className="container" id="#home">
      <div className="row row-eq-height"> 
        <div className="col-md-6" >
           <div className="center">
         
          <h4 >Menukome</h4>
          {lang === 'es' ?  <p className="questions">
          ¿Destaca tu menú las recetas más populares de tu restaurante? ¿Es difícil de leer? o actualizar?
          </p> : <p className="questions">
            Does your menu stand out your restaurant most popular recipes? Is it hard to read? or update?
          </p>}
         
          {lang === 'es' ? 
           <p >
           Con Menukome, puede transformar su menú en una aplicación móvil y resaltar sus productos. Es fácil de usar y actualizar, y puede aumentar sus ventas mostrando recomendaciones a sus clientes.
           </p>:
            <p >
            With Menukome, you can transform your menu into a mobile application, and you can highlight your products. It is easy to use and update, and you can increase your sales by showing recommendations to your customers.
            </p>
          
        }
          
          <a  className="btn btn-warning" href="https://menukomedemomenu.s3.amazonaws.com/index.html" style={{marginBottom:'20px'}}>{ lang === 'es' ? 'Ver prueba' : 'View demo'}</a>
          </div> 
        </div>
        <div className="col-md-6">
                <img src={menu} alt="menu"  className="fullwidth"/>

        </div>
      </div>
    </div>
  );
}
