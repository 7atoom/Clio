import { useState } from "react";
import "./profile.css";
import Details from "./Details/Details";
import Orders from "./Orders/Orders";
import SavPayment from "./SavPayment/SavPayment";



const Profile = () => {

    const [showContent, setShowContent] = useState(1);


    return <>

        <div className="profile">

            <h1>Profile</h1>

            <ul>
                <li onClick={ () => showContent != 1 ? setShowContent(1) : "" } style={ { cursor: "pointer" } } > Account Details </li>
                <li onClick={ () => showContent != 2 ? setShowContent(2) : "" } style={ { cursor: "pointer" } } > Saved Payment </li>
                <li onClick={ () => showContent != 3 ? setShowContent(3) : "" } style={ { cursor: "pointer" } } > Orders </li>
            </ul>

            { showContent == 1 ? <Details /> : showContent == 2 ? <Orders /> : <SavPayment /> }
        </div>
    
    </>
}

export default Profile;
