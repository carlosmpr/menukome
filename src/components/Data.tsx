import menu from "../assets/images/data.png";
  //@ts-ignore
export default function Data({lang}) {
  return (
    <div className="container marginTop" >
      <div className="row row-eq-height">
        <div className="col-md-12 marginmobileBotton">
          <div className="center">
            <h4 style={{textAlign:'center'}}>

            <h4>{lang === 'es' ? 'Obtenga información': 'Get insights' }</h4>
            </h4>

            <p>
            {lang === 'es' ? 'Le permite recolectar datos de los platos que los clientes mas le llaman la atencion, si sus clientes son frequentes o son nuevos': 'Allows you to collect data on the most viewed dishes if your customers are frequent or are new.' }
              
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <img src={menu} alt="menu" className="fullwidth" />
        </div>
      </div>
    </div>
  );
}
