import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { ICartproduct, ISearchedProduct } from "./interface";
import { displaySearchedProducts } from "./displaySearchFunction";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import { displayMostPopular } from "./displayMostPopular";

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
// js for the main
//
const numberOfProductInCart = document.querySelector<HTMLSpanElement>(
  ".total_cart_product"
);
//
const cartProductsContainerElem = document.querySelector<HTMLDivElement>(
  ".cart_items_container"
);
//
const cartSubTotal = document.querySelector<HTMLParagraphElement>(".price");
//
const checkoutBtn = document.querySelector<HTMLButtonElement>(".checkout_btn");
const checkoutBtnSubtotal = document.querySelector<HTMLParagraphElement>(
  ".checkout_btn_subtotal"
);
//
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");
const preButtons = document.querySelectorAll<HTMLElement>(".pre_btn");
const nxtButtons = document.querySelectorAll<HTMLElement>(".nxt_btn");
const productContainers =
  document.querySelectorAll<HTMLDivElement>(".product_container");

//
// global variable
let getSearchInput: string;
let products: ISearchedProduct[];
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];
let checkOutProduct: ICartproduct[] = [];

//
//template literal
const displayCartProducts: Function = () => {
  let showCartProducts: string = "";

  cartProduct.forEach((product) => {
    showCartProducts += `
     <div>
                  <div class="cart_items">
                    <div class="image">
                      <img
                        src="${product.image}"
                        alt=""
                      />
                    </div>
                    <div class="description">
                      <div class="title_price">
                        <div class="title">
                          <p>${product.nameOfProduct}</p>
                        </div>
                        <div class="price">$${product.productPrice.toLocaleString()}</div>
                         <div class="price productColor">${
                           product.productColor
                         }</div>
                      </div>
                      <p class="remaining">
                        <i class="fa fa-circle-exclamation"></i> ${
                          product.productStock
                        } in stock
                      </p>
                      <div class="delivery-method">
                        <p>Davocom</p>
                        <p>
                          <i class="fa fa-paper-plane">
                            <i class="text">Express</i></i
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="addmore">
                    <div class="remove">
                      <i class="fa fa-trash"></i>
                      <p>Remove</p>
                    </div>
                    <div class="add">
                      <i class="fa fa-minus-square minus"></i>
                      <p>${product.quantityOfProduct}</p>
                      <i class="fa fa-plus-square plus"></i>
                    </div>
                  </div>
                </div>
    `;
  });
  cartProductsContainerElem.innerHTML = showCartProducts;
  //
  // check for when local storage is empty
  if (cartProduct.length === 0) {
    cartProductsContainerElem.innerHTML = `<p class="when_cart_empty">Oops looks like you have not added any product to cart</p>`;
  }
  //
  // check if user selected a color
  const ifColorAvailable =
    document.querySelectorAll<HTMLDivElement>(".productColor");
  ifColorAvailable.forEach((colorAvailable, index) => {
    if (!cartProduct[index].productColor) {
      colorAvailable.setAttribute("class", "color_of_product");
    }
  });
  //

  // Add event listeners to the minus and plus buttons
  const minusButtons =
    document.querySelectorAll<HTMLElement>(".fa-minus-square");
  const plusButtons = document.querySelectorAll<HTMLElement>(".fa-plus-square");
  // event listeners for the minus buttons
  minusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (cartProduct[index].quantityOfProduct > 1) {
        cartProduct[index].quantityOfProduct--;
        localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
        displayCartProducts();
        calculatePriceTotal();
      }
    });
  });

  // event listeners for the plus buttons
  plusButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      cartProduct[index].quantityOfProduct++;
      if (
        cartProduct[index].quantityOfProduct > cartProduct[index].productStock
      ) {
        cartProduct[index].quantityOfProduct--;
      }
      localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
      displayCartProducts();
      calculatePriceTotal();
    });
  });
  //
  const removeButtons = document.querySelectorAll<HTMLDivElement>(".remove");

  removeButtons.forEach((removeButton, index) => {
    removeButton.addEventListener("click", () => {
      if (index !== null) {
        cartProduct.splice(Number(index), 1);
        localStorage.setItem("cartProduct", JSON.stringify(cartProduct));
        //
        if (cartProduct.length === 0) {
          cartTotal.setAttribute("class", "cart_total");
        }
        cartTotal.innerHTML = cartProduct.length.toString();
        numberOfProductInCart.innerHTML = cartProduct.length.toString();
        //
        displayCartProducts();
        calculatePriceTotal();
      }
    });
  });
};

displayCartProducts();
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
// closing of the search section when the x icon is clicked
const handleClosingSearchSection: EventListener = (): void => {
  searchSectionContainer.setAttribute("class", "closing_search_section");
};

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
    displaySearchedProducts(
      products,
      getSearchInput,
      searchedItemsContainerElem
    );
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
if (cartProduct.length > 0 || !cartProduct) {
  cartTotal.setAttribute("class", "cart_total_second_style");
  cartTotal.innerHTML = cartProduct.length.toString();
  numberOfProductInCart.innerHTML = cartProduct.length.toString();
}
//
// total price of product
const calculatePriceTotal:Function = () => {
  let totalPrice = 0;

  cartProduct.forEach((total) => {
    totalPrice += total.productPrice * total.quantityOfProduct;
  });
  cartSubTotal.innerText = `$${totalPrice.toLocaleString()}`;
  checkoutBtnSubtotal.innerText = `$${totalPrice.toLocaleString()}`;
};
calculatePriceTotal();
//
// checkout button callback function
const handleCheckOutButton: EventListener = (event: Event):void => {
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
const handlePreButton = (container: HTMLDivElement) => () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
};

const handleNxtButton = (container: HTMLDivElement) => () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
};

//
// adding event listeners
searchBarContainer.addEventListener("submit", handleSearchBar);
searchBarInputElem.addEventListener("change", handleSearchBarInput);
closeSearchSection.addEventListener("click", handleClosingSearchSection);
userAccountLogOut.addEventListener("click", handleLogOut);
checkoutBtn.addEventListener("click", handleCheckOutButton);
//
// Add event listeners to all pre_btn and nxt_btn elements
for (let i = 0; i < preButtons.length; i++) {
  preButtons[i].addEventListener(
    "click",
    handlePreButton(productContainers[i])
  );
  nxtButtons[i].addEventListener(
    "click",
    handleNxtButton(productContainers[i])
  );
}
