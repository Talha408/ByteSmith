import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address') // Checks if the input is a valid email
      .required('Email is required'), // Ensures the email field is not empty
  });