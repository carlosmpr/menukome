import React from "react";
import Logo from "../assets/images/menukomeLogo.svg"

export default function Navbar() {

  const [open , setOpen] = React.useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{background:'var(--bg-color)'}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
       <img src={Logo} className=""  alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick={()=> setOpen(!open)}></span>
        </button>
      </div>
      <div className={`${ open ?  null: "collapse "} navbar-collapse`}  id="navbarNavDropdown">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#info">
             Info
            </a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#features">
             Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#services">
             Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#contact">
             Contact
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}
