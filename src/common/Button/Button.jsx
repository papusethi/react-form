import "./button.css";
const STYLES = ["primary", "outlined", "text-only", "disabled"];

const Button = ({ children, type, onClick, buttonStyle, disabled }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  let classNames = `btn ${checkButtonStyle} `;

  if (disabled) {
    classNames += `disabled`;
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
