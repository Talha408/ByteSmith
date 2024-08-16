import React from "react";
import "./home.css";
import HomeNav from "../../Components/HomeNav";
import { Box, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import About from "../../Assets/Home/aboutSection.jpg";
import Service from "../../Assets/Home/service.jpg";
import { services } from "../../Seed";
import TimeLine from "../../Components/TimeLine";
const Home = (props) => {
  return (
    <section className="page-section column">
      <header className="hero-section">
        <HomeNav />
        <div className="hero-wrapper column">
          <h1 className="title primaryFont clr-white">{props.title}</h1>
          <p className="clr-white">{props.description}</p>
          <Button className="hero-btn" variant="outlined">
            Projects
            <span>
              <ArrowForward />
            </span>
          </Button>
        </div>
      </header>
      {/* About Section */}
      <section className="about-section">
        <div className="about-section-content column">
          <h2 className="h2">About Us</h2>
          <p className="description primaryColor">{props.aboutDescription}</p>
          <Button className="btn primaryFont" variant="contained">
            Learn More
            <span>
              <ArrowForward />
            </span>
          </Button>
        </div>
        <div className="about-img">
          <img src={About} alt="image" />
        </div>
      </section>
      {/* Service Section */}
      <section className="service-section">
        <Box component="div" className="column service-head">
          <h2 className="h2">Our Services</h2>
          <p className="primaryColor">{props.serviceDescription}</p>
        </Box>
        <div className="services-wrapper">
          <div className="service-card-wrapper column">
            {services.map((service, index) => (
              <Box
                component="div"
                className="service-card "
                display="flex"
                key={index}
              >
                <img src={service.img} alt="img" />
                <div className="column service-card-content">
                  <h2 className="primaryFont description">{service.title}</h2>
                  <p className="primaryColor">{service.description}</p>
                </div>
              </Box>
            ))}
          </div>
          <box component="div" className="service-img">
            <img src={Service} alt="img" />
          </box>
        </div>
      </section>
    </section>
  );
};

export default Home;
Home.defaultProps = {
  title: "Transforming Ideas into Digital Reality",

  description:
    "At ByteSmith, we specialize in turning innovative ideas into dynamic digital experiences. Our team of skilled developers and designers is dedicated to creating custom web solutions that not only meet your business needs but exceed your expectations. Whether you're a startup looking to establish an online presence or an established brand aiming to enhance your digital footprint, we deliver results that drive growth and engagement. Partner with us to bring your vision to life and make a lasting impact in the digital world.",
  aboutDescription:
    "ByteSmith is a forward-thinking software development agency that specializes in web and app development. We're more than just a tech company—we're a team of dedicated geeks who live and breathe code. Our mission is to transform your ideas into robust, scalable solutions that not only meet the demands of the modern digital landscape but also exceed your expectations.",
  serviceDescription:
    "At ByteSmith,Our services include a wide range of Information Technology services designed for business productivity.",
};
