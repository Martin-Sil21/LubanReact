import React from "react";

export default function Landing () {
    return <div className="componentHome">
       <div className="text-container">
            <div className="text1">
                <h1>BOOST YOUR <span className="type"></span></h1>
                <h1>IMPULSA TU <span className="type1"></span></h1>
            </div>

            <div className="text2">
                <h3>Únete a Luban!, la plataforma que te ayudará a conectar con tu próximo empleo.</h3>
            </div>
        </div>

        <div className="img-container">
            <img className="img1" src="../../Imagenes/Cool Kids - Sitting.png" alt='Img not found'/>
        </div>

        <div className="button-container">
            {/* <a href="" className="button-main">Explora Oportunidades</a> */}

            <div className="icon-container">
                <img className="icons" src="../../Imagenes/avatar1.png" alt='Img not found'/>
                <img className="icons" src="../../Imagenes/avatar2.png" alt='Img not found'/>
                <img className="icons" src="../../Imagenes/avatar3.png" alt='Img not found'/>
            </div>

            <h3 className="icon-text"> ⭐⭐⭐⭐ 
            (4,5 / 5 estrellas)</h3>
        </div>
    </div>
    
}