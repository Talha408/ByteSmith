import React from "react";
import BackGround from "../../Assets/images/aboutbg.jpg";
import "./about.css";
import aboutUsContent from "../../Seed";
import { Box } from "@mui/material";
import TimeLine from "../../Components/TimeLine";
const About = () => {
  return (
    <section className="column about-page">
      <header className="hero">
        <img src={BackGround} alt="image" />
        <h2 className="title  primaryFont">About Us</h2>
      </header>
      <section className="project-section">
        <Box component="div" className="about-content column">
          <h2 className="title secondaryColor primaryFont">Our vision</h2>
          <p>{aboutUsContent.about}</p>
        </Box>

        <Box component="div" className="project-content">
          <h2 className="title primaryFont secondaryColor">Our Projects</h2>
          {aboutUsContent.projects.map((project, index) => (
            <Box
              component="div"
              key={index}
              className="column project-content-wrapper"
            >
              <h3>{project.title}</h3>
              <p className="primaryColor">{project.description}</p>
            </Box>
          ))}
        </Box>
      </section>
      {/* Our process */}

      <section className="process-section ">
        <div className="mb-30">
          <h2 className="title">Our Process</h2>
          <p className="center">
            ByteSmith work with an organized mechanism. We know how to proceed.
          </p>
        </div>

        <TimeLine />
      </section>
    </section>
  );
};

export default About;