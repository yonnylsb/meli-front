import React from "react";
import { Link } from "react-router-dom";
import _map from "lodash/map";

import "./BreadCrumb.scss";

function BreadCrumb({listItems}) {
    const items = _map(listItems, ({name, link}, index)=>{
        return (
            <li className="breadcrumb__item" key={index}>
                <Link className="breadcrumb__link" to={link}>{name}</Link>
            </li>
        );
    });
    return (
        <ul className="breadcrumb">
            {items}
        </ul>
    );
}

export default BreadCrumb;