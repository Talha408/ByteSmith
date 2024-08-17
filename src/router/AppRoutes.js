import React from "react";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NavBar from "../Components/NabBar";
import Footer from "../Components/Footer";
import Project from "../Pages/Projects";
import Error404 from "../Pages/404";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/abdulmoiz180/Portfolio/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/abdulmoiz180/Portfolio/about" element={<WithNav element={<About />} />} />
          <Route path="/abdulmoiz180/Portfolio/contact" element={<WithNav element={<Contact />} />} />
          <Route path="/abdulmoiz180/Portfolio/projects" element={<WithNav element={<Project/>} />} />
        </Routes>
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
      <Footer />
    </>
  ) : (
    element
  );
};
