import React from "react";
import "../components/header.css";
import toggle from "../icons/menu.svg";
import search from "../icons/search-solid.svg";
import logo from "../icons/logo.png";
var temperatura = "Temperatura";
var region = "Región";
var clima = "Clima";


const Header = (props) => {
  let input ="";
  const inputHandle = (e) => {
    input= e.target.value;
  };

  const fetchData=(e)=>{
    e.preventDefault();
    props.fetchData(input)
  }

  return (
    <header className="header">
      <navbar className="navbar">
        <div href="#" className="brand">
          <img src={logo} alt="logo" />
          <p>AGRO ROTEX</p>
        </div>
        <div className="toggle">
          <img
            src={toggle}
            alt="Hamburguesita"
            className="toggle--icon"
          />
        </div>
        <form  className="search--bar">
          <input
            className="search--input"
            onInput={inputHandle}
            type="text"
            placeholder="¿Qué desea cultivar?"
          />
          <button className="search--button" type="submit" onClick={fetchData}>
            <img src={search} alt="icon-search" />
          </button>
        </form>
        <dt className="navbar--actions">
          <dl>{`🌡 ${temperatura}`}</dl>
          <dl>{`🗺 ${region}`}</dl>
          <dl>{`🌤 ${clima}`}</dl>
        </dt>
      </navbar>
    </header>
  );
};

export default Header;
