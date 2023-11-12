//

import { checkOutHtmlElems } from "./checkOutHtmlElements";

// getting the html elements to work with
const {
  fnameInputElem,
  lnameInputElem,
  emailInputElem,
  phoneInputElem,
  addressInputElem,
} = checkOutHtmlElems;

export let getFnmaeInput: string;
export let getLnameInput: string;
export let getEmailInput: string;
export let getPhoneInput: string;
export let getAddressInput: string;

export const handleUserCheckOutInputs = () => {
  const handleFnameInput: EventListener = (e: Event): void => {
    const fnameInput = e.target as HTMLInputElement;
    getFnmaeInput = fnameInput.value;
  };
  //
  const handleLnameInput: EventListener = (e: Event): void => {
    const lnameInput = e.target as HTMLInputElement;
    getLnameInput = lnameInput.value;
  };
  //
  const handleEmailInput: EventListener = (e: Event): void => {
    const emailInput = e.target as HTMLInputElement;
    getEmailInput = emailInput.value;
  };
  //
  const handlePhoneInput: EventListener = (e: Event): void => {
    const phoneInput = e.target as HTMLInputElement;
    getPhoneInput = phoneInput.value;
  };
  //
  const handleAddressInput: EventListener = (e: Event): void => {
    const addressInput = e.target as HTMLInputElement;
    getAddressInput = addressInput.value;
  };

  fnameInputElem?.addEventListener("change", handleFnameInput);
  lnameInputElem?.addEventListener("change", handleLnameInput);
  emailInputElem?.addEventListener("change", handleEmailInput);
  phoneInputElem?.addEventListener("change", handlePhoneInput);
  addressInputElem?.addEventListener("change", handleAddressInput);
};
