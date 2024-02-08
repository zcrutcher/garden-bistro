"use client";

import React, { useState } from "react";
import Notification from "../../components/Notification";
import { phoneValidator, emailValidator } from "../../helpers/formValidator.js";
import sanitizePhoneInput from "../../helpers/sanitizePhoneInput.js";

const Reservation = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  const hoursOfOperation = {
    open: 18,
    close: 20,
  };

  const numberOfTimeSlots =
    ((+hoursOfOperation.close - +hoursOfOperation.open) * 60) / 15;
  let spots = [];
  for (let i = 0; i <= numberOfTimeSlots; i++) {
    const d = new Date();
    d.setHours(hoursOfOperation.open);
    d.setMinutes(i * 15);
    d.setSeconds(0);
    spots.push(d.toLocaleTimeString([], { timeStyle: "short" }));
  }

  const formValidator = (inputs) => {
    return {
      party: inputs.party < 1 ? "Please select party size. (Min size 1)" : null,
      date: !inputs.date ? "Please select a date" : null,
      time: !inputs.time ? "Please select a time" : null,
      firstName: inputs.firstName.length < 1 ? "First name required" : null,
      lastName: inputs.lastName.length < 1 ? "Last name required" : null,
      email: emailValidator(inputs.email),
      phone: phoneValidator(inputs.phone),
    };
  };
  const [formData, setFormData] = useState({
    party: 2,
    date: formattedDate,
    time: spots[0],
    phone: "",
    firstName: "",
    lastName: "",
    email: "",
    specialRequests: "",
  });

  const changeHandler = (e) => {
    const [key, rawValue] = [e.target.name, e.target.value];
    const cleanValue =
      key === "phone" ? sanitizePhoneInput(rawValue) : rawValue;
    setFormData({ ...formData, [key]: cleanValue });
    setFormErrors(formValidator({ ...formData, [key]: cleanValue }));
  };

  const [message, setMessage] = useState(null);
  const [touched, setTouched] = useState({
    party: true,
    date: true,
    time: true,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  const [formErrors, setFormErrors] = useState(formValidator(formData));

  const blurHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (Object.values(formErrors).some((e) => e)) {
      const newTouched = Object.keys(touched).reduce((accumulator, k) => {
        return { ...accumulator, [k]: true };
      }, {});
      return setTouched(newTouched);
    }

    const res = await fetch("/api/reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      return setMessage({
        success: false,
        message: "Failed to create reservation",
        styles: "notification is-warning",
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    return setMessage({
      success: true,
      message: "Reservation has been created!",
      styles: "notification is-primary",
    });
  };
  return (
    <div className="container px-2">
      <h1 className="title is-size-2 has-text-centered block"> Reservation</h1>
      {message && (
        <Notification message={message.message} success={message.success} />
      )}
      <form type="POST" onSubmit={submitHandler} className="">
        <div className="field is-horizontal is-flex is-flex-no-wrap is-justify-content-space-evenly block">
          <div className="control">
            <label className="label is-medium">Party</label>
            <div className="control">
              <input
                className="input"
                name="party"
                type="number"
                value={formData.party}
                onChange={changeHandler}
                onBlur={blurHandler}
              />
            </div>
          </div>
          <div className="control">
            <label className="label is-medium">Date</label>
            <input
              className="input"
              name="date"
              type="date"
              value={formData.date}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
        </div>
        <div className="field">
          <label className="label is-medium has-text-centered block">
            Available Times
          </label>
          {formErrors.time && touched.time && (
            <p className="help is-danger is-size-6">{formErrors.time}</p>
          )}
          <div className="buttons is-justify-content-center py-2">
            {spots.length > 0 &&
              spots.map((s) => {
                return s === formData.time ? (
                  <button
                    key={s}
                    type="button"
                    className="button is-selected is-success"
                    onClick={(e) => {
                      setFormData({
                        ...formData,
                        time: s,
                      });
                    }}
                    value={s}
                  >
                    {s}
                  </button>
                ) : (
                  <button
                    key={s}
                    type="button"
                    className="button"
                    onClick={(e) => {
                      setFormData({
                        ...formData,
                        time: s,
                      });
                    }}
                    value={s}
                  >
                    {s}
                  </button>
                );
              })}
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">First name</label>
          <div className="control">
            <input
              name="firstName"
              className="input"
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
            ></input>
            {formErrors.firstName && touched.firstName && (
              <p className="help is-danger is-size-6">{formErrors.firstName}</p>
            )}
          </div>
          <label className="label is-medium">Last name</label>
          <div className="control">
            <input
              name="lastName"
              className="input"
              type="text"
              onChange={changeHandler}
              onBlur={blurHandler}
            ></input>
            {formErrors.lastName && touched.lastName && (
              <p className="help is-danger is-size-6">{formErrors.lastName}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Phone number</label>
          <div className="control">
            <input
              name="phone"
              value={formData.phone}
              className="input"
              type="tel"
              onChange={changeHandler}
              onBlur={blurHandler}
            ></input>
            {formErrors.phone && touched.phone && (
              <p className="help is-danger is-size-6">{formErrors.phone}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Email</label>
          <div className="control">
            <input
              name="email"
              value={formData.email}
              className="input"
              type="email"
              onChange={changeHandler}
              onBlur={blurHandler}
            ></input>
            {formErrors.email && touched.email && (
              <p className="help is-danger is-size-6">{formErrors.email}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label is-medium">Special Requests</label>
          <div className="control">
            <textarea
              name="specialRequests"
              className="textarea"
              placeholder="Textarea"
              onChange={changeHandler}
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped is-grouped-centered my-6">
          <div className="control">
            <button className="button is-success" value="Reserve" type="submit">
              Reserve
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
