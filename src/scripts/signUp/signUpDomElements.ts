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

export const signUpDomElems = {
  fnameInputElem,
  fnameErrorMegElem,
  lnameInputElem,
  lnameErrorMegElem,
  emailInputElem,
  emailErrorMegElem,
  passwordInputElem,
  passwordErrorMegElem,
  showPasswordElem,
  hidePasswordElem,
  passwordInputContainerElem,
  signUpButtonElem,
  alreadyHaveAccountOverlayElem,
};
