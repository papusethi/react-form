import React, { useRef, useState } from "react";
import Chip from "../common/Chip/Chip";

export default function App() {
  const inputRef = useRef(null);

  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newChip = { key: Math.random(), label: inputRef.current.value };
    inputRef.current.value = "";
    setChipData([...chipData, newChip]);
  };

  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid grey",
          display: "flex",
          gap: "8px",
        }}
      >
        {chipData.map((data) => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Your Hobbies" ref={inputRef} />
        {/* <button type="submit">+ Add</button> */}
      </form>
    </div>
  );
}
