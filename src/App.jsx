import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Shopping from "./Components/Shopping/Shopping";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/Payment/Payment";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Favorite from "./Components/Favorite/Favorite";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";

const myRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shopping", element: <Shopping /> },
      { path: "productInfo", element: <ProductInfo /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "Profile", element: <Profile /> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      { path: "favorite", element: <Favorite /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
