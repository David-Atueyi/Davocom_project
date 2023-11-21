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
const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");
//
// js for the main
//
const numberOfProductInCart = document.querySelector<HTMLSpanElement>(
  ".total_cart_product"
);
//
const cartProductsContainerElem = document.querySelector<HTMLDivElement>(
  ".cart_items_container"
);
//
const checkoutBtn = document.querySelector<HTMLButtonElement>(".checkout_btn");

//
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");

export const cartPageHtmlElems = {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  numberOfProductInCart,
  cartProductsContainerElem,
  checkoutBtn,
  loader,
  controlsContainerElem,
};
