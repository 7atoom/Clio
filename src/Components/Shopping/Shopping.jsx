import "./shopping.css";
import ProductDetails from "./ProductDetails/ProductDetails";


const products = [
    { id: 1, src: "./src/Images/Product-1.png", title: "Watches" },
    { id: 2, src: "./src/Images/Product-2.png", title: "Watches" },
    { id: 3, src: "./src/Images/Product-3.png", title: "Watches" },
    { id: 4, src: "./src/Images/Product-4.png", title: "Watches" },
    { id: 5, src: "./src/Images/Product-5.png", title: "Watches" },
    { id: 6, src: "./src/Images/Product-6.png", title: "Watches" },
    { id: 7, src: "./src/Images/Product-7.png", title: "Watches" },
]


const Products = () => {
    return <>
    
        <h1>Products</h1>

        <div className="product-details" style={ { display: "flex", gap: '10px' } }>
            { products.map( product => {
                return <ProductDetails key={product.id} src={product.src} title={product.title}  />
            } ) }
        </div>


    </>
}

export default Products;
