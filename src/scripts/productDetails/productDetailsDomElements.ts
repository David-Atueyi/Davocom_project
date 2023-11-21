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
//
const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");
//
// js for the main
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const youMayAlsoLikeContainerElem =
  document.querySelector<HTMLDivElement>(".you_may_also_like");
//
// images scroll images
const scrollContainer = document.querySelector<HTMLDivElement>(
  ".product_image_container"
);
const productImageControlContainerElem = document.querySelector<HTMLDivElement>(
  ".controls_container"
);
const prevButton = document.querySelector<HTMLElement>(".prev_btn");
const nextButton = document.querySelector<HTMLElement>(".next_btn");
//
// product description
const productPriceAndNameContainerElem = document.querySelector<HTMLDivElement>(
  ".product_name_price"
);
const productVariation = document.querySelector<HTMLDivElement>(".available");
const productBrand = document.querySelector<HTMLSpanElement>(".product_brand");
//
const productOverView =
  document.querySelector<HTMLParagraphElement>(".overview_content");
//
const productDescription = document.querySelector<HTMLParagraphElement>(
  ".description_content"
);
//
const productColorElem =
  document.querySelectorAll<HTMLAnchorElement>(".product_color");
const productQuantityElem =
  document.querySelector<HTMLInputElement>("#quantity");
const buyNowBtnElem = document.querySelector<HTMLButtonElement>(".buynow_btn");
const cartButtonElem = document.querySelector<HTMLAnchorElement>(".cart_btn");
//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");


export const ProductDetailsHtmlElements = {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  mostPopularContainerElem,
  youMayAlsoLikeContainerElem,
  scrollContainer,
  productImageControlContainerElem,
  prevButton,
  nextButton,
  productPriceAndNameContainerElem,
  productVariation,
  productBrand,
  productOverView,
  productDescription,
  productColorElem,
  productQuantityElem,
  buyNowBtnElem,
  cartButtonElem,
  loader,
  controlsContainerElem,

};
