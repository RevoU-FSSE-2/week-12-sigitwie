import React from 'react';
import { Input, Form as MultiForm  } from 'antd';
import { Field, FieldProps } from 'formik';

const AccountInfoStep: React.FC = () => {
  return (
    <>
      <Field name="username">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="Username" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="username123" />
          </MultiForm.Item>
        )}
      </Field>
      
      <Field name="password">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="Password" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input.Password {...field} />
          </MultiForm.Item>
        )}
      </Field>
    </>
  );
};

export default AccountInfoStep;
