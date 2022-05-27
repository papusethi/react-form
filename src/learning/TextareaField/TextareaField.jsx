import "./textareaField.css";

const VARIANTS = ["basic", "static", "floating"];

const TextareaField = ({
  variant,
  label,
  placeholder,
  ...otherProps
}) => {
  const checkInputVariant = VARIANTS.includes(variant) ? variant : variant[0];

  if (checkInputVariant === "basic") {
    return (
      <div className="btf">
        <textarea
          rows="8"
          className="btf__textarea"
          placeholder={placeholder}
          {...otherProps}
        ></textarea>
      </div>
    );
  } else if (checkInputVariant === "static") {
    return (
      <div className="stf">
        <label className="textarea__label">{label}</label>
        <textarea
          rows="8"
          className="stf__textarea"
          placeholder={placeholder}
          {...otherProps}
        />
      </div>
    );
  } else {
    return (
      <div className="ftf">
        <label className="ftf__label">{label}</label>
        <textarea
          rows="8"
          className="ftf__textarea"
          placeholder={placeholder}
          {...otherProps}
        ></textarea>
      </div>
    );
  }
};

export default TextareaField;
