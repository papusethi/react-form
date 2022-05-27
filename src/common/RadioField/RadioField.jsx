import React from "react";
import "./radioField.css";

const RadioField = ({
  type,
  label,
  name,
  required,
  options,
  error,
  errorText,
  ...inputProps
}) => {
  return (
    <div className="radio">
      <label className="radio__label">
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </label>

      <div className="radio__container">
        {options.map((opt, index) => {
          return (
            <label className="radio__field" key={index}>
              <input type={type} name={name} value={opt} {...inputProps} />{" "}
              {opt}
            </label>
          );
        })}
      </div>
      {error && <p className="radio__error-text">{errorText}</p>}
    </div>
  );
};

export default RadioField;
