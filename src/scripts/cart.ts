import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import { cartPageHtmlElems } from "./cart/cartPageHtmlElements";
import "./handleRedirectingIfUserNotLoggedIn";
import { cartProduct, checkOutProduct} from "./globalVariable";
import { handleCartIcon } from "./cartIcon";
import { displayCartProductsAndCalculateCartTotal } from "./cart/cartPageTemplateLiteralAndCalculateCartTotal";
import { productCardSlider } from "./slideCardSlider";
import { displayMostPopular } from "./displayMostPopular";
import { ISearchedProduct } from "./interface";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
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
  numberOfProductInCart,
  cartSubTotal,
  checkoutBtn,
  checkoutBtnSubtotal,
  mostPopularContainerElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
} = cartPageHtmlElems;

// 
// global variable
let products: ISearchedProduct[];

//
//template literal and calculation of the cart total
displayCartProductsAndCalculateCartTotal(cartSubTotal, checkoutBtnSubtotal);

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
      displayMostPopular(products, mostPopularContainerElem);
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

//
// cart page main
// cart icon total
handleCartIcon({ cartTotal, numberOfProductInCart });

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
productCardSlider({preButtons, productContainers, nxtButtons});

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
checkoutBtn.addEventListener("click", handleCheckOutButton);

