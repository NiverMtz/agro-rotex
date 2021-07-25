import React from "react";
import "../components/header.css";
import toggle from "../icons/menu.svg";
import search from "../icons/search-solid.svg";

const Header = () => {
  const handleClick = (e) => {
    console.log("Hola Mundo!");
  };

  return (
    <header className="header">
      <navbar className="navbar">
        <p href="#" className="brand">
          AGRO ROTEX
        </p>
        <div className="toggle">
          <img
            onClick={handleClick}
            src={toggle}
            alt="Hamburguesita"
            className="toggle--icon"
          />
        </div>
        <form onSubmit="" className="search--bar">
          <input 
          className="search--input"
          onInput=""
          type="text" 
          placeholder="¿Qué desea cultivar?" />
          <button
          className="search--button"
          type="submit"><img src={search} alt="icon-search" /></button>
        </form>
        <div className="navbar--actions">
          <p> 🌡 Temperatura</p>
          <p> 🗺 Región</p>
          <p> 🌤 Clima</p>       
        </div>
      </navbar>
    </header>
  );
};

export default Header;
