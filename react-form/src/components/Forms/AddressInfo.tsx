import React from 'react';
import { Input, Form as MultiForm } from 'antd';
import { Field, FieldProps } from 'formik';

const AddressInfo: React.FC = () => {
  return (
    <>
      <Field name="streetName">
        {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="Street Name" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="Durian Raya 30" />
          </MultiForm.Item>
        )}
      </Field>

      <Field name="city">
      {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="City" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="Jakarta" />
          </MultiForm.Item>
        )}
      </Field>

      <Field name="state">
      {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="State" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="Indonesia" />
          </MultiForm.Item>
        )}
      </Field>

      <Field name="zipCode">
      {({ field, meta }: FieldProps) => (
          <MultiForm.Item 
            label="Zip Code" 
            labelCol={{ span: 24 }}
            validateStatus={meta.touched && meta.error ? "error" : undefined} 
            help={meta.touched && meta.error ? meta.error : undefined}
          >
            <Input {...field} placeholder="12345" />
          </MultiForm.Item>
        )}
      </Field>
    </>
  );
};

export default AddressInfo;
