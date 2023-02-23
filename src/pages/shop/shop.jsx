import React, { useEffect, useState } from "react";
import { Product } from "../../components/product"; 
import "./shop.css";

export const Shop = () => {
    const [products,setProducts] = useState([]);

    useEffect(() => (
        (async () =>{ 
        console.log("hola");
        let data = await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>json)
        
        setProducts(data);

    
})
    ), []);

    function renderShop(){
        if(products!="" && products != undefined){
    return <div className="shop">
        <div className="ShopTitle">
            <h1> Hardware Shop
            </h1>
        </div>
        <div className="products">
        {products?.map((product) => (
            <Product data={product} />
        ))}
        </div>
    </div>;
        }
        else 
        return <div>Cargando..</div>
    }

    return renderShop();
};