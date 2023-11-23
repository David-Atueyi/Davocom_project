//
// getting the html elements to work with
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
  cartTotal,
  numberOfProductInCart,
  cartProductsContainerElem,
  checkoutBtn,
  loader,
  controlsContainerElem,
};
