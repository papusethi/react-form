import React from "react";
import "./chip.css";

const Chip = ({ label, onDelete }) => {
  return (
    <div className="chip">
      <p className="chip__label">{label}</p>
      <button onClick={onDelete} className="chip__btn">
        X
      </button>
    </div>
  );
};

export default Chip;
