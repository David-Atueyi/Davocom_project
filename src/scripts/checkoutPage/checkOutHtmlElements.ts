//
// getting the html elements to work with
//
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

const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");

//
const fnameInputElem = document.querySelector<HTMLInputElement>("#fname");
const lnameInputElem = document.querySelector<HTMLInputElement>("#lname");
const emailInputElem = document.querySelector<HTMLInputElement>("#email");
const phoneInputElem = document.querySelector<HTMLInputElement>("#phone");
const addressInputElem = document.querySelector<HTMLInputElement>("#address");

//
const checkoutSubTotal =
  document.querySelector<HTMLParagraphElement>(".showSubTotalPrice");
//
const shippingFee =
  document.querySelector<HTMLParagraphElement>(".shipping_fee");
//
const checkoutTotal =
  document.querySelector<HTMLParagraphElement>(".total_price");
//
const placeOrderBtnElem =
  document.querySelector<HTMLButtonElement>(".place_order");
//
const paymentSuccessful = document.querySelector<HTMLDivElement>(
  ".successful_overlay"
);

export const checkOutHtmlElems = {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  fnameInputElem,
  lnameInputElem,
  emailInputElem,
  phoneInputElem,
  addressInputElem,
  checkoutSubTotal,
  shippingFee,
  checkoutTotal,
  placeOrderBtnElem,
  paymentSuccessful,
};
