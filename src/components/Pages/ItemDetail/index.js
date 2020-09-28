import React, {useEffect, useState, useRef} from "react";
import BreadCrumb from "../../BreadCrumb";
import ItemDescription from "../../ItemDescription";
import { useRouteMatch } from "react-router-dom";

import "./ItemDetail.scss";

const BREADCRUMBTEST = [
    {
        name: "Categoria",
        link: "/"
    },
    {
        name: "Categoria dos",
        link: "/"
    },
    {
        name: "Categoria tres",
        link: "/"
    }
]

function ItemDetail() {
    const { params } = useRouteMatch();
    const { id } = params || {};
    const [product, setProduct] = useState({});
    const [fetchUrl, setfetchUrl] = useState("");
    const ref = useRef(true);


    useEffect(()=>{
        ref.current = true;
        const getUrl = `http://localhost:5000/api/items/${id}`;
    
        if(id && (fetchUrl !== getUrl)){
            setfetchUrl(getUrl)
        }
        if(ref && (fetchUrl !== getUrl)){
            getData(getUrl);
        }
        return () => {
            ref.current = false
        }
    }, [fetchUrl, id]);
    
    function getData(getUrl){
        fetch(getUrl)
            .then((response)=>response.json())
            .then(({item})=>ref.current && setProduct(item));
    }

    return (
        <section>
            <BreadCrumb listItems={BREADCRUMBTEST} />
            <ItemDescription item={product} />
        </section>
    )
}

export default ItemDetail;