interface IInputChecks {
  fnameInputElem: {
    value: string;
    setAttribute: (arg0: string, arg1: string) => void;
  };
  fnameErrorMegElem: { setAttribute: (arg0: string, arg1: string) => void };
  lnameInputElem: {
    value: string;
    setAttribute: (arg0: string, arg1: string) => void;
  };
  lnameErrorMegElem: { setAttribute: (arg0: string, arg1: string) => void };
  emailRegex: { test: (arg0: string) => any };
  emailInputElem: {
    value: string;
    setAttribute: (arg0: string, arg1: string) => void;
  };
  emailErrorMegElem: { setAttribute: (arg0: string, arg1: string) => void };
  paWordRegex: { test: (arg0: string) => any };
  passwordInputElem: { value: string };
  passwordErrorMegElem: { setAttribute: (arg0: string, arg1: string) => void };
  passwordInputContainerElem: {
    setAttribute: (arg0: string, arg1: string) => void;
  };
}


export const handelInputChecks = ({
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
}: IInputChecks) => {
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
    if (!emailRegex.test(emailInputElem.value)) {
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
  fnameChecks();
  lnameChecks();
  emailChecks();
  passwordChecks();
};