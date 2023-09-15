import React from "react";
import { Input, Form as MultiForm } from "antd";
import { Field, FieldProps } from "formik";

const PersonalInfo: React.FC = () => {
  return (
    <>
      <Field name="fullName">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label="Full Name"
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="Your Name" />
          </MultiForm.Item>
        )}
      </Field>

      <Field name="email">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label="Email Address"
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="yourmail@example.com" />
          </MultiForm.Item>
        )}
      </Field>
      <Field name="dob">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item
            label="Date of Birth"
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined}
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="MM/DD/YYYY" />
          </MultiForm.Item>
        )}
      </Field>
    </>
  );
};

export default PersonalInfo;
