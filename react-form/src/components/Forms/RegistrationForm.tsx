import React, { useState, useEffect } from "react";
import { Button, Steps, Card, Divider, Result } from "antd";
import { Formik, Form } from "formik";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import AccountInfo from "./AccountInfo";
import {
  personalInfoValidation,
  addressInfoValidation,
  accountInfoValidation,
} from "../../utils/ValidationSchema";
import "../../App.css";

const RegistrationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    fullName: "",
    email: "",
    dob: "",
    streetName: "",
    city: "",
    state: "",
    zipCode: "",
    username: "",
    password: "",
  };

  const validationSchemas = [
    personalInfoValidation,
    addressInfoValidation,
    accountInfoValidation,
  ];

  const stepItems = [
    { title: "Personal Information" },
    { title: "Address Information" },
    { title: "Account Information" },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="form-container">
      <Card title="Registration Form" className="registration-card">
        <div className="form-items">
          {!isSubmitted && (
            <>
              <div className="steps-container">
                <Steps
                  direction="vertical"
                  size="small"
                  current={currentStep}
                  className="steps-style"
                >
                  {stepItems.map((item, index) => (
                    <Steps.Step
                      key={index}
                      title={isMobile ? "" : item.title}
                    />
                  ))}
                </Steps>
              </div>
              <Divider type="vertical" className="divider-style" />
            </>
          )}
          <div className="form-content">
            {isSubmitted ? (
              <Result
                className="result-style"
                status="success"
                title="Successfully Registered!"
                subTitle="Your registration data has been submitted successfully."
              />
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas[currentStep]}
                onSubmit={(values, actions) => {
                  if (currentStep === 2) {
                    console.log("All form data submitted:", values);
                    actions.resetForm();
                    setIsSubmitted(true);
                    setTimeout(() => {
                      setIsSubmitted(false);
                      setCurrentStep(0);
                    }, 1500);
                  } else {
                    setCurrentStep(currentStep + 1);
                  }
                }}
              >
                {({ handleSubmit, isValid, dirty }) => (
                  <Form onSubmit={handleSubmit}>
                    {currentStep === 0 && <PersonalInfo />}
                    {currentStep === 1 && <AddressInfo />}
                    {currentStep === 2 && <AccountInfo />}
                    <div className="buttons-container">
                      {currentStep > 0 && (
                        <Button
                          className="previous-button"
                          onClick={() => setCurrentStep(currentStep - 1)}
                        >
                          Previous
                        </Button>
                      )}

                      {currentStep < 2 && (
                        <Button
                          type="primary"
                          onClick={() => {
                            if (isValid && dirty) {
                              setCurrentStep(currentStep + 1);
                            }
                          }}
                        >
                          Next
                        </Button>
                      )}

                      {currentStep === 2 && (
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="submit-button"
                        >
                          Submit
                        </Button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegistrationForm;
