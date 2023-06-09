import toast from "react-hot-toast";

/** Validate Login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

/** Validate password page password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

/** Validate Password */
function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required...!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more than 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special characters");
  }
  return errors;
}

/** Validate Username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }

  return error;
}
