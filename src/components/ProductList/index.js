import React from "react";
import { Link } from "react-router-dom";
import _map from "lodash/map";

import "./ProductList.scss";

function ProductList({products}) {
    const items = _map(products, ({title, picture, price = {}, free_shipping, location, id}, index)=>{
        const { amount } = price;
        const parsedAmount =  amount.toString().replace(".", ",").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        const itemsUrl = `/items/${id}`;

        return (
            <li className="productList__item" key={index}>
                <Link className="productList__item__img" to={itemsUrl}>
                    <img src={picture}/>
                </Link>
                <div className="productList__item__detail">
                    <span className="productList__item__amount">$ {parsedAmount}</span>
                    {
                        free_shipping && <span
                            className="productList__item__shipping hidden-text"
                            title="Free Shipping"
                        >
                            Free shipping
                        </span>
                    }
                    <Link className="productList__item__title" to={itemsUrl}>
                        {title}
                    </Link>
                </div>
                <span className="productList__item__location">{location}</span>
            </li>
        );
    });
    return (
        <div className="product">
            <ul className="productList__list">
                {items}
            </ul>
        </div>
    );
}

export default ProductList;