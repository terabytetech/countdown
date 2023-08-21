import React, { useState } from "react";
import "./Form.scss";
import { ReactComponent as Mail } from "../../assets/svg/email.svg";
import { ReactComponent as User } from "../../assets/svg/people.svg";

const Form = () => {
  const initialFormData = {
    firstName: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
    }
  };

  return (
    <div className="wrapper">
      <div className="wrapper__text">
        <p>
          Join other passionate members like you on our waitlist and be the
          first to get started as soon as we launch.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="wrapper__form"
      >
        <div className="form__wrapper--group">
          <label htmlFor="firstName">First Name</label>
          <div
            className={
              errors.firstName
                ? "form__wrapper--input-error"
                : "form__wrapper--input"
            }
          >
            <User />
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
        </div>
        <div className="form__wrapper--group">
          <label htmlFor="email">Email Address</label>
          <div
            className={
              errors.email
                ? "form__wrapper--input-error"
                : "form__wrapper--input"
            }
          >
            <Mail />
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <button className="form__wrapper--btn" type="submit">
          <span>Join the waitlist</span>
        </button>
      </form>
    </div>
  );
};

export default Form;
