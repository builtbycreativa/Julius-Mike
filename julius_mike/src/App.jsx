// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainLayout from "./layouts/MainLayout"; // This replaces the landing components
import Booking from "./pages/Booking";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainLayout />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
}

export default App;
