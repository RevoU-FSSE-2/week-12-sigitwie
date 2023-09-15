import * as Yup from "yup";

export const personalInfoValidation = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  dob: Yup.string()
    .matches(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Date of birth must be in the format DD/MM/YYYY"
    )
    .test("dob-year", "Year must be between 1990 and 2005", (value) => {
      if (!value) return false;
      const year = parseInt(value.split("/")[2], 10);
      return year >= 1990 && year <= 2005;
    })
    .required("Date of birth is required"),
});

export const addressInfoValidation = Yup.object().shape({
  streetName: Yup.string().required("Street name is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string()
    .matches(/^[0-9]{5}$/, "Must be exactly 5 digits")
    .required("Zip code is required"),
});

export const accountInfoValidation = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Password must be alphanumeric")
    .required("Password is required"),
});
