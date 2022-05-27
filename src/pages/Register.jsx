import "./register.css";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { dummyData } from "../constants/dummyData";
import InputField from "../common/InputField/InputField";
import RadioField from "../common/RadioField/RadioField";
import Chip from "../common/Chip/Chip";
import Subject from "../common/Subject/Subject";
import Button from "../common/Button/Button";
import {
  validateName,
  validateEmail,
  validateMobile,
  validateDob,
  validateDoj,
  validateRadio,
  validateSubjects,
} from "../validation/validation";

const subjectList = [
  { label: "React", value: "React" },
  { label: "Angular", value: "Angular" },
  { label: "JavaScript", value: "JavaScript" },
];

const Register = () => {
  const [chipName, setChipName] = useState("");

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    mobile: "",
    dob: "",
    doj: "",
    subjects: [],
    hobbies: [],
    address1: "",
    address2: "",
    profile: "",
    resume: "",
  });

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    gender: false,
    mobile: false,
    dob: false,
    doj: false,
  });

  const handleChipName = (e) => {
    setChipName(e.target.value);
  };

  const handleNewChip = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newChip = { key: nanoid(), label: chipName };
      setRegisterData({
        ...registerData,
        hobbies: [...registerData.hobbies, newChip],
      });
      setChipName("");
    }
  };

  const handleDelete = (chipToDelete) => () => {
    let filteredHobbies = registerData.hobbies.filter(
      (chip) => chip.label !== chipToDelete.label
    );

    setRegisterData({
      ...registerData,
      hobbies: filteredHobbies,
    });
  };

  // const setCheckbox = (e) => {
  //   let subject = e.target.value;
  //   let filteredSubjects = subjectList.filter((sub) => {
  //     if (sub.label === subject) {
  //       sub.isSelected = !sub.isSelected;
  //     }
  //     return sub;
  //   });

  //   setSubjectList(filteredSubjects);
  // };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setRegisterData({ ...registerData, [e.target.name]: value });
  };

  const handleSubjectChange = (e) => {
    let subject = e.target.value;
    if (registerData.subjects.includes(subject)) {
      let newSubject = registerData.subjects.filter((val) => val !== subject);
      setRegisterData({ ...registerData, subjects: newSubject });
    } else {
      setRegisterData({
        ...registerData,
        subjects: [...registerData.subjects, subject],
      });
    }
  };

  const handleErrorOnBlur = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "firstName":
        setError({ ...error, firstName: validateName(value) });
        break;
      case "lastName":
        setError({ ...error, lastName: validateName(value) });
        break;
      case "email":
        setError({ ...error, email: validateEmail(value) });
        break;
      case "gender":
        setError({ ...error, gender: validateRadio(registerData.gender) });
        break;
      case "mobile":
        setError({ ...error, mobile: validateMobile(value) });
        break;
      case "dob":
        setError({ ...error, dob: validateDob(value) });
        break;
      case "doj":
        setError({ ...error, doj: validateDoj(value) });
        break;
      default:
        console.log("default case executed");
        break;
    }
  };

  const encodeImageFileAsURL = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setRegisterData({ ...registerData, [e.target.name]: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const addDataToServer = () => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData),
    })
      .then((res) => res.json())
      .then(() => {
        // navigate("/");
        // setSaveToast(true);
        alert("Record added successfully");
      });

    console.log(registerData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateSubjects(registerData.subjects)) {
      alert("Please choose atleast one subject");
    } else {
      let ready = true;
      for (let key in error) {
        if (error[key] === true) {
          ready = false;
        }
      }

      if (ready) {
        addDataToServer();
      } else {
        console.log("do nothing");
      }
    }
  };

  return (
    <div className="register">
      <div className="register__box">
        <h1 className="register__title">REGISTER</h1>

        <form className="register__form">
          <div className="register__form--container">
            <div className="register__columns">
              {dummyData.map((input, index) => {
                if (input.type === "radio") {
                  return (
                    <RadioField
                      key={index}
                      type={input.type}
                      label={input.label}
                      name={input.name}
                      options={input.options}
                      required={input.required}
                      error={error[input.name]}
                      errorText={input.errorText}
                      onChange={handleInputChange}
                      onBlur={handleErrorOnBlur}
                    />
                  );
                } else {
                  return (
                    <InputField
                      key={index}
                      variant={input.variant}
                      type={input.type}
                      name={input.name}
                      label={input.label}
                      placeholder={input.placeholder}
                      required={input.required}
                      error={error[input.name]}
                      errorText={input.errorText}
                      onChange={handleInputChange}
                      onBlur={handleErrorOnBlur}
                    />
                  );
                }
              })}
            </div>

            <div className="register__columns">
              <div className="register__subjects--container">
                <label>Choose Your Subjects</label>
                <div className="subjects__container">
                  {subjectList.map((subject, index) => (
                    <Subject
                      key={index}
                      subject={subject}
                      onChange={handleSubjectChange}
                    />
                  ))}
                </div>
              </div>

              <InputField
                type="text"
                label="Hobbies"
                name="hobbies"
                placeholder="Hobbies"
                variant="static"
                onChange={handleChipName}
                onKeyPress={handleNewChip}
                value={chipName}
              />
              <div className="register__hobbies--container">
                {registerData.hobbies.map((data) => (
                  <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                  />
                ))}
              </div>

              {}

              <InputField
                variant="static"
                type="type"
                name="address1"
                label="Address 1"
                placeholder="Address 1"
                onChange={handleInputChange}
              />
              <InputField
                variant="static"
                type="type"
                name="address2"
                label="Address 2"
                placeholder="Address 2"
                onChange={handleInputChange}
              />
              <InputField
                variant="static"
                type="file"
                name="profile"
                label="Upload Your Profile Photo"
                onChange={encodeImageFileAsURL}
              />
              <InputField
                variant="static"
                type="file"
                name="resume"
                label="Upload Your Resume"
                onChange={encodeImageFileAsURL}
              />
            </div>
          </div>
          <div className="register__form--actions">
            <Button
              type="reset"
              buttonStyle="outlined"
              onClick={() => {
                console.log("cancel clicked");
              }}
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              buttonStyle="primary"
              onClick={handleFormSubmit}
            >
              SAVE AND NEXT
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
