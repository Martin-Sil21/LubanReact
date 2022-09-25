import React from "react";

export default function AboutUs() {
  return (
    <div class="flex-info">
      <div class="flex-info pics">
        <div class="flex-info pics container">
          <img src="Style-profile/images/graph.png" class="blob" alt="Blob" />
          <img
            src="Style-profile/images/Cool Kids - Standing.png"
            alt="Cool kids - standing"
          />
        </div>
      </div>
      <div class="flex-info purpose">
        <h2>Como funciona Luban!</h2>
        <p>
          Luban! es una pagina que ta ayuda a concetar con profesionales para
          poder solucionar tus problemas.Tratamos de genera un vinculo para
          poder facilitar los trabajos pequeños sean unas soluciones
          enormes.Contamos con mas de 10.000 talentos que te ayudaran a resolver
          tus problemas lo mas rapido posible.
        </p>
        <button class="flex-info button">Registrarse</button>
      </div>
    </div>
  );
}
