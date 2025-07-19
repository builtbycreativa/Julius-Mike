// src/layouts/Layout.jsx
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"; // create this if it doesn't exist
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" text-white m-0 relative p-0">
      <Navbar />
      <main className="">
        <Outlet /> {/* This is where page content will render */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
