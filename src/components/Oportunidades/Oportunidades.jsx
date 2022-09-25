import React from "react";
import Cards from "../Cards/Cards";
import "./Oportunidades.css";




export default function Oportunidades() {




  return (
    <div class="oportunidades">
      <div className="titulos">
        <h3 class="titulo">ESTÁS BUSCANDO EMPLEO?</h3>
        <a href="oportunidades" className="button log d-inline-flex p-2">
          Descubrí oportunidades que te interesen!
        </a>
        <hr />
        <h3 class="titulo">ESTÁS BUSCANDO TALENTO?</h3>
        <a href="oportunidades" className="button log d-inline-flex p-2">
          Descubrí los mejores Perfiles!
        </a>
      </div>
      {/* <!-- <img class="coolgirl" src="style-aboutus/img/coolgirl.png" alt=""> --> */}

       <div className="oportunidadesCards">
        <Cards></Cards>
   
      </div>

    </div>
  );
}
