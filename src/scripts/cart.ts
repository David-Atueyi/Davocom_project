import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import { cartPageHtmlElems } from "./cart/cartPageHtmlElements";
import "./handleRedirectingIfUserNotLoggedIn";
import { cartProduct, checkOutProduct } from "./globalVariable";
import { handleCartIcon } from "./cartIcon";
import { displayCartProductsAndCalculateCartTotal } from "./cart/cartPageTemplateLiteralAndCalculateCartTotal";
import { productCardSlider } from "./slideCardSlider";
import { displayMostPopular } from "./displayMostPopular";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { handleGetProductFromApi } from "./gettingAllProductFromApi";
//
// getting the html elements to work with
const {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  checkoutBtn,
  loader,
  controlsContainerElem,
} = cartPageHtmlElems;

//
//template literal and calculation of the cart total
displayCartProductsAndCalculateCartTotal();

//
// handle search bar
searchProductAndFetchApi();

// getting product from API
const fetchAndHandleAllProducts = async () => {
  const products = await handleGetProductFromApi();
  //
  if (products) {
    //
    controlsContainerElem.forEach((controlContainer) =>
      controlContainer.setAttribute("class", "slide_control_second_style")
    );
    //
    loader.forEach((loader) => loader.setAttribute("class", "loader"));
    //
    displayMostPopular();
  }
};

// Call the function
fetchAndHandleAllProducts();
//
// if the user have an account or not have an account
userAccount(
  userHasAccount,
  noUserAccount,
  userAccountSignUp,
  userAccountSignIn,
  userAccountLogOut
);

//
// cart page main
//
// cart icon total
handleCartIcon();

//
// checkout button callback function
const handleCheckOutButton: EventListener = (event: Event): void => {
  if (cartProduct.length < 1) {
    event.preventDefault();
    localStorage.removeItem("checkOutProduct");
  } else {
    cartProduct.forEach((product) => {
      checkOutProduct.push(product);
      localStorage.setItem("checkOutProduct", JSON.stringify(checkOutProduct));
    });
  }
};

//
//card Sliders forward and backward button call backFunction
productCardSlider();

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
checkoutBtn.addEventListener("click", handleCheckOutButton);
