import { useFormik } from "formik";
import { validate } from "./validation";

export const Form = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: (values) => validate(values, formik),
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log("submit data", values.name, values.email, values.message);
      formik.resetForm();
    },
  });

  const { handleSubmit, errors, touched, getFieldProps, values, isValid } =
    formik;
  return (
    <form onSubmit={handleSubmit} className="form_wrap" id="login-form">
      <input
        name="name"
        placeholder={"Name"}
        style={{
          borderColor: touched.name && (errors.name ? "red" : "green"),
        }}
        {...getFieldProps("name")}
      />
      {errors.name && touched.name && (
        <div className="text_error">{errors.name}</div>
      )}
      <input
        name="email"
        placeholder={"Email"}
        type="email"
        style={{
          borderColor: touched.email && (errors.email ? "red" : "green"),
        }}
        {...getFieldProps("email")}
      />
      {errors.email && touched.email && (
        <div className="text_error">{errors.email}</div>
      )}
      <textarea
        name="message"
        placeholder={"Message"}
        style={{
          borderColor: touched.message && (errors.message ? "red" : "green"),
        }}
        {...getFieldProps("message")}
      />
      {errors.message && touched.message && (
        <div className="text_error">{errors.message}</div>
      )}

      <button
        type="submit"
        disabled={!(isValid && values.name && values.email && values.message)}
      >
        SEND
      </button>
    </form>
  );
};
