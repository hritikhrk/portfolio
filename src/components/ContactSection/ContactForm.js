import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Input,
  InputWrapper,
  Submit,
  ErrorMsgWrapper,
} from "./ContactElements";

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .trim()
            .max(15, "Must be 15 characters or less")
            .required("required"),
          email: Yup.string()
            .trim()
            .email("Invalid email address")
            .required("required"),
          message: Yup.string()
            .trim()
            .min(3, "Write at least 10 words")
            .required("required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form method="post">
          <InputWrapper>
            <label htmlFor="name">Name</label>
            <Input name="name" type="text" />
            <ErrorMsgWrapper>
              <ErrorMessage name="name" />
            </ErrorMsgWrapper>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="email">Email Address</label>
            <Input name="email" type="email" />
            <ErrorMsgWrapper>
              <ErrorMessage name="email" />
            </ErrorMsgWrapper>
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="message">Message</label>
            <Input
              name="message"
              component="textarea"
              style={{ resize: "none" }}
              rows="3"
            />
            <ErrorMsgWrapper>
              <ErrorMessage name="message" />
            </ErrorMsgWrapper>
          </InputWrapper>

          <Submit type="submit">Submit</Submit>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
