import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { ICartproduct, ISearchedProduct } from "./interface";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import { displayMostPopular } from "./displayMostPopular";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { ProductDetailsHtmlElements } from "./productDetails/productDetailsDomElements";
import { displayYouMayAlsoLike } from "./displayYouMayAlsoLike";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { productImageSlide } from "./productDetails/productImageSlide";
import { displayAProduct } from "./productDetails/displayAProduct";
import { showOtherProduct } from "./productDetails/showOtherProducts";
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
  scrollContainer,
  productColorElem,
  preButtons,
  nxtButtons,
  productContainers,
} = ProductDetailsHtmlElements;

//
// global variable
let products: ISearchedProduct[];
//
handleCartIcon({ cartTotal });
//
export let selectedColor: string;
// export let getUserQuantityInput: string = productQuantityElem.value;
const getProductIdFromLocalStorage = JSON.parse(
  localStorage.getItem("productId")
);
let aProduct: ISearchedProduct;

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
const handleGetAProductFromApi: Function = async () => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${getProductIdFromLocalStorage}`
    );
    //
    const data = await res.json();
    //
    aProduct = data;
    //
    displayAProduct(aProduct, getProductIdFromLocalStorage);
  } catch (error) {
    console.log(error);
  }
};

handleGetAProductFromApi();

// 
showOtherProduct(products);

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
// callback function for product image slider
productImageSlide(scrollContainer);

// handling the color of the product
const handleProductColor: EventListener = (event) => {
  //
  const clickedColor = event.target as HTMLAnchorElement;
  selectedColor = clickedColor.textContent;
  event.preventDefault();
  //
  productColorElem.forEach((selectedColor) => {
    selectedColor.classList.remove("chosen_color");
  });

  clickedColor.classList.add("chosen_color");
};

//
//card Sliders forward and backward button call backFunction
productCardSlider({ preButtons, productContainers, nxtButtons });

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
productColorElem.forEach((color) => {
  color.addEventListener("click", handleProductColor);
});
