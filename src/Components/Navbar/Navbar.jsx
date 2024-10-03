import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Images/Logo.png";

const Navbar = () => {
    return <>

            <nav className="navbar navbar-expand-lg bg-main-2 py-4 fs-5" data-bs-theme="dark">
                <div className="container position-relative pt-1 pb-2">

                    {/* Responsive */}
                    <button className="navbar-toggler ms-auto  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item me-3"> <Link className="nav-link text-white" to="/home"> Home </Link> </li>
                            <li className="nav-item me-3"> <Link className="nav-link text-white" to="/shopping"> Shopping </Link> </li>
                            <li className="nav-item me-3"> <Link className="nav-link text-white" to="/about"> About </Link> </li>
                            <li className="nav-item me-3"> <Link className="nav-link text-white" to="/contact"> Contact </Link> </li>
                        </ul>
                    </div>

                    <img src={Logo} alt="Logo" />

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 ms-auto mb-lg-0">
                            <li className="nav-item me-3 position-relative">
                                <Link className="nav-link text-white" to="/profile"> <FontAwesomeIcon icon={faUser} /> </Link>
                                <div className="seprator"></div>
                            </li>

                            
                            <li className="nav-item me-3 position-relative">
                                <Link className="nav-link text-white" to="/cart"> <FontAwesomeIcon icon={faCartShopping} /> </Link>
                                <div className="seprator"></div>
                            </li>


                            <li className="nav-item me-3">
                                <Link className="nav-link text-white" to="/favorite"> <FontAwesomeIcon icon={faHeart} /> </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    </>
}

export default Navbar;
