import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/auth_logo.png";
import "font-awesome/css/font-awesome.css";
import { userInfo } from "./gettingUserFromLocalStorage";
import { IUser } from "./interface";
import { signUpDomElems } from "./signUp/signUpDomElements";
import { handelInputChecks } from "./signUp/userInputChecks";
import { handleShowPassword } from "./signUp/handleShowPassword";
import { emailRegex, paWordRegex } from "./globalVariable";

//
// getting the html elements to work with
const {
  fnameInputElem,
  fnameErrorMegElem,
  lnameInputElem,
  lnameErrorMegElem,
  emailInputElem,
  emailErrorMegElem,
  passwordInputElem,
  passwordErrorMegElem,
  passwordInputContainerElem,
  signUpButtonElem,
  alreadyHaveAccountOverlayElem,
} = signUpDomElems;
//

//
//global variable
let getFnmaeInput: string;
let getLnameInput: string;
let getEmailInput: string;
let getPasswordInput: string;
// 
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
// handling password visibility
handleShowPassword();

//
// handling localStorage for user
const handleLocalStorage: Function = () => {
  let isLoggedIn = false;

  if (
    userInfo === null ||
    (userInfo.email !== getEmailInput && userInfo.password !== getPasswordInput)
  ) {
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
    null;
  }
};

//
// handle signup button
const handleSignUpBtn: EventListener = (): void => {
  handelInputChecks({
    fnameInputElem,
    fnameErrorMegElem,
    lnameInputElem,
    lnameErrorMegElem,
    emailRegex,
    emailInputElem,
    emailErrorMegElem,
    paWordRegex,
    passwordInputElem,
    passwordErrorMegElem,
    passwordInputContainerElem,
  });
  //
  if (
    fnameInputElem.value &&
    lnameInputElem.value &&
    emailRegex.test(emailInputElem.value) &&
    paWordRegex.test(passwordInputElem.value)
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
signUpButtonElem?.addEventListener("click", handleSignUpBtn);
