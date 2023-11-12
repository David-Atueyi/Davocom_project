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
  showUserNameElem,
  showUserFullNameElem,
  showUserEmailElem,
  showUserPhoneElem,
  showUserAddressElem,
};
