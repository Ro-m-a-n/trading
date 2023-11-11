import { useFormik } from "formik";
import { validate } from "./validation";
import Input from "./input";
import Textarea from "./textarea";

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
    <form onSubmit={handleSubmit} className="form_wrap">
      <Input
        name="name"
        placeholder={"Name"}
        error={errors.name}
        touched={touched.name}
        {...getFieldProps("name")}
      />

      <Input
        name="email"
        placeholder={"Email"}
        error={errors.email}
        touched={touched.email}
        {...getFieldProps("email")}
      />

      <Textarea
        name="message"
        placeholder={"Message"}
        error={errors.message}
        touched={touched.message}
        {...getFieldProps("message")}
      />

      <button
        type="submit"
        disabled={!(isValid && values.name && values.email && values.message)}
      >
        SEND
      </button>
    </form>
  );
};
