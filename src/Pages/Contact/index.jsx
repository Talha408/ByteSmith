import React, { useState } from "react";
import BackGround from "../../Assets/contact.jpg";
import { contactSchema } from "./schema";
import { useFormik } from "formik";
import "./contact.css";
import { TextField, Button, Box } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import ChatIcon from '@mui/icons-material/Chat';
const initialValues = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

function SignUp() {
  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://formspree.io/f/mqazbvjw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values), // Using the complete Formik state
        });

        if (response.ok) {
          console.log("Message sent successfully!");
          resetForm(); // Reset the form on successful submission
        } else {
          console.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <section className="section">
      <header className="hero">
        <img src={BackGround} alt="image" />
        <h2 className="title  primaryFont">Contact Us</h2>
      </header>
      <Box component="div" className="vision">
        <h2 className="h2 secondaryColor primaryFont">Send us a message</h2>
        <p className="description primaryColor">
          Take your business to the next level with ByteSmiths Our team of
          experts is dedicated to delivering top-notch IT services and
          innovative solutions.{" "}
        </p>
      </Box>
      <main className="contact-us">
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="field-row">
            <TextField
              type="text"
              name="firstName"
              label="First Name"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              fullWidth
              required
            />
            {errors.firstName && touched.firstName && (
              <span>{errors.firstName}</span>
            )}

            <TextField
              type="text"
              name="lastName"
              label="Last Name"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              fullWidth
              required
            />
            {errors.lastName && touched.lastName && (
              <span>{errors.lastName}</span>
            )}
          </div>

          <div className="field-row">
            <TextField
              type="text"
              name="companyName"
              label="Company Name"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.companyName}
              fullWidth
              required
            />
            {errors.companyName && touched.companyName && (
              <span>{errors.companyName}</span>
            )}
          </div>

          <div className="field-row">
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              fullWidth
              required
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>

          <div className="field-row">
            <PhoneInput
              placeholder="Enter phone number"
              value={values.phoneNumber}
              onChange={(value) => setFieldValue("phoneNumber", value)}
              required
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <span>{errors.phoneNumber}</span>
            )}
          </div>

          <div className="field-row">
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              fullWidth
              required
            />
            {errors.message && touched.message && <span>{errors.message}</span>}
          </div>

          <div className="field-row">
            <Button variant="contained" type="submit" className="button" fullWidth>
              Send Message
            </Button>
          </div>
        </form>

        <div className="info-box clr-white">
          <div className="heading">
            <h1 className="primaryFont">Get in touch</h1>
          </div>
          <div className="info">
            <h2>Visit us</h2>
            <span className="flex flex-center">
            <LocationOnIcon className="contact-icon"/>
            <p> National Town, Sanda Road Lahore</p>

            </span>
          </div>
          <div className="info ">
            <h2>Chat to us</h2>
            <span className="flex flex-center"><ChatIcon className="contact-icon"/><p>fatandhuge888@gmail.com</p></span>
          </div>
          <div className="info">
            <h2>Call us</h2>
            <span className="flex flex-center"><CallIcon className="contact-icon"/><p>(+92) 320 7347511</p></span>
          </div>
          <div className="info">
            <h2>Social Media</h2>
            <div className="icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlinedIcon className="contact-icon"/>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="contact-icon"/>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="contact-icon"/>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="contact-icon"/>
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SignUp;
