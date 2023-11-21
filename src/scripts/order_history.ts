import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { orderHistoryHtmlElems } from "./orderHistory/orderHistoryDomElems";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { displayMostPopular } from "./displayMostPopular";
import { displayYouMayAlsoLike } from "./displayYouMayAlsoLike";
import { displayOrderHistory } from "./orderHistory/orderHistoryTemplateLiteral";
import { handleGetProductFromApi } from "./gettingAllProductFromApi";
//
// getting the html elements to work with
const {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  clearHistoryBtnElement,
  clearHistoryWarningTemplateElement,
  closeClearHistoryWarning,
  clearHistoryWarningMessageBtnElement,
  loader,
  controlsContainerElem,
} = orderHistoryHtmlElems;

//
// handle search bar
searchProductAndFetchApi();

// showing OrderHistory
displayOrderHistory();

//
// getting product from API

const fetchAndHandleAllProducts = async () => {
  loader.forEach((loader) =>
    loader.setAttribute("class", "loader_second_style")
  );
  //
  const products = await handleGetProductFromApi();
  if (products) {
    //
    controlsContainerElem.forEach((controlContainer) =>
      controlContainer.setAttribute("class", "slide_control_second_style")
    );
    //
    loader.forEach((loader) => loader.setAttribute("class", "loader"));
    //
    displayMostPopular();
    displayYouMayAlsoLike();
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

// cart icon total
handleCartIcon();

//
// handling clear history
const handleClearHistory: EventListener = (): void => {
  clearHistoryWarningTemplateElement.setAttribute(
    "class",
    "clear_history_warning_overlay_second_style"
  );
};

const handleClosingClearHistoryWarning: EventListener = (): void => {
  clearHistoryWarningTemplateElement.setAttribute(
    "class",
    "clear_history_warning_overlay"
  );
};

const handleClearHistoryWarningMessageBtn: EventListener = (): void => {
  localStorage.removeItem("orderHistoryProducts");
};

//
//card Sliders forward and backward button call backFunction
productCardSlider();

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
clearHistoryBtnElement.addEventListener("click", handleClearHistory);
closeClearHistoryWarning.addEventListener(
  "click",
  handleClosingClearHistoryWarning
);
clearHistoryWarningMessageBtnElement.addEventListener(
  "click",
  handleClearHistoryWarningMessageBtn
);
