import menu from "../assets/images/eat.png";
//@ts-ignore
export default function VisualEast({lang}) {
  return (
    <div className="container marginTop" >
      <div className="row row-eq-height">
        <div className="col-md-6 ">
          <img src={menu} alt="menu" className="fullwidth" />
        </div>
        <div className="col-md-6">
          <div className="center">
          <h4>{lang === 'es' ? 'Destaca mejor sus Platos': 'More Appealing' }</h4>

<p>
{lang === 'es' ? 'Utilizando fotos que permitan resaltar sus platos, le permite a sus clientes tener una mejor apreciación del mismo y los ayuda a tomar una mejor decisión para ordenar.': 'Using photos that stand up your dishes allows your customers to appreciate better and make an ordering decision.' }
  
</p>
            {/* <h4>Visually appealing</h4>
            <p>
              Why? because how a food looks is one of the first sensory criteria
              that we use to make decisions about the foods we are selecting to
              eat. When a dish is visually appealing, it’s more appetizing
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
