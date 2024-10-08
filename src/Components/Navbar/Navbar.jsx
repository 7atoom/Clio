import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav style={{ backgroundColor: "#074D4D", padding: "20px" }}>
        <ul>
          <li>
            {" "}
            <Link to="/home"> Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/shopping"> Shopping </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about"> About </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact"> Contact </Link>{" "}
          </li>
        </ul>

        <img src="./src/Images/Logo.png" alt="" />

        <ul>
          <li>
            {" "}
            <Link to="/profile">
              {" "}
              <i className="fa-solid fa-user"></i>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/cart">
              {" "}
              <i className="fa-solid fa-cart-shopping"></i>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/favorite">
              {" "}
              <i className="fa-solid fa-heart"></i>{" "}
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
