import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import {
  storedIsLoggedIn,
  userInfo,
  userPhoneAndAddress,
} from "./gettingUserFromLocalStorage";
import { ICartproduct, ISearchedProduct } from "./interface";
import { displaySearchedProducts } from "./displaySearchFunction";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";

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

//
// global variable
let getSearchInput: string;
let products: ISearchedProduct[];
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];

//
// handle search bar
const handleSearchBar: EventListener = (e: Event): void => {
  e.preventDefault();
  getSearchInput
    ? searchSectionContainer.setAttribute(
        "class",
        "searched_container_second_style"
      )
    : searchSectionContainer.setAttribute("class", "searched_container");
  handleGetProductFromApi();
};

//
// handle getting of user input
const handleSearchBarInput: EventListener = (e: Event): void => {
  const searchInput = e.target as HTMLInputElement;
  getSearchInput = searchInput.value.toLowerCase();
};

//
// closing of the search section when the x icon is clicked
const handleClosingSearchSection: EventListener = (): void => {
  searchSectionContainer.setAttribute("class", "closing_search_section");
};

//
// getting product from API
const handleGetProductFromApi: Function = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    products = data.products;

    displaySearchedProducts(
      products,
      getSearchInput,
      searchedItemsContainerElem
    );
  } catch (error) {
    console.log(error);
  }
};

//
// if the user have an account or not have an account
const displayUserAccountInformation: Function = () => {
  if (storedIsLoggedIn !== null && storedIsLoggedIn === true) {
    showUserNameElem.innerText = `${userInfo.firstName.toUpperCase()}`;
    showUserFullNameElem.innerText = `${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}`;
    showUserEmailElem.innerText = `${userInfo.email}`;
    if (userPhoneAndAddress) {
      showUserPhoneElem.innerText = `${userPhoneAndAddress.phone}`;
      showUserAddressElem.innerText = `${userPhoneAndAddress.address}`;
    } else {
      showUserPhoneElem.innerText = `Phone number not available`;
      showUserAddressElem.innerText = `Delivery address not available`;
    }
  } else {
    showUserNameElem.innerText = `You Are Not Logged In`;
    showUserFullNameElem.innerText = `You Are Not Logged In`;
    showUserEmailElem.innerText = `You Are Not Logged In`;
  }
};

displayUserAccountInformation();

userAccount(
  userHasAccount,
  noUserAccount,
  userAccountSignUp,
  userAccountSignIn,
  userAccountLogOut
);

// cart icon total
if (cartProduct.length > 0 || !cartProduct) {
  cartTotal.setAttribute("class", "cart_total_second_style");
  cartTotal.innerHTML = cartProduct.length.toString();
}


//
// adding event listeners
searchBarContainer.addEventListener("submit", handleSearchBar);
searchBarInputElem.addEventListener("change", handleSearchBarInput);
closeSearchSection.addEventListener("click", handleClosingSearchSection);
userAccountLogOut.addEventListener("click", handleLogOut);


