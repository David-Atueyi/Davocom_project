import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "../assets/images/dhl-express (1).png";
import "../assets/images/ups.png";
import "font-awesome/css/font-awesome.css";
import {
  ICartproduct,
  ISearchedProduct,
  IUserPhoneAndAddress,
} from "./interface";
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
const fnameInputElem = document.querySelector<HTMLInputElement>("#fname");
const lnameInputElem = document.querySelector<HTMLInputElement>("#lname");
const emailInputElem = document.querySelector<HTMLInputElement>("#email");
const phoneInputElem = document.querySelector<HTMLInputElement>("#phone");
const addressInputElem = document.querySelector<HTMLInputElement>("#address");
//
const checkOutProductContainerElem =
  document.querySelector<HTMLDivElement>(".checkout_orders");
//
const checkoutSubTotal =
  document.querySelector<HTMLParagraphElement>(".showSubTotalPrice");
//
const shippingFee =
  document.querySelector<HTMLParagraphElement>(".shipping_fee");
//
const checkoutTotal =
  document.querySelector<HTMLParagraphElement>(".total_price");
//
const placeOrderBtnElem =
  document.querySelector<HTMLButtonElement>(".place_order");
//
const paymentSuccessful = document.querySelector<HTMLDivElement>(
  ".successful_overlay"
);
//
// global variable
let getSearchInput: string;
let getFnmaeInput: string;
let getLnameInput: string;
let getEmailInput: string;
let getPhoneInput: string;
let getAddressInput: string;
let regex: RegExp = /^[a-zA-Z0-9_-]+@[a-zA-z0-9-]+\.[a-z]{2,4}$/;
let phoneRegex: RegExp = /^\+?\d[\d -()]{8,}$/;
let products: ISearchedProduct[];
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];
let checkOutProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("checkOutProduct")) || [];
let orderHistoryProducts: ICartproduct[] =
  JSON.parse(localStorage.getItem("orderHistoryProducts")) || [];

//
// template literals
//
const displayCheckOutProduct: Function = () => {
  let showCheckOutProduct = "";
  //
  checkOutProduct.forEach((product) => {
    showCheckOutProduct += `
    <div class="checkout_order_item">
                    <div class="checkout_order_item_image">
                      <img
                        src="${product.image}"
                        alt=""
                      />
                    </div>
                    <div class="checkout_order_item_description_container">
                      <h4>${product.nameOfProduct}</h4>
                      <div>
                        <p>Quantity: <span>${product.quantityOfProduct}</span></p>
                        <p class="productColor">Color: <span>${product.productColor}</span></p>
                      </div>
                    </div>
                    <p class="checkout_order_item_price">
                      $${product.productPrice}
                    </p>
                  </div>
    `;
  });
  checkOutProductContainerElem.innerHTML = showCheckOutProduct;

  //
  //
  // check if user selected a color
  const ifColorAvailable =
    document.querySelectorAll<HTMLDivElement>(".productColor");
  ifColorAvailable.forEach((colorAvailable, index) => {
    if (!checkOutProduct[index].productColor) {
      colorAvailable.setAttribute("class", "color_of_product");
    }
  });
};

displayCheckOutProduct();

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
const handleFnameInput: EventListener = (e: Event):void => {
  const fnameInput = e.target as HTMLInputElement;
  getFnmaeInput = fnameInput.value;
};
//
const handleLnameInput: EventListener = (e: Event):void => {
  const lnameInput = e.target as HTMLInputElement;
  getLnameInput = lnameInput.value;
};
//
const handleEmailInput: EventListener = (e: Event):void => {
  const emailInput = e.target as HTMLInputElement;
  getEmailInput = emailInput.value;
};
//
const handlePhoneInput: EventListener = (e: Event):void => {
  const phoneInput = e.target as HTMLInputElement;
  getPhoneInput = phoneInput.value;
};
//
const handleAddressInput: EventListener = (e: Event):void => {
  const addressInput = e.target as HTMLInputElement;
  getAddressInput = addressInput.value;
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
    //
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

// checkout main
//
//
// handling error message/validation checks
const fnameChecks: Function = () => {
  if (!fnameInputElem.value) {
    fnameInputElem.setAttribute("class", "checkout_contact_information_error");
  } else {
    fnameInputElem.setAttribute("class", "checkout_information_input");
  }
};
//
const lnameChecks: Function = () => {
  if (!lnameInputElem.value) {
    lnameInputElem.setAttribute("class", "checkout_contact_information_error");
  } else {
    lnameInputElem.setAttribute("class", "checkout_information_input");
  }
};
//
const emailChecks: Function = () => {
  if (!regex.test(emailInputElem.value)) {
    emailInputElem.setAttribute("class", "checkout_contact_information_error");
  } else {
    emailInputElem.setAttribute("class", "checkout_information_input");
  }
};
//
const phoneChecks: Function = () => {
  if (!phoneRegex.test(phoneInputElem.value)) {
    phoneInputElem.setAttribute("class", "checkout_contact_information_error");
  } else {
    phoneInputElem.setAttribute("class", "checkout_information_input");
  }
};
//
const addressChecks: Function = () => {
  if (!addressInputElem.value) {
    addressInputElem.setAttribute(
      "class",
      "checkout_contact_information_error"
    );
  } else {
    addressInputElem.setAttribute("class", "checkout_information_input");
  }
};
//

// total price of product
const calculatePriceTotal: Function = () => {
  let totalPrice = 0;

  checkOutProduct.forEach((total) => {
    totalPrice += total.productPrice * total.quantityOfProduct;
  });
  checkoutSubTotal.innerText = `$${totalPrice.toLocaleString()}`;

  if (totalPrice >= 1000 && totalPrice < 5000) {
    shippingFee.innerText = "$500";
    checkoutTotal.innerText = `$${(totalPrice + 500).toLocaleString()}`;
  } else if (totalPrice > 4999) {
    shippingFee.innerText = "$1000";
    checkoutTotal.innerText = `$${(totalPrice + 1000).toLocaleString()}`;
  } else {
    shippingFee.innerText = "Free Shipping";
    checkoutTotal.innerText = `$${totalPrice.toLocaleString()}`;
  }
};
calculatePriceTotal();

const handlePlaceOrderBtn: EventListener = (): void => {
   fnameChecks();
   lnameChecks();
   emailChecks();
   phoneChecks();
   addressChecks();
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
searchBarContainer.addEventListener("submit", handleSearchBar);
searchBarInputElem.addEventListener("change", handleSearchBarInput);
closeSearchSection.addEventListener("click", handleClosingSearchSection);
userAccountLogOut.addEventListener("click", handleLogOut);
fnameInputElem?.addEventListener("change", handleFnameInput);
lnameInputElem?.addEventListener("change", handleLnameInput);
emailInputElem?.addEventListener("change", handleEmailInput);
phoneInputElem?.addEventListener("change", handlePhoneInput);
addressInputElem?.addEventListener("change", handleAddressInput);
placeOrderBtnElem.addEventListener("click", handlePlaceOrderBtn);
