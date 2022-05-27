import "./subject.css";

const Subject = ({ subject, onChange }) => {
  return (
    <div className="subject">
      <input
        type="checkbox"
        id={subject.label}
        value={subject.value}
        onChange={onChange}
        defaultChecked={subject.isSelected}
      />
      <label htmlFor={subject.label}>
        <div className="title">{subject.label}</div>
      </label>
    </div>
  );
};

export default Subject;
