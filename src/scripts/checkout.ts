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
import { emailRegex, phoneRegex } from "./globalVariable";
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
} = checkOutImports;

//
// getting the html elements to work with
const {
  cartTotal,
  fnameInputElem,
  lnameInputElem,
  emailInputElem,
  phoneInputElem,
  addressInputElem,
  placeOrderBtnElem,
  paymentSuccessful,
} = checkOutHtmlElems;

//
// template literals
showCheckOutProducts(checkOutProduct);

//
// handle getting of user input
handleUserCheckOutInputs();

//
// getting product from API and search for product
// handle search bar
searchProductAndFetchApi();

//
// if the user have an account or not have an account
userAccount();

// cart icon total
handleCartIcon();

// checkout main
// total price of product
handleCalculatingOfCartTotal();

// handlePlaceOrderBtn
const handlePlaceOrderBtn: EventListener = (): void => {
  // handling error message/validation checks
  handleCheckoutInputChecks({
    fnameInputElem,
    lnameInputElem,
    emailRegex,
    emailInputElem,
    phoneRegex,
    phoneInputElem,
    addressInputElem,
  });
  if (
    !getFnmaeInput ||
    !getLnameInput ||
    !emailRegex.test(getEmailInput) ||
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
placeOrderBtnElem.addEventListener("click", handlePlaceOrderBtn);
