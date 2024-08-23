import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./footer.css";
import Footerlogo from "../../Pages/Assets/logo.png"
import upworkIcon from "../../Assets/Icons/upwork.png";
import Insta from "../../Assets/Icons/insta.png";
import LinkedIn from "../../Assets/Icons/linkedin.png";
import fiverIcon from "../../Assets/Icons/fiverr.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="curve"></div>
      <footer className="bg-clr">
        <Box className="footer-section" component="div">
          <div className="icon-wrapper-footer">
            {/* <img src={Footerlogo} alt="BYTE SMITH" className="Footerlogo" /> */}
          </div>
          <div className="align-center">
            <Box className="column site-map">
              <h2 className="secondaryColor h2">Site Map</h2>
              <ul className="column primaryColor">
                <li>
                  <Link to="/" className="link ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link ">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="link ">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="link ">
                    Contact
                  </Link>
                </li>
              </ul>
            </Box>
            <Box className="column Contact">
              <h2 className="secondaryColor h2">Contact Us</h2>
              <ul className="column ">
                <li className="link ">
                  83 Muslim Colony, National Town, Lahore
                </li>
                <li className="link ">+923207347511</li>
                <li className="link ">
                  <a href="mailto:hassanmal8i69@gmail.com">
                    hassanmal8i69@gmail.com
                  </a>
                </li>
                <li className="link ">
                  {" "}
                  <a href="mailto:hassantahir688@gmail.com">
                    hassantahir688@gmail.com
                  </a>
                </li>
              </ul>
            </Box>
            <Box className="column Socials">
              <h2 className="secondaryColor h2">Our Socials</h2>
              <ul className="social-icons flex">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~011cf5e9717405ef6e?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link "
                  >
                    <img src={upworkIcon} alt="Upwork" className="footer-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/104894623/admin/inbox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link "
                  >
                    <img src={LinkedIn} alt="icon" className="footer-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.fiverr.com/hassan_tahir21?public_mode=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link "
                  >
                    <img src={fiverIcon} alt="fiver" className="footer-icon fiverr" />
                    {/* Using Work icon as a substitute for Fiverr */}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~random"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link "
                  >
                    <img src={Insta} alt="icon" className="footer-icon" />

                    {/* MUI Instagram Icon (Can be replaced with a more suitable icon) */}
                  </a>
                </li>
              </ul>
            </Box>
          </div>
        </Box>
        <Box component="div" className="patent">
          <p>© 2024 ByteSmith.com. All Rights Reserved.</p>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
