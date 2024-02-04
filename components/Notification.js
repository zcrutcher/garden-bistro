import React from "react";

const Notification = ({ message, success }) => {
  const styles = success
    ? "notification is-primary has-text-centered"
    : "notification is-warning has-text-centered";

  return <p className={styles}>{message}</p>;
};

export default Notification;
