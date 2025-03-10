import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react"; // Perbaiki import React
import NotFound404 from "./Pages/NotFound404";
import HomePages from "./Pages/HomePages";
import Login from "./Pages/Login";
import DashboardPage from "./Pages/Dashboard";
import About from "./Pages/About";
import Support from "./Pages/Support";
import Help from "./Pages/Help";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HomePage" element={<HomePages />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}
export default App;
