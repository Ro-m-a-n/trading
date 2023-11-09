const Input = ({ placeholder, name, type, value, onChange, onBlur, error }) => {
  const currentColor = () => {
    if (value.length > 1 && !error) {
      return "green";
    } else if (error) {
      return "red";
    }
    return null;
  };
  return (
    <div className="input_wrap">
      <textarea
        className={name}
        type={type}
        placeholder={placeholder}
        id={name}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        style={{
          borderColor: currentColor(),
        }}
      />
      {error && <div className="text_error">{error}</div>}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
