import React from "react";
import { Link } from "react-router-dom";
// import Profile from "../Profile/Profile";
import "./Card.css";

// const Persona = {
//     nombreCompleto:' Martin Silberstein',
//     profesion: 'Developer',
//     descripcion:`Quisiera poder desarrollarme laboralmente ampliando mis
//     conocimientos en la tarea que sea requerida. Cuento con cierta
//     experiencia laboral en distintos rubros. Soy una persona pro activa,
//     responsable, persistente, y con buena predisposición para el
//     trabajo.`,
// }

export default function Card() {
  // nombreCompleto,
  // profesion,
  // descripcion,
  // whatsapp,
  // id
  return (
    <div class="row">
      <div class="card ">
        <div class="content">
          <span></span>

          <div>
            <div class="img">
              <img
                src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800"
                alt=""
              />
            </div>
            <h2>Martin Silberstein</h2>
            <h3>Developer</h3>
          </div>
        </div>
        <div className="card-footer"></div>

        <a
          className="btn btn-light"
          target="_blank"
          href="https://wa.me/+5491157412668"
          rel="noreferrer"
        >
          Whatsapp
        </a>
        <Link to="/Profile" className="btn btn-light">
          Perfil
        </Link>
      </div>
    </div>
  );
}
