import React from "react";
import "./Footer.css";

export default function Footer () {
  return (
    <footer id="footer">
      <div class="footer-information">
        <div class="footer-information-menu">
          <h2>Menu</h2>
          <ul>
            <a href="Home.jsx">
              <li>Inicio</li>
            </a>
            <a href="sugerencias.html">
              <li>Empleos</li>
            </a>
            <a href="perfiles.html">
              <li>¿Quiénes somos?</li>
            </a>
            <a href="registrarme.html">
              <li>Registrarse</li>
            </a>
          </ul>
        </div>
        <div class="footer-information-us">
          <h2>Nosotros</h2>
          <ul>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/lucas-ferreira-6b61b3214/"
            >
              <li>Lucas Ferreira</li>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/bruno-morales-5247b1201/"
            >
              <li>Bruno Morales</li>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/juan-ignaciocastro/"
            >
              <li>Juan Castro</li>
            </a>
            <a rel="noreferrer" 
            href="https://www.linkedin.com/in/albajsanchez/">
              <li>Alba Sanchez</li>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/anacarolinalujan/"
            >
              <li>Ana Lujan</li>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/martin-silberstein/"
            >
              <li>Martin Silberstein</li>
            </a>
          </ul>
        </div>
        <div class="footer-information-repo">
          <h2>Repositorio</h2>
          <h3>
            <a href="https://github.com/Leonelasanchez/Luban- " rel="noreferrer">
              Github
            </a>
          </h3>
          <p>
            Este es nuestro repositorio en el cual pudimos crear la plataforma
            de Luban!
          </p>
        </div>
      </div>
      <p></p>
      <div class="footer-copy">
        Copyright © 2022. Luban! Todos los derechos reservados.
      </div>
    </footer>
  );
}
