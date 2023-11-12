//
// getting the html elements to work with
const searchBarContainer = document.querySelector<HTMLFormElement>(
  ".search_bar_container"
);

const searchBarInputElem = document.querySelector<HTMLInputElement>("#search");

const searchSectionContainer = document.querySelector<HTMLDivElement>(
  ".searched_container"
);
const closeSearchSection = document.querySelector<HTMLElement>(
  ".close_search_section"
);

const searchedItemsContainerElem =
  document.querySelector<HTMLDivElement>(".search_items");
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
const cartSubTotal = document.querySelector<HTMLParagraphElement>(".price");
//
const checkoutBtn = document.querySelector<HTMLButtonElement>(".checkout_btn");
const checkoutBtnSubtotal = document.querySelector<HTMLParagraphElement>(
  ".checkout_btn_subtotal"
);
//
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");
const preButtons = document.querySelectorAll<HTMLElement>(".pre_btn");
const nxtButtons = document.querySelectorAll<HTMLElement>(".nxt_btn");
const productContainers =
  document.querySelectorAll<HTMLDivElement>(".product_container");

export const cartPageHtmlElems = {
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  numberOfProductInCart,
  cartProductsContainerElem,
  cartSubTotal,
  checkoutBtn,
  checkoutBtnSubtotal,
  mostPopularContainerElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
};
