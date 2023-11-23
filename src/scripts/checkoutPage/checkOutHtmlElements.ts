//
// getting the html elements to work with
//
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
