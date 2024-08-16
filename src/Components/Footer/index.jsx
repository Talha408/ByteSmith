import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="bg-clr">
      <Box className="footer-section" component="div">
        <Box className="column site-map">
          <h2 className="secondaryColor">Site Map</h2>
          <ul className="column primaryColor">
            <li>
              <Link to="/" className="link primaryColor">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link primaryColor">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link primaryColor">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link primaryColor">
                Contact
              </Link>
            </li>
          </ul>
        </Box>
        <Box className="column Contact">
          <h2 className="secondaryColor">Contact Us</h2>
          <ul className="column primaryColor">
            <li>83, Muslim Colony, National Town, Lahore</li>
            <li>+923353135654, +92308815979, +923207347511</li>
            <li>xyz@gmail.com</li>
            <li>www.xyz.com</li>
          </ul>
        </Box>
      </Box>
      <Box component="div" className="patent">
        <p>© 2024 ByteSmith.com. All Rights Reserved.</p>
      </Box>
    </footer>
  );
};

export default Footer;
