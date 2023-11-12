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
const orderHistoryItemContainerElem = document.querySelector<HTMLDivElement>(
  ".history_items_container"
);
//
const clearHistoryBtnElement =
  document.querySelector<HTMLButtonElement>(".clear_history");
//
const clearHistoryWarningTemplateElement =
  document.querySelector<HTMLDivElement>(".clear_history_warning_overlay");
//
const closeClearHistoryWarning = document.querySelector<HTMLElement>(
  ".close_clearHistory_warning"
);
//
const clearHistoryWarningMessageBtnElement =
  document.querySelector<HTMLDivElement>(".warning_message_btn");
//
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const youMayAlsoLikeContainerElem =
  document.querySelector<HTMLDivElement>(".you_may_also_like");
//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");
const preButtons = document.querySelectorAll<HTMLElement>(".pre_btn");
const nxtButtons = document.querySelectorAll<HTMLElement>(".nxt_btn");
const productContainers =
  document.querySelectorAll<HTMLDivElement>(".product_container");

export const orderHistoryHtmlElems = {
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
  orderHistoryItemContainerElem,
  clearHistoryBtnElement,
  clearHistoryWarningTemplateElement,
  closeClearHistoryWarning,
  clearHistoryWarningMessageBtnElement,
  mostPopularContainerElem,
  youMayAlsoLikeContainerElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
};
