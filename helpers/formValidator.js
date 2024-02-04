export const emailValidator = (email) => {
  if (email.length === 0) return "Email is required";
  if (email.indexOf("@") === -1 || email.length < 3)
    return "Email is not valid";
  return null;
};

export const phoneValidator = (phone) => {
  if (phone.length === 0) return "Phone number is required";
  if (phone.replace(/\D/g, "").length !== 10)
    return "Phone number is not valid";
  return null;
};
