import React from "react";
import '../assets/menu.css';

function Menu(props) {
  return (
    <div className="contenedor-menu">
    <div className="contenedor-menu-img" >
            <img className="imagen-platillo"  src={require(`../assets/img/platillo-${props.imagen}.png`)} alt="img-platillos" />
        </div>
        <div className='contenedor-text-platillo'>
            <p className='nombre-platillo'><strong>{props.nombre}</strong> {props.coreno}</p>
            <p className='descripcion-platillo'>{props.descripcion} </p>
            <p className='precio-platillo'>{props.precio}</p>
        </div>
    </div>
  );
}

export default Menu;
