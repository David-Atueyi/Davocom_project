import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/auth_logo.png";
import "font-awesome/css/font-awesome.css";
import { userInfo } from "./gettingUserFromLocalStorage";
import { IUser } from "./interface";

//
// getting the html elements to work with
const fnameInputElem = document.querySelector<HTMLInputElement>(".fname");
const fnameErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".fname_error_message"
);
//
const lnameInputElem = document.querySelector<HTMLInputElement>(".lname");
const lnameErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".lname_error_message"
);
//
const emailInputElem = document.querySelector<HTMLInputElement>(".email");
const emailErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".email_error_message"
);
//
const passwordInputElem = document.querySelector<HTMLInputElement>(".password");
const passwordErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".password_error_message"
);
const showPasswordElem =
  document.querySelector<HTMLParagraphElement>(".show_ps_word");
const hidePasswordElem =
  document.querySelector<HTMLParagraphElement>(".hide_ps_word");
const passwordInputContainerElem =
  document.querySelector<HTMLDivElement>(".password_area");
//
const signUpButtonElem =
  document.querySelector<HTMLButtonElement>(".sign_up_button");
  // 
const alreadyHaveAccountOverlayElem = document.querySelector<HTMLDivElement>(
  ".user_existing_overlay_modal"
);
//



//
//global variable
let getFnmaeInput: string;
let getLnameInput: string;
let getEmailInput: string;
let getPasswordInput: string;
let regex: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\.[a-z]{2,4}$/;
let paWordRegex: RegExp = /^[a-zA-Z0-9_-]{3,20}$/;
let user: IUser;

//
// eventlistener callback function
const handleFnameInput: EventListener = (e: Event) => {
  const fnameInput = e.target as HTMLInputElement;
  getFnmaeInput = fnameInput.value;
};
//
const handleLnameInput: EventListener = (e: Event) => {
  const lnameInput = e.target as HTMLInputElement;
  getLnameInput = lnameInput.value;
};
//
const handleEmailInput: EventListener = (e: Event) => {
  const emailInput = e.target as HTMLInputElement;
  getEmailInput = emailInput.value;
};
//
const handlePasswordInput: EventListener = (e: Event) => {
  const passwordInput = e.target as HTMLInputElement;
  getPasswordInput = passwordInput.value;
};

//
// handling error message/validation checks
const fnameChecks: Function = () => {
  if (!fnameInputElem.value) {
    fnameErrorMegElem.setAttribute("class", "show_error");
    fnameInputElem.setAttribute("class", "error_border");
  } else {
    fnameErrorMegElem.setAttribute("class", "error");
    fnameInputElem.setAttribute("class", "input");
  }
};
//
const lnameChecks: Function = () => {
  if (!lnameInputElem.value) {
    lnameErrorMegElem.setAttribute("class", "show_error");
    lnameInputElem.setAttribute("class", "error_border");
  } else {
    lnameErrorMegElem.setAttribute("class", "error");
    lnameInputElem.setAttribute("class", "input");
  }
};
//
const emailChecks: Function = () => {
  if (!regex.test(emailInputElem.value)) {
    emailErrorMegElem.setAttribute("class", "show_error");
    emailInputElem.setAttribute("class", "error_border");
  } else {
    emailErrorMegElem.setAttribute("class", "error");
    emailInputElem.setAttribute("class", "input");
  }
};
//
const passwordChecks: Function = () => {
  if (!paWordRegex.test(passwordInputElem.value)) {
    passwordErrorMegElem.setAttribute("class", "show_error");
    passwordInputContainerElem.setAttribute(
      "class",
      "password_area_error_border "
    );
  } else {
    passwordErrorMegElem.setAttribute("class", "error");
    passwordInputContainerElem.setAttribute("class", "password_area");
  }
};

//
// handling password visibility
const handleShowPasswordInput: EventListener = (): void => {
  passwordInputElem.type = "text";
  hidePasswordElem.classList.toggle("show_psWord");
  showPasswordElem.classList.toggle("hide_psWord");
};
//
const handleHidePasswordInput: EventListener = (): void => {
  passwordInputElem.type = "password";
  hidePasswordElem.classList.toggle("show_psWord");
  showPasswordElem.classList.toggle("hide_psWord");
};

//
// handling localStorage for user
const handleLocalStorage: Function = () => {
  let isLoggedIn = false;
  // 
  if (userInfo === null) {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "log_in.html";
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  } else if (
    userInfo.email === getEmailInput ||
    userInfo.password === getPasswordInput
  ) {
    alreadyHaveAccountOverlayElem.setAttribute(
      "class",
      "display_user_existing_overlay_modal"
    );
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "log_in.html";
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }
};

//
// handle signup button
const handleSignUpBtn: EventListener = (): void => {
  fnameChecks();
  lnameChecks();
  emailChecks();
  passwordChecks();
  //
  if (
    fnameInputElem.value &&
    lnameInputElem.value &&
    emailInputElem.value &&
    passwordInputElem.value
  ) {
    //
    user = {
      firstName: getFnmaeInput,
      lastName: getLnameInput,
      email: getEmailInput,
      password: getPasswordInput,
    };
    //
    handleLocalStorage();
    // 
    //
    fnameInputElem.value = "";
    lnameInputElem.value = "";
    emailInputElem.value = "";
    passwordInputElem.value = "";
  } else {
    alert("Please Fill In The Correct Information ");
  }
};

// adding eventlistener
fnameInputElem?.addEventListener("change", handleFnameInput);
lnameInputElem?.addEventListener("change", handleLnameInput);
emailInputElem?.addEventListener("change", handleEmailInput);
passwordInputElem?.addEventListener("change", handlePasswordInput);
showPasswordElem?.addEventListener("click", handleShowPasswordInput);
hidePasswordElem?.addEventListener("click", handleHidePasswordInput);
signUpButtonElem?.addEventListener("click", handleSignUpBtn);
