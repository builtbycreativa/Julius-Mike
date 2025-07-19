// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainLayout from "./layouts/MainLayout"; // This replaces the landing components
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainLayout />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
