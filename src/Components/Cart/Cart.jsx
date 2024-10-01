import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {

    const navigate = useNavigate();

    function checkout() {
        navigate("/payment");
    }

    return <>
    
        <h1>Cart</h1>

        <button onClick={checkout}>Checkout</button>

    </>
}

export default Cart;
