import React from "react";

import "./ItemDescription.scss";


function ItemDescription({item}) {
    const {condition, sold_quantity, title, price, description, picture} = item || {};
    const {amount, decimals} = price || {};
    const amountRound = Math.floor(amount);
    const parsedAmount =  amountRound.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const getDecimals = decimals && decimals.toString().replace("0.", "") || "";
    const getFirstDigits = getDecimals.substr(0, 2);

    return (
        <div className="productdetail">
            <section className="productdetail__info">
                <div className="productdetail__imgcontainer">
                    <img
                        className="productdetail__img"
                        src={picture}
                        alt={title}
                        title={title}
                    />
                </div>
                <h2 className="productdetail__title">Descripcion del producto</h2>
                <p className="productdetail__description">{description}</p>
            </section>
            <aside className="productdetail__aside">
                <div className="productdetail__condition">{condition}-{sold_quantity} vendidos</div>
                <h2 className="productdetail__itemtitle">{title}</h2>
                <div className="productdetail__price">
                    $ {parsedAmount}
                    <span className="productdetail__decimal">{getFirstDigits}</span>
                </div>
                <button className="productdetail__button">Comprar</button>
            </aside>
        </div>
    )
}

export default ItemDescription;