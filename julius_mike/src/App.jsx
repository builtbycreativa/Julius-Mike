// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainLayout from "./layouts/MainLayout"; // This replaces the landing components
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import MoreAbout from "./pages/MoreAbout";
import MusicSection from "./pages/Music";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainLayout />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<MoreAbout />} />
        <Route path="/music" element={<MusicSection />} />
      </Route>
    </Routes>
  );
}

export default App;
