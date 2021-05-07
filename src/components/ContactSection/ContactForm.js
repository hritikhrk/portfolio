import React from "react";
import { useFormik } from "formik";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      // firstName: "",
      // lastName: "",
      // email: "",
      // subject: "",
      // message: "",
      name: '',
      email: '',
      channel: ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);

  return (
    <div>
      <form>
        <label htmlFor='name'> Name </label>
        <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

        <button> Submit </button>
      </form>
    </div>
  );
};

export default ContactForm;
