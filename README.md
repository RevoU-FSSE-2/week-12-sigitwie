[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EjimcIPa)

---

# React Multi-Step Registration Form

This application presents a straightforward multi-stage registration procedure. It systematically guides users through the various phases of the registration process, ensuring they understand each step. Designed for clarity and user-friendliness, the form breaks down the registration into manageable sections, allowing users to complete their registration seamlessly and with ease. This approach not only enhances user experience but also ensures that all necessary details are accurately captured during the process.

## Technologies Used
- NodeJS
- React
- Ant Design
- Formik
- Yup
- Vite
- Amazon Web Services (AWS) Lightsail
## Features

- **Multi-step Form**: The form comprises 3 steps, namely Personal Information, Address Information, and Account Information.
  
- **Formik Integration**: This application benefits from [Formik](https://formik.org/) for form state management and validation.
  
- **Responsive**: The design is adaptive, offering an optimized experience for mobile users.
  
- **Submission Confirmation**: Post completing all the steps, users receive a confirmation indicating the successful submission of their data.

## Validation Using Yup

Validation plays a crucial role in ensuring data integrity. This application uses the `Yup` library to set up validation for each step:

- **Personal Information**: 
  - Full name is mandatory.
  - Email should be in a valid format and is mandatory.
  - Date of birth should be in DD/MM/YYYY format, with years restricted between 1990 and 2005.

- **Address Information**: 
  - Street name, city, and state are all mandatory fields.
  - Zip code must be a 5-digit number.

- **Account Information**: 
  - Username is a mandatory field.
  - Password should be at least 8 characters long, alphanumeric, and is required.

## Deployment
This app has been succesfully deployed using AWS Lightsail. You can access it trough this link 👉 [w12.eswe.dev](http://w12.eswe.dev)

---