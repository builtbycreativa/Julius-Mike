// src/layouts/Layout.jsx
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"; // create this if it doesn't exist
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className=" text-white">
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* This is where page content will render */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
