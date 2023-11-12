import { signUpDomElems } from "./signUpDomElements";

// getting the html elements to work with
const {
  passwordInputElem,
  showPasswordElem,
  hidePasswordElem,
} = signUpDomElems;

export const handleShowPassword = () => {
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

  showPasswordElem?.addEventListener("click", handleShowPasswordInput);
  hidePasswordElem?.addEventListener("click", handleHidePasswordInput);
};
