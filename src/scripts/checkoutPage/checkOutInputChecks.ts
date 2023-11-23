interface ICheckOutInputChecks {
  fnameInputElem: {
    value: string;
    setAttribute: (typeOfAttribute: string, nameOfAttribute: string) => void;
  };
  lnameInputElem: {
    value: string;
    setAttribute: (typeOfAttribute: string, nameOfAttribute: string) => void;
  };
  emailRegex: { test: (elementToBeTested: string) => any };
  emailInputElem: {
    value: string;
    setAttribute: (typeOfAttribute: string, nameOfAttribute: string) => void;
  };
  phoneRegex: { test: (elementToBeTested: string) => any };
  phoneInputElem: {
    value: string;
    setAttribute: (typeOfAttribute: string, nameOfAttribute: string) => void;
  };
  addressInputElem: {
    value: string;
    setAttribute: (typeOfAttribute: string, nameOfAttribute: string) => void;
  };
}



export const handleCheckoutInputChecks = (
{  fnameInputElem,
  lnameInputElem,
  emailRegex,
  emailInputElem,
  phoneRegex,
  phoneInputElem,
  addressInputElem
}:ICheckOutInputChecks) => {
  // handling error message/validation checks
  const fnameChecks: Function = () => {
    if (!fnameInputElem.value) {
      fnameInputElem.setAttribute(
        "class",
        "checkout_contact_information_error"
      );
    } else {
      fnameInputElem.setAttribute("class", "checkout_information_input");
    }
  };
  //
  const lnameChecks: Function = () => {
    if (!lnameInputElem.value) {
      lnameInputElem.setAttribute(
        "class",
        "checkout_contact_information_error"
      );
    } else {
      lnameInputElem.setAttribute("class", "checkout_information_input");
    }
  };
  //
  const emailChecks: Function = () => {
    if (!emailRegex.test(emailInputElem.value)) {
      emailInputElem.setAttribute(
        "class",
        "checkout_contact_information_error"
      );
    } else {
      emailInputElem.setAttribute("class", "checkout_information_input");
    }
  };
  //
  const phoneChecks: Function = () => {
    if (!phoneRegex.test(phoneInputElem.value)) {
      phoneInputElem.setAttribute(
        "class",
        "checkout_contact_information_error"
      );
    } else {
      phoneInputElem.setAttribute("class", "checkout_information_input");
    }
  };
  //
  const addressChecks: Function = () => {
    if (!addressInputElem.value) {
      addressInputElem.setAttribute(
        "class",
        "checkout_contact_information_error"
      );
    } else {
      addressInputElem.setAttribute("class", "checkout_information_input");
    }
  };
  //
  fnameChecks();
  lnameChecks();
  emailChecks();
  phoneChecks();
  addressChecks();
};