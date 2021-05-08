import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .trim()
            .max(15, "Must be 15 characters or less")
            .required("required"),
          lastName: Yup.string()
            .trim()
            .max(20, "Must be 20 characters or less")
            .required("required"),
          email: Yup.string()
            .trim()
            .email("Invalid email address")
            .required("required"),
          message: Yup.string()
            .trim()
            .min(30, "Write at least 10 words")
            .required("required"),
        })}
        // onSubmit={(values) => {
        //   alert(JSON.stringify(values, null, 2));
        // }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />
          </div>

          <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />
          </div>

          <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          </div>

          <div>
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
