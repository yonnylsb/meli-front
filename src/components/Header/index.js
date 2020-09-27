import React from "react";
import {
    Link
  } from "react-router-dom";
import "./Header.scss";


function Header() {
    return (
        <nav className="header">
            <form className="header__form">
                <Link className="header__logo" to="/">Mercado libre</Link>
                <label className="header__search-label sr-only" for="product-search">Busqueda de productos:</label>
                <input className="header__search-input" type="search" id="product-search" name="product-search"/>
                <input className="header__search-input hidden-text" type="submit" value="Buscar"/>
            </form>
        </nav>
    );
}

export default Header;