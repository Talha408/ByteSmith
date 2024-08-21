import React from "react";
import { Box } from "@mui/material";
import {LinkedIn, Instagram, } from '@mui/icons-material'; // Import MUI icons
import { Link } from "react-router-dom";
import "./footer.css";
import Footerlogo from "../../Pages/Assets/logo.png";
import upworkIcon from "../../Assets/Icons/upwork-icon.png"
import fiverIcon from "../../Assets/Icons/fiverr-icon.png"
const Footer = () => {
  return (
    <footer className="bg-clr">
      <Box className="footer-section" component="div">
        <img src={Footerlogo} alt="BYTE SMITH" className="Footerlogo" />
        <Box className="column site-map">
          <h2 className="secondaryColor description">Site Map</h2>
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
          <h2 className="secondaryColor description">Contact Us</h2>
          <ul className="column primaryColor">
            <li className="link primaryColor">Sanda Rd National Town, Lahore</li>
            <li className="link primaryColor">+923207347511</li>
            <li className="link primaryColor"><a href="mailto:hassanmal8i69@gmail.com">hassanmal8i69@gmail.com</a></li>
            <li className="link primaryColor"> <a href="mailto:hassantahir688@gmail.com">hassantahir688@gmail.com</a></li>
          </ul>
        </Box>
        <Box className="column Socials">
          <h2 className="secondaryColor description">Our Socials</h2>
          <ul className="social-icons column primaryColor">
            <li>
              <a href="https://www.upwork.com/freelancers/~011cf5e9717405ef6e?mp_source=share" target="_blank" rel="noopener noreferrer" className="link primaryColor">
               <img src={upworkIcon} alt="Upwork" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/104894623/admin/inbox/" target="_blank" rel="noopener noreferrer" className="link primaryColor">
                <LinkedIn fontSize="large" /> {/* MUI LinkedIn Icon */}
              </a>
            </li>
            <li>
              <a href="https://www.fiverr.com/hassan_tahir21?public_mode=true" target="_blank" rel="noopener noreferrer" className="link primaryColor">
              <img src={fiverIcon} alt="fiver" />{/* Using Work icon as a substitute for Fiverr */}
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/freelancers/~random" target="_blank" rel="noopener noreferrer" className="link primaryColor">
                <Instagram fontSize="large" /> {/* MUI Instagram Icon (Can be replaced with a more suitable icon) */}
              </a>
            </li>
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
