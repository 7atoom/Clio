import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ( ) => {

    //  if i am not authenticated -> just return outlet
    
    return <>

        <Navbar />
        <Outlet />
        <Footer />
    
    </>
}

export default Layout;
