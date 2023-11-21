//
// getting the html elements to work with
const noUserAccount = document.querySelector<HTMLParagraphElement>(
  ".do_not_have_account"
);
const userHasAccount =
  document.querySelector<HTMLParagraphElement>(".have_an_account");
const userAccountSignIn = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_in"
);

const userAccountSignUp = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_up"
);

const userAccountLogOut = document.querySelector<HTMLParagraphElement>(
  ".user_account_log_out"
);

//
const showUserNameElem =
  document.querySelector<HTMLParagraphElement>(".user_name");
const showUserFullNameElem =
  document.querySelector<HTMLParagraphElement>(".user_full_name");
const showUserEmailElem =
  document.querySelector<HTMLParagraphElement>(".user_email");
const showUserPhoneElem =
  document.querySelector<HTMLParagraphElement>(".user_phone");
const showUserAddressElem =
  document.querySelector<HTMLParagraphElement>(".user_address_info");

export const userProfileDomElems = {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  showUserNameElem,
  showUserFullNameElem,
  showUserEmailElem,
  showUserPhoneElem,
  showUserAddressElem,
};
