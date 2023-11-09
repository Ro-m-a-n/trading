import { emailPattern } from "./pattern";

export const validate = (values, formik) => {
  const errors = {};
  if (formik.touched.name && !values.name) {
    errors.name = "Field is required";
  } else if (
    formik.touched.name &&
    (values.name.length < 2 || values.name.length > 60)
  ) {
    errors.name = "Must be from 2 to 60 characters";
  }

  if (formik.touched.email && !values.email) {
    errors.email = "Field is required";
  } else if (formik.touched.email && !emailPattern.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
