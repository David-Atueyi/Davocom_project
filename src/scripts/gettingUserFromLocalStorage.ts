// getting the user information from localStorage
const userAlreadyExisting = localStorage.getItem("user");
export const userInfo = JSON.parse(userAlreadyExisting);


// getting the userPhoneAndAddress in from localStorage
export const userPhoneAndAddress = JSON.parse(
  localStorage.getItem("userPhoneAndAddress")
);


// getting the user is logged in from localStorage
export const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));