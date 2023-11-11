const Input = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  autocomplete
}) => {
  return (
    <div className="input_wrap">
      <input
        type={name}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        autoComplete={autocomplete}
        style={{
          borderColor: touched && (error ? "red" : "green"),
        }}
      />

      {error && touched && <div className="text_error">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
