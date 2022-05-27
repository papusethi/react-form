import { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    mobile: "",
    dob: "",
    doj: "",
    subject: "",
    hobbies: [],
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const setCheckbox = (e) => {
    const hobby = e.target.value;
    if (values.hobbies.includes(hobby)) {
      let newHobbies = values.hobbies.filter((val) => val !== hobby);
      setValues({ ...values, hobbies: newHobbies });
    } else {
      setValues({ ...values, hobbies: [...values.hobbies, hobby] });
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="app">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={onChangeHandler}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={onChangeHandler}
            />
            Female
          </label>
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            placeholder="9876543120"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label>D.O.B</label>
          <input type="date" name="dob" onChange={onChangeHandler} />
        </div>
        <div>
          <label>D.O.J</label>
          <input type="date" name="doj" onChange={onChangeHandler} />
        </div>

        <div>
          <label>Subject</label>
          <select name="subject" onChange={onChangeHandler}>
            <option value="">Select Subject</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce </option>
            <option value="Arts">Arts </option>
          </select>
        </div>
        <div>
          <label>Hobbies</label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Coding"
              onChange={setCheckbox}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Reading Books"
              onChange={setCheckbox}
            />
            Reading Books
          </label>
          <label>
            <input
              type="checkbox"
              name="hobbies"
              value="Listening Music"
              onChange={setCheckbox}
            />
            Listening Music
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
