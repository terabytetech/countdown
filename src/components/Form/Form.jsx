import React, { useState } from "react";
import "./Form.scss";
import { ReactComponent as Mail } from "../../assets/svg/email.svg";
import { ReactComponent as User } from "../../assets/svg/people.svg";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaTwitter, FaInstagram, FaFacebook, FaTimes } from "react-icons/fa";

const Form = () => {
  const addUserFormData = async (values) => {
    try {
      const docRef = await addDoc(
        collection(db, "terabyteCountdownFormData"),
        values
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const initialFormData = {
    firstName: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

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
      addUserFormData(formData);
      setShowThankYou(true);
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
      {showThankYou ? (
        <div className="wrapper__thankyou flex">
          <div className="wrapper__thankyou--close flex">
            <FaTimes onClick={() => setShowThankYou(false)} />
          </div>
          <div className="wrapper__thankyou--text flex">
            <h2>Thank You! 🤗 </h2>
            <p>We will notify you as soon as we launch.</p>
          </div>

          <div className="wrapper__thankyou--social">
            <p>Follow us on social media</p>
            <div className="social__icons flex">
              <a href="https://www.facebook.com/terabytecountdown">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/terabytecountdown/">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/terabytecount">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <form
          action="https://app.convertkit.com/forms/5515020/subscriptions"
          method="post"
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
      )}
    </div>
  );
};

export default Form;
