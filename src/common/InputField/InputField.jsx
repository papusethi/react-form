import React from "react";
import "./inputField.css";

const VARIANTS = ["basic", "static", "floating"];

const InputField = ({
  variant,
  label,
  type,
  name,
  placeholder,
  helperText,
  required,
  error,
  errorText,
  ...inputProps
}) => {
  const checkInputVariant = VARIANTS.includes(variant) ? variant : variant[0];

  if (checkInputVariant === "basic") {
    return (
      <div className="bif">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="bif__input"
          autoComplete="off"
          {...inputProps}
        />
        <p className="bif__error-text">{errorText}</p>
      </div>
    );
  } else if (checkInputVariant === "static") {
    return (
      <div className="sif">
        <label className="sif__label">
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <p className="sif__helper-text">{helperText}</p>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="sif__input"
          autoComplete="off"
          {...inputProps}
        />
        {error && <p className="sif__error-text">{errorText}</p>}
      </div>
    );
  } else {
    return (
      <div className="fif">
        <label className="fif__label">
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="fif__input"
          autoComplete="off"
          {...inputProps}
        />
        <p className="fif__error-text">{errorText}</p>
      </div>
    );
  }
};

export default InputField;
