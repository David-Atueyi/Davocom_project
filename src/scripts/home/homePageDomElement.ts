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

// js for the main
// hero image slider
const heroImageSlider =
  document.querySelector<HTMLDivElement>(".hero_image_slider");
const prevButton = document.querySelector<HTMLElement>(".prev-button");
const nextButton = document.querySelector<HTMLElement>(".next-button");
//
//
const todayDealsContainerElem =
  document.querySelector<HTMLDivElement>(".today_deals");
//
const flashSalesContainerElem =
  document.querySelector<HTMLDivElement>(".flash_sales");
const bestSellersContainerElem =
  document.querySelector<HTMLDivElement>(".best_sellers");
const phonesAndLaptopsContainerElem =
  document.querySelector<HTMLDivElement>(".phones_laptops");
const cosmeticContainerElem =
  document.querySelector<HTMLDivElement>(".cosmetic");
//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");
const preButtons = document.querySelectorAll<HTMLElement>(".pre_btn");
const nxtButtons = document.querySelectorAll<HTMLElement>(".nxt_btn");
const productContainers =
  document.querySelectorAll<HTMLDivElement>(".product_container");

export const homePageDomElems = {
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
  heroImageSlider,
  prevButton,
  nextButton,
  todayDealsContainerElem,
  flashSalesContainerElem,
  bestSellersContainerElem,
  phonesAndLaptopsContainerElem,
  cosmeticContainerElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers
};
