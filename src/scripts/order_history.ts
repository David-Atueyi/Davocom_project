import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { ISearchedProduct } from "./interface";
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
  clearHistoryBtnElement,
  clearHistoryWarningTemplateElement,
  closeClearHistoryWarning,
  clearHistoryWarningMessageBtnElement,
  youMayAlsoLikeContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
  mostPopularContainerElem,
  loader,
  controlsContainerElem,
} = orderHistoryHtmlElems;

//
// global variable
let products: ISearchedProduct[];

//
// handle search bar
searchProductAndFetchApi({
  products,
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
});

// showing OrderHistory
displayOrderHistory();

//
// getting product from API
export const handleGetProductFromApi: Function = async () => {
  loader.forEach((loader) =>
    loader.setAttribute("class", "loader_second_style")
  );
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    products = data.products;

    //
    controlsContainerElem.forEach((controlContainer) =>
      controlContainer.setAttribute("class", "slide_control_second_style")
    );
    loader.forEach((loader) => loader.setAttribute("class", "loader"));
    //
    displayMostPopular(products, mostPopularContainerElem);
    displayYouMayAlsoLike(products, youMayAlsoLikeContainerElem);
  } catch (error) {
    console.log(error);
  }
};

handleGetProductFromApi();
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
productCardSlider({ preButtons, productContainers, nxtButtons });

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
