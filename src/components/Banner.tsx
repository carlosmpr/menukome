
//@ts-ignore
export default function Banner ({lang}) {
 
    return (
        <div className="Banner">
            {lang === 'es' ?  <h1 >Transforme su menú en una aplicación móvil</h1>:  <h1 >Transform your Menu into a mobile application</h1>}
           
        </div>
    )
}
