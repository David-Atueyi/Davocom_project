import { IUserPhoneAndAddress } from "./interface";
import { checkOutHtmlElems } from "./checkoutPage/checkOutHtmlElements";
import { checkOutImports } from "./checkoutPage/checkOutImports";
import { handleCalculatingOfCartTotal } from "./checkoutPage/calculatingCheckOutTotal";
import {
  getAddressInput,
  getEmailInput,
  getFnmaeInput,
  getLnameInput,
  getPhoneInput,
  handleUserCheckOutInputs,
} from "./checkoutPage/userCheckOutInputs";
// checkOutImports
const {
  userAccount,
  handleLogOut,
  handleCartIcon,
  handleCheckoutInputChecks,
  searchProductAndFetchApi,
  showCheckOutProducts,
  checkOutProduct,
  orderHistoryProducts,
  products,
} = checkOutImports;

//
// getting the html elements to work with
const {
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
  fnameInputElem,
  lnameInputElem,
  emailInputElem,
  phoneInputElem,
  addressInputElem,
  checkOutProductContainerElem,
  placeOrderBtnElem,
  paymentSuccessful,
} = checkOutHtmlElems;

//
// global variable
let regex: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\.[a-z]{2,4}$/;
let phoneRegex: RegExp = /^\+?\d[\d -()]{8,}$/;

//
// template literals
showCheckOutProducts(checkOutProduct, checkOutProductContainerElem);

//
// handle getting of user input
handleUserCheckOutInputs();

//
// getting product from API and search for product
// handle search bar
searchProductAndFetchApi({
  products,
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
});

//
// if the user have an account or not have an account
userAccount(
  userHasAccount,
  noUserAccount,
  userAccountSignUp,
  userAccountSignIn,
  userAccountLogOut
);

// cart icon total
handleCartIcon({ cartTotal });

// checkout main
// total price of product
handleCalculatingOfCartTotal();

// handlePlaceOrderBtn
const handlePlaceOrderBtn: EventListener = (): void => {
  // handling error message/validation checks
  handleCheckoutInputChecks({
    fnameInputElem,
    lnameInputElem,
    regex,
    emailInputElem,
    phoneRegex,
    phoneInputElem,
    addressInputElem,
  });
  if (
    !getFnmaeInput ||
    !getLnameInput ||
    !regex.test(getEmailInput) ||
    !phoneRegex.test(getPhoneInput) ||
    !getAddressInput
  ) {
  } else {
    let userPhoneAndAddress: IUserPhoneAndAddress = {
      phone: getPhoneInput,
      address: getAddressInput,
    };
    //
    localStorage.setItem(
      "userPhoneAndAddress",
      JSON.stringify(userPhoneAndAddress)
    );
    //
    checkOutProduct.forEach((product) => {
      if (product.fromCart === true) {
        localStorage.removeItem("cartProduct");
        cartTotal.setAttribute("class", "cart_total");
      }

      orderHistoryProducts.push(product);

      localStorage.setItem(
        "orderHistoryProducts",
        JSON.stringify(orderHistoryProducts)
      );

      //
      paymentSuccessful.setAttribute("class", "successful_overlay_two");
    });
  }
};

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
placeOrderBtnElem.addEventListener("click", handlePlaceOrderBtn);