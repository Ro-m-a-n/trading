// export const Form = () => {};

import { useFormik } from "formik";
import { validate } from "./validation";
import Input from "./Input";

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => validate(values, formik),
    validateOnChange: true,
    // validateOnBlur: true,

    onSubmit: (values) => {
      console.log("submit data", values.name, values.email, values.message);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form_wrap" id="login-form">
      <Input
        name="name"
        placeholder={"Name"}
        error={formik.errors.name}
        {...formik.getFieldProps("name")}
      />

      <Input
        name="email"
        placeholder={"Email"}
        type="email"
        error={formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      <Input
        name="message"
        placeholder={"Message"}
        error={formik.errors.message}
        {...formik.getFieldProps("message")}
      />

      {/* <textarea
        name="message"
        placeholder={"Message"}
        error={formik.errors.message}
        {...formik.getFieldProps("message")}
      /> */}

      <button
        type="submit"
        disabled={
          !(
            formik.isValid &&
            formik.values.name &&
            formik.values.email &&
            formik.values.message
          )
        }
      >
        SEND
      </button>
    </form>
  );
};
