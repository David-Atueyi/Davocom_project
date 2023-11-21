import { homePageDomElems } from "./home/homePageDomElement";
import { homePageImports } from "./home/homePageImport";
import { heroImageSliderFunction } from "./home/handleHeroImageSlider";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { showProducts } from "./home/homePageTemplateLiteral";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
//
// homePageImports
const { userAccount, handleLogOut } = homePageImports;

import { handleGetProductFromApi } from "../scripts/gettingAllProductFromApi";

//
// getting the html elements to work with
const {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  loader,
  controlsContainerElem,
} = homePageDomElems;

//
// handle search bar
searchProductAndFetchApi();

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
    showProducts();
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

// home page main
// hero image
// Function to move the slider to the specified index
heroImageSliderFunction();

//
//card Sliders forward and backward button call backFunction
productCardSlider();

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
