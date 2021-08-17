import menu from "../assets/images/engi.png";

//@ts-ignore
export default function Engineering({ lang }) {
  return (
    <div className="container marginTop" >
      <div className="row row-eq-height">
        <div className="col-md-12">
          <div className="center">
            <h4>
              {lang === "es"
                ? "Facilita la comunicación"
                : "Better comunication."}
            </h4>

            <p>
              {lang === "es"
                ? "Sus clientes podrán ver día a día sus especiales, los platos recomendados del restaurante, información y contenido de los platos, además de sugerencias de guarniciones y bebidas para acompañar el plato."
                : "Your customers will be able to see your everyday specials, the most famous restaurant dishes, information and content of the plate, and suggestions of side dishes and drinks to accompany the dish."}
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div>
            <img src={menu} alt="menu" className="fullwidth" />
          </div>
        </div>
      </div>
    </div>
  );
}
