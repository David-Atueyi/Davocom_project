import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { IProduct } from "./interface";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { ProductDetailsHtmlElements } from "./productDetails/productDetailsDomElements";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { productImageSlide } from "./productDetails/productImageSlide";
import { displayAProduct } from "./productDetails/displayAProduct";
import { showOtherProduct } from "./productDetails/showOtherProducts";
//
// getting the html elements to work with
const {
  scrollContainer,
  productColorElem,
} = ProductDetailsHtmlElements;

//
handleCartIcon();
//
export let selectedColor: string;
// export let getUserQuantityInput: string = productQuantityElem.value;
const singleProductId = JSON.parse(localStorage.getItem("productId"));
let aProduct: IProduct;

// handle search bar
searchProductAndFetchApi();
//
// getting product from API
const handleGetAProductFromApi: Function = async () => {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/${singleProductId}`
    );
    //
    const data = await res.json();
    //
    aProduct = data;
    //
    displayAProduct(aProduct);
  } catch (error) {
    console.log(error);
  }
};

handleGetAProductFromApi();

//
showOtherProduct();

//
// if the user have an account or not have an account
userAccount();

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
productCardSlider();

//
// adding event listeners
productColorElem.forEach((color) => {
  color.addEventListener("click", handleProductColor);
});
