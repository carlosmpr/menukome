import menu from "../assets/images/qrimage.png";
//@ts-ignore
export default function SubMain({lang}) {
  return (
    <div className="container ">
      <div className="row row-eq-height">
        <div className="col-md-6 marginmobileBotton">
          <img src={menu} alt="menu" className="fullwidth" id="info" />
        </div>
        <div className="col-md-6">
          <div className="center">
            <h4>{lang === 'es' ? 'Facil de user': 'Easy to use' }</h4>

            <p>
            {lang === 'es' ? 'Basta con escanear el código QR y tus clientes obtendrán tu menú al instante.': 'A quick scan of the QR code and your customers will get your menu instantly.' }
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
