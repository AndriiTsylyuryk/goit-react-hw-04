import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addNewContact}) => {
  const schema = Yup.object({
    name: Yup.string()
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),

      number: Yup.string('please add only numbers')
      .required("This field is required")
      .min(3, "add more")
      .max(50, "too much chars"),
  });

  const initialValues = {
    name: "",
    number: "",
    id: "",
  };
  const handleSubmit = (data) => {
    console.log(data);
    addNewContact(data, (data.id = nanoid()));
  };
  return (
    <div >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.wrapper}> 
          <label className={s.label}>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="span" className={s.span} />
          </label>
          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="span" className={s.span} />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
