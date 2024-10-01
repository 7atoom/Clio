import { useNavigate } from 'react-router-dom';
import './productDetails.css';

const ProductDetails = ( { src, title } ) => {

    const navigate = useNavigate();

    function productInfo() {
        navigate("/productInfo");
    }


    return <>
    
        <div className="detials" onClick={productInfo} style={ { cursor: "pointer" } } >
            <img src={src} alt={title} style={ { width: "100px", height: "100px" } } />
            <p> {title} </p>
        </div>

    </>
}

export default ProductDetails;
