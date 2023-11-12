import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/auth_logo.png";
import "font-awesome/css/font-awesome.css";
import { userInfo } from "./gettingUserFromLocalStorage";

//
// getting the html elements to work with
const emailInputElem = document.querySelector<HTMLInputElement>(".email");
const emailErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".email_error_message"
);
//
const passwordInputElem = document.querySelector<HTMLInputElement>(".password");
const passwordErrorMegElem = document.querySelector<HTMLParagraphElement>(
  ".password_error_message"
);
const passwordInputContainerElem =
  document.querySelector<HTMLDivElement>(".password_area");
const showPasswordElem =
  document.querySelector<HTMLParagraphElement>(".show_ps_word");
const hidePasswordElem =
  document.querySelector<HTMLParagraphElement>(".hide_ps_word");
//
const logInButtonElem =
  document.querySelector<HTMLButtonElement>(".log_in_button");
//
//
const doNotHaveAccountOverlayElem = document.querySelector<HTMLDivElement>(
  ".user_existing_overlay_modal"
);
//

//
// global variables
let getEmailInput: string;
let getPasswordInput: string;

//
// eventlistener callback function
const handleEmailInput: EventListener = (e: Event): void => {
  const emailInput = e.target as HTMLInputElement;
  getEmailInput = emailInput.value;
};
//
const handlePasswordInput: EventListener = (e: Event): void => {
  const passwordInput = e.target as HTMLInputElement;
  getPasswordInput = passwordInput.value;
};

//
//handling error message/validation checks
const emailChecks: Function = (): boolean => {
  if (userInfo === null) {
    doNotHaveAccountOverlayElem.setAttribute(
      "class",
      "display_user_existing_overlay_modal"
    );
  } else if (userInfo.email !== getEmailInput) {
    emailErrorMegElem.setAttribute("class", "show_error");
    emailInputElem.setAttribute("class", "error_border");
  } else {
    emailErrorMegElem.setAttribute("class", "error");
    emailInputElem.setAttribute("class", "input");
    return true;
  }
};
//
const passwordChecks: Function = (): boolean => {
  if (userInfo === null) {
    doNotHaveAccountOverlayElem.setAttribute(
      "class",
      "display_user_existing_overlay_modal"
    );
  } else if (userInfo.password !== getPasswordInput) {
    passwordErrorMegElem.setAttribute("class", "show_error");
    passwordInputContainerElem.setAttribute(
      "class",
      "password_area_error_border "
    );
  } else {
    passwordErrorMegElem.setAttribute("class", "error");
    passwordInputContainerElem.setAttribute("class", "password_area");
    return true;
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
// check for if user logsIn 
const handleValidity:Function = () => {
  let isLoggedIn:boolean = false;
  // 
  if (emailChecks() && passwordChecks()) {
    isLoggedIn = true;
    window.location.href = "index.html";
  }
  //
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
};
//
// handling the login button
const handleLogInBtn: EventListener = (): void => {
  emailChecks();
  passwordChecks();
  //
  handleValidity();
};
// adding eventListener
emailInputElem?.addEventListener("change", handleEmailInput);
passwordInputElem?.addEventListener("change", handlePasswordInput);
showPasswordElem?.addEventListener("click", handleShowPasswordInput);
hidePasswordElem?.addEventListener("click", handleHidePasswordInput);
logInButtonElem?.addEventListener("click", handleLogInBtn);
