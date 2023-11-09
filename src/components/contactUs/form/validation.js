import { emailPattern } from "./pattern";

export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    console.log("values", values.name);
    errors.name = "field is required";
  } else if (values.name.length < 2 || values.name.length > 60) {
    errors.name = "Must be from 2 to 60 characters";
  }

  if (!values.email) {
    errors.email = "Field is required";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Field is required";
  } else if (values.message.length < 2 || values.message.length > 100) {
    errors.message = "Must be from 2 to 100 characters";
  }
  return errors;
};
