import React from 'react'
import '../components/header.css'
import menu from "../icons/menu.svg"

const Header = () => {

    const handleClick=(e)=>{
        e.target.parentElement.parentElement.classList.toggle('active');
    }

    return (
    <header className="header">

        <div className="navbar">
            <p href="#" className="toggle" id="navHamburger">
                <img onClick={handleClick} src={menu} className="menuIcon"/>
            </p>
            <p href="#" className="brand">MyName</p>
         <div className="left">
                <p href="#" className="link">Link 1</p>
             <p href="#" className="link">Link 2</p>
            </div>
         <div className="right">
            <p href="#" className="link">Link 3</p>
            </div>
          </div>
    </header>
    )
}

export default Header