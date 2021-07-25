import React from 'react';
import '../components/header.css';
import {Link} from 'react-dom'
var link_curr = `<a class="toggle" href="#"><i class="fas fa-bars"></i></a>`;
var link_curr1 = `<a href="#" class="brand">MyName</a>`;
var link_curr2 = `<a href="#" class="link">Link 1</a>`;
var link_curr3 = `<a href="#" class="link">Link 2</a>`;
var link_curr4 = `<a href="#" class="link">Link 3</a>`;


const Header = () => {

    function handleClick (navHamburger) {
        navHamburger.target.parentElement.classList.toggle('active'); 
    }

    return (
        <div className="navbar">
        <div class="toggle" onClick={handleClick}><i class="fas fa-bars"></i></div>
        <a href="#" className="brand">MyName</a>
        <div className="left">
            {/* {link_curr2}
            {link_curr3} */}
        </div>
        <div className="right">
            {/* {link_curr4} */}
        </div>
    </div>
    )
}

export default Header

