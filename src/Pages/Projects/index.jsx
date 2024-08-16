import React from "react";
import "./project.css";
import Img from "../Assets/ProgrammerPicProject.jpg"
import Card from "../../Components/projectCard/index"

function index() {
  return (
    <>
    <section className="flex project-page">
      <div className="hero">
        <img src={Img} alt="Image" />
        <h2 className="title secondaryColor primaryFont">Our Projects </h2>
      </div>
      <div className="whySection flex">
        <h2 className="h2 primaryFont secondaryColor">
          Why ByteSmith?
        </h2>
        <p className="secondaryFont primaryColor secondaryFont">
          We are Bytesmith, a web development agency. Our name is a fusion of
          "bytes," the fundamental units of digital information, and "smith," a
          skilled craftsman. We pride ourselves on being architects of the
          digital world. Our team of experts transforms raw data into elegant,
          functional, and user-centric web solutions. Bytesmith is more than
          just a name; it's a promise of delivering exceptional digital
          experiences.
        </p>
        </div>
        <div className="cardContainer flex">
        <h1 className="h2 primaryFont secondaryColor">Our Projects</h1>
        <Card/>
      </div>
      </section>
    </>
  );
}

export default index;
