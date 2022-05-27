import React, { useState } from "react";

const SUBJECT_LIST = [
  "Odia",
  "English",
  "Hindi",
  "Sanskrit",
  "Math",
  "General Science",
  "Social Science",
];

export default function MultipleSelectNative() {
  const [subjects, setSubjects] = useState([]);

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];

    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setSubjects(value);
  };

  console.log(subjects);

  return (
    <div>
      <label>Native</label>
      <select multiple value={subjects} onChange={handleChangeMultiple}>
        {SUBJECT_LIST.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
