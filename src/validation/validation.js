export const validateName = (value) => {
  let regex = /^[a-zA-Z ]{3,20}$/;
  return !regex.test(value);
};

export const validateEmail = (value) => {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return !regex.test(value);
};

export const validateRadio = (value) => {
  if (value === "") {
    return true;
  } else {
    return false;
  }
};

export const validateMobile = (value) => {
  let regex = /^[6-9][0-9]{9}$/;
  return !regex.test(value);
};

export const validateDob = (date) => {
  if (date) {
    let dob = new Date(date);
    let today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() == dob.getMonth() && today.getDate() < dob.getDay())
    ) {
      age--;
    }

    if (age < 18) {
      return true;
    }
    return false;
  }
  return true;
};

export const validateDoj = (date) => {
  if (date) {
    let doj = new Date(date);
    let today = new Date();
    let diff_in_time = today.getTime() - doj.getTime();
    let diff_in_days = diff_in_time / (1000 * 3600 * 24);

    if (diff_in_days > 30) {
      return true;
    }
    return false;
  }
  return true;
};

export const validateSubjects = (arr) => {
  if (arr.length === 0) {
    return true;
  }
  return false;
};
