//@ts-ignore
export default function Features({ lang }) {
  return (
    <div className="container" style={{ marginTop: "100px" }} id="services">
      <h3 style={{ textAlign: "center" }}>
        {" "}
        {lang === "es"
          ? "Como iniciar para transformar su menú?"
          : "How to start?"}
      </h3>
      <div className="row row-eq-height">
        <div className="col-md-4 cardMenu">
          <div className="center">
            <h3 className="little"> {lang === "es" ? "1-Primero" : "First"}</h3>
            <p style={{ textAlign: "center" }}>
              {lang === "es"
                ? "Una copia del menú e informaciones de sus especiales, platos favoritos y recomendaciones para acompañar los platos (Guarniciones y bebidas), cada uno de estos acompañados de fotos."
                : "A copy of your restaurant menu with information of your everyday specials, favorite dishes, and recommendations to accompany the dishes (Side dishes and drinks), each one with by photos."}
              .
            </p>
          </div>
        </div>

        <div className="col-md-4 cardMenu">
          <div className="center">
            <h3 className="little">
              {" "}
              {lang === "es" ? "2-Segundo" : "Second"}
            </h3>
            <p style={{ textAlign: "center" }}>
              {lang === "es"
                ? "Establecer el método de pago, si realizara pagos mensuales (puede retirar el servicio en cualquier momento), si va a pagar por el año completo se aplica un 10% de descuento o cada 6 meses se aplica un 5% de descuento."
                : "A copy of your restaurant menu with information of your everyday specials, favorite dishes, and recommendations to accompany the dishes (Side dishes and drinks), each one with by photos."}
              .
            </p>
          </div>
        </div>

        <div className="col-md-4 cardMenu">
          <div className="center">
            <h3 className="little">
              {" "}
              {lang === "es" ? "Opcional" : "Optional"}
            </h3>
            <p style={{ textAlign: "center" }}>
              {lang === "es"
                ? "Si desea que le tomemos las fotografías a sus platos para resaltar cada uno   de sus platos y para mejor captar la atención de los clientes con estas. Para un set mínimo de 15 platos."
                : "If you want us to take pictures of your dishes, highlight every one of them, and capture your customer attention with them, for a minimum set of 15 plates."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
