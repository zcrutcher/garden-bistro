"use client";
import React, { useState } from "react";
import Notification from "@/components/Notification";
import { emailValidator, phoneValidator } from "../../helpers/formValidator.js";
import sanitizePhoneInput from "../../helpers/sanitizePhoneInput.js";

const Contact = () => {
  const intialAppState = { status: "idle", success: "", failure: "" };

  const [status, setStatus] = useState(intialAppState);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    email: false,
    phone: false,
  });

  const formValidator = (inputs) => {
    return {
      email: emailValidator(inputs.email),
      phone: phoneValidator(inputs.phone),
    };
  };

  const [formErrors, setFormErrors] = useState(formValidator(formData));

  const blurHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formErrors.email || formErrors.phone)
      return setTouched({ email: true, phone: true });

    try {
      setStatus({ status: "pending", success: "", failure: "" });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus({
          status: "rejected",
          success: "",
          failure: "Contact form submission failed",
        });
      }

      setStatus({
        status: "resolved",
        success: "Contact from submitted successfully",
        failure: "",
      });
      return;
    } catch (error) {
      setStatus({
        status: "rejected",
        failure: "Contact form submission failed",
      });
    }
  };

  const changeHandler = (e) => {
    let [key, rawValue] = [e.target.name, e.target.value];
    const cleanValue =
      key === "phone" ? sanitizePhoneInput(rawValue) : rawValue;
    setFormData({ ...formData, [key]: cleanValue });
    setFormErrors(formValidator({ ...formData, [key]: cleanValue }));
  };

  const isLoading = status.status === "pending";
  const isFailure = status.status === "rejected";
  const isSuccess = status.status === "resolved";
  const msg = isSuccess ? status.success : status.failure;
  return (
    <div className="columns">
      <div className="column is-three-quarters m-auto">
        <div className="container is-fluid">
          <div className="content">
            <h2 className="is-size-2 has-text-centered block">Contact Us</h2>
            {(isSuccess || isFailure) && (
              <Notification message={msg} success={isSuccess} />
            )}
            <form method="POST" onSubmit={submitHandler}>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    value={formData.email}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                  />
                  {formErrors.email && touched.email && (
                    <p className="help is-danger is-size-6">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="field">
                <label htmlFor="phone" className="label">
                  Phone
                </label>
                <div className="control">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input"
                    value={formData.phone}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                  />
                  <span className="help is-size-8">Numbers only</span>
                  {formErrors.phone && touched.phone && (
                    <p className="help is-danger is-size-6">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>
              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <div className="control">
                  <textarea
                    name="message"
                    id="message"
                    className="textarea"
                    value={formData.message}
                    onChange={changeHandler}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    type="submit"
                    className={
                      isLoading
                        ? "button is-primary is-loading"
                        : "button is-primary"
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
