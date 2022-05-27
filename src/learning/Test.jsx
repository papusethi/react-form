import React, { useState } from "react";
import "./test.css";

const Subject = ({ subject, setCheckbox }) => {
  return (
    <label className="subject">
      <input
        type="checkbox"
        value={subject.label}
        defaultChecked={subject.isSelected}
        onChange={setCheckbox}
      />
      {subject.label}
    </label>
  );
};

const Test = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);
  const [subjectList, setSubjectList] = useState([
    { label: "Enlgish", isSelected: false },
    { label: "Odia", isSelected: false },
    { label: "Hindi", isSelected: false },
  ]);

  const handleButtonClick = (e) => {
    setIsBoxOpen((prev) => !prev);
  };

  const setCheckbox = (e) => {
    const subject = e.target.value;

    let filteredDataSource = subjectList.filter((sub) => {
      if (sub.label === subject) {
        sub.isSelected = !sub.isSelected;
      }

      return sub;
    });

    setSubjectList(filteredDataSource);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Box</button>
      <div>
        {isBoxOpen && (
          <div className="box">
            {subjectList.map((subject, index) => (
              <Subject
                key={index}
                subject={subject}
                setCheckbox={setCheckbox}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
