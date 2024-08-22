import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NavBar from "../Components/NabBar";
import Footer from "../Components/Footer";
import Project from "../Pages/Projects";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WithNav element={<About />} />} />
          <Route path="/contact" element={<WithNav element={<Contact />} />} />
          <Route path="/projects" element={<WithNav element={<Project/>} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
};

export default AppRoutes;

const WithNav = ({ element }) => {
  const location = useLocation();
  const UserRenderNavbar = location.pathname !== "/";
  return UserRenderNavbar ? (
    <>
      <NavBar />
      {element}
    </>
  ) : (
    element
  );
};
