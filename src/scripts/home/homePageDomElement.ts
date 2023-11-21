// getting the html elements to work with
const searchBarContainer = document.querySelector<HTMLFormElement>(
  ".search_bar_container"
);

export const searchBarInputElem = document.querySelector<HTMLInputElement>("#search");

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

// js for the main
// hero image slider
const heroImageSlider =
  document.querySelector<HTMLDivElement>(".hero_image_slider");
const prevButton = document.querySelector<HTMLElement>(".prev-button");
const nextButton = document.querySelector<HTMLElement>(".next-button");
//

//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");


export const homePageDomElems = {
  searchBarContainer,
  searchBarInputElem,
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  heroImageSlider,
  prevButton,
  nextButton,
  loader,
  controlsContainerElem,
};
