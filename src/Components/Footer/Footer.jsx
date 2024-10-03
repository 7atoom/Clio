import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return <>

        <footer className="bg-main-2 text-white pt-5 fixed-bottom">
            <div className="container pt-4">
                <div className="row text-main">

                    <div className="col-12 col-md-4 ">
                        <h1 className="mb-4">CLIO</h1>

                        <ul className="list-unstyled">
                            <li className="mb-2 d-flex gap-3"> <FontAwesomeIcon className="fs-4" icon={faPhone} /> <p> +1 (555) 123-4567</p> </li>
                            <li className="mb-2 d-flex gap-3"> <FontAwesomeIcon className="fs-4" icon={faEnvelope} /> <p> info@cliogems.com </p> </li>
                            <li className="mb-2 d-flex gap-3"> <FontAwesomeIcon className="fs-3" icon={faLocationDot} /> <p> 123 Diamound Strret, Luxe City, Jewelania </p> </li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mt-4">
                        <p className="mb-2">HOME</p>
                        <ul className="list-unstyled" style={{ fontSize: "13px" }}>
                            <li>Best Seller</li>
                            <li>New collection</li>
                            <li>Commissions</li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mt-4">
                        <p className="mb-2">SHOPPING</p>
                        <ul className="list-unstyled" style={{ fontSize: "13px" }}>
                            <li>Rings</li>
                            <li>Earrings</li>
                            <li>Bracelets</li>
                            <li>Necklaces</li>
                            <li>Watches</li>
                            <li>Customized</li>
                        </ul>
                    </div>

                    <div className="col-4 col-md-2 mt-4">
                        <p className="mb-2">ABOUT</p>
                        <ul className="list-unstyled" style={{ fontSize: "13px" }}>
                            <li>Company</li>
                            <li>Stuff</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    
                    <div className="text-center mt-3 col-12 mb-3">
                        <p className="mb-0">© All copy rights reservers for Clio Company</p>
                    </div>
                </div>
            </div>
        </footer>
    
    </>
}

export default Footer;
