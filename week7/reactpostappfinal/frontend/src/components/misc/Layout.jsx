import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { FooterSocial as Footer }from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{display:"flex", height:"100vh", flexDirection:"column"}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
