const Textarea = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
  autocomplete,
}) => {
  return (
    <div className="textarea_wrap">
      <textarea
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

Textarea.defaultProps = {
  type: "text",
};

export default Textarea;
