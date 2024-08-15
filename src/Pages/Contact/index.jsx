// import React, { useState } from "react";
// import { contactSchema } from "./schema";
// import { useFormik } from "formik";
// import "./contact.css";
// import { TextField, Button } from "@mui/material";
// import '../../index';
// import PhoneInput from "react-phone-number-input"; // Make sure to install this library
// import "react-phone-number-input/style.css"; // To apply basic styles for the PhoneInput component
// import "@fortawesome/fontawesome-free/css/all.min.css";

// const initialValues = {
//   firstName: "",
//   lastName: "",
//   companyName: "",
//   email: "",
//   phoneNumber: "",
//   message: "",
// };

// function SignUp() {
//   const [value, setValue] = useState("");

//   const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: contactSchema,
//       onSubmit: async (values) => {
//         try {
//           const response = await fetch(
//             "https://formspree.io/f/mqazbvjw",
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 firstName: values.firstName,
//                 lastName: values.lastName,
//                 companyName: values.companyName,
//                 email: values.email,
//                 phoneNumber: value,
//                 message: values.message,
//               }),
//             }
//           );

//           if (response.ok) {
//             console.log("Message sent successfully!");
//           } else {
//             console.error("Failed to submit form");
//           }
//         } catch (error) {
//           console.error("Error submitting form:", error);
//         }
//       },
//     });

//   return (
//     <section>
//       <main className="contact-us">
//         <form className="form-wrapper" onSubmit={handleSubmit} ac>
//           <div className="field-row">
//             <TextField
//               type="text"
//               name="firstName"
//               label="First Name"
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.firstName}
//               fullWidth
//               required
//             />
//             {errors.firstName && touched.firstName && (
//               <span>{errors.firstName}</span>
//             )}

//             <TextField
//               type="text"
//               name="lastName"
//               label="Last Name"
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.lastName}
//               fullWidth
//               required
//             />
//             {errors.lastName && touched.lastName && (
//               <span>{errors.lastName}</span>
//             )}
//           </div>

//           <div className="field-row">
//             <TextField
//               type="text"
//               name="companyName"
//               label="Company Name"
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.companyName}
//               fullWidth
//               required
//             />
//             {errors.companyName && touched.companyName && (
//               <span>{errors.companyName}</span>
//             )}
//           </div>

//           <div className="field-row">
//             <TextField
//               type="email"
//               name="email"
//               label="Email"
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               fullWidth
//               required
//             />
//             {errors.email && touched.email && <span>{errors.email}</span>}
//           </div>

//           <div className="field-row">
//             <PhoneInput
//               placeholder="Enter phone number"
//               value={value}
//               onChange={setValue}
//               required
//             />
//           </div>

//           <div className="field-row">
//             <TextField
//               label="Message"
//               name="message"
//               variant="outlined"
//               multiline
//               rows={4}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.message}
//               fullWidth
//               required
//             />
//             {errors.message && touched.message && <span>{errors.message}</span>}
//           </div>

//           <div className="field-row">
//             <Button variant="contained" type="submit" fullWidth>
//               Send Message
//             </Button>
//           </div>
//         </form>

import React, { useState } from "react";
import { contactSchema } from "./schema";
import { useFormik } from "formik";
import "./contact.css";
import { TextField, Button } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    <section>
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
            <Button variant="contained" type="submit" fullWidth>
              Send Message
            </Button>
          </div>
        </form>


        <div className="info-box clr-white"  >
          <div className="heading">
            <h1 className="primaryFont">Get in touch</h1>
          </div>
          <div className="info">
            <h2>Visit us</h2>
            <p>Come say hello at our office HQ</p>
            <p>National Town, Sanda Road Lahore</p>
          </div>
          <div className="info ">
            <h2>Chat to us</h2>
            <p>Our friendly team is here to help</p>
            <p>fatandhuge888@gmail.com</p>
          </div>
          <div className="info">
            <h2>Call us</h2>
            <p>Mon-Fri from 12pm to 9pm</p>
            <p>(+92) 320 7347511</p>
          </div>
          <div className="info">
            <h2>Social Media</h2>
            <div className="icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SignUp;
