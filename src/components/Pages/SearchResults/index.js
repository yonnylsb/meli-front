import React, {useEffect, useState, useRef} from "react";
import BreadCrumb from "../../BreadCrumb";
import ProductList from "../../ProductList";
import { useLocation } from "react-router-dom";

import "./SearchResults.scss";

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

function SearchResults() {
    const { params, search: querySearch } = useLocation();
    const getQuery = querySearch && querySearch.replace("?search=","");
    const { search } = params || {};
    const [products, setProducts] = useState([]);
    const [fetchUrl, setfetchUrl] = useState("");
    const ref = useRef(true);

    useEffect(()=>{
        ref.current = true;
        const getUrl = `http://localhost:5000/api/items?q=${search || getQuery}`;

        if((search || getQuery) && (fetchUrl !== getUrl)){
            setfetchUrl(getUrl)
        }
        if(ref && (fetchUrl !== getUrl)){
            getData(getUrl);
        }
        return () => {
            ref.current = false
        }
    }, [fetchUrl, search]);

    function getData(getUrl){
        fetch(getUrl)
            .then((response)=>response.json())
            .then(({items})=>ref.current && setProducts(items));
    }

    return (
        <section>
            <BreadCrumb listItems={BREADCRUMBTEST} />
            <ProductList products={products}/>
        </section>
    )
}

export default SearchResults;