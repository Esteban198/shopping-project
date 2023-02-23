export const Products = () =>
{
    console.log("hola");
    var products = fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json));
    console.log(products);
    return products;
}