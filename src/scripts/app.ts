import { homePageDomElems } from "./home/homePageDomElement";
import { homePageImports } from "./home/homePageImport";
import { heroImageSliderFunction } from "./home/handleHeroImageSlider";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { showProducts } from "./home/homePageTemplateLiteral";
import { ISearchedProduct } from "./interface";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
//
// homePageImports
const { userAccount, handleLogOut } = homePageImports;

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
  todayDealsContainerElem,
  flashSalesContainerElem,
  bestSellersContainerElem,
  phonesAndLaptopsContainerElem,
  cosmeticContainerElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
} = homePageDomElems;

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

//
// getting product from API
const handleGetProductFromApi: Function = async () => {
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
    showProducts({
      products,
      todayDealsContainerElem,
      flashSalesContainerElem,
      bestSellersContainerElem,
      phonesAndLaptopsContainerElem,
      cosmeticContainerElem,
    });
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

// home page main
// hero image
// Function to move the slider to the specified index
heroImageSliderFunction();

//
//card Sliders forward and backward button call backFunction
productCardSlider({ preButtons, productContainers, nxtButtons });

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
