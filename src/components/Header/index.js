import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {
    Link
  } from "react-router-dom";
import "./Header.scss";


function Header() {
    const history = useHistory();
    const [searchParam, setSearchParam] = useState("");
    return (
        <nav className="header">
            <form className="header__form" onSubmit={handleSubmit}>
                <Link className="header__logo hidden-text" to="/">Mercado libre</Link>
                <label
                    className="header__search-label sr-only"
                    htmlFor="product-search"
                >
                        Busqueda de productos:
                </label>
                <input
                    className="header__search-input"
                    type="search"
                    id="product-search"
                    name="search"
                    placeholder="Nunca dejes de buscar"
                    onChange={handleOnChange}
                />
                <input className="header__search-submit hidden-text" type="submit" value="Buscar"/>
            </form>
        </nav>
    );

    function handleOnChange(e){
        const value = e && e.target && e.target.value;
        value && setSearchParam(value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(searchParam){
            history.push({
                pathname: "/items",
                search: `?search=${searchParam}`,
                params: {search: searchParam}
            });
        }
    }
}

export default Header;