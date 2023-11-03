import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { ICartproduct, ISearchedProduct } from "./interface";
import { storedIsLoggedIn, userInfo } from "./gettingUserFromLocalStorage";

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
const orderHistoryItemContainerElem = document.querySelector<HTMLDivElement>(
  ".history_items_container"
);
// 
const clearHistoryBtnElement =
  document.querySelector<HTMLAnchorElement>(".clear_history");
//
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const youMayAlsoLikeContainerElem =
  document.querySelector<HTMLDivElement>(".you_may_also_like");
//
// card sliders
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
let orderHistoryProducts: ICartproduct[] =
  JSON.parse(localStorage.getItem("orderHistoryProducts")) || [];

// template literal
const displaySearchedProducts: Function = () => {
  const matchingProducts = products.filter(
    (product) =>
      product.title.toLowerCase() === getSearchInput ||
      product.brand.toLowerCase() === getSearchInput ||
      product.category.toLowerCase() === getSearchInput
  );

  if (matchingProducts.length > 0) {
    let showSearchProducts = "";

    matchingProducts.forEach((product) => {
      showSearchProducts += `
        <a href="product_details.html"  class="product_card" id="${product.id}">
          <!--  -->
          <div class="product_image">
            <img src="${product.images[0]}" alt="" />
          </div>
          <!--  -->
          <div class="product_info">
            <h4  class="product_name">${product.title}</h4>
            <div class="card_price">
              <p class="card_bold">$${product.price.toLocaleString()}</p>
              <p class="card_line_through">$${parseFloat(
                (
                  (product.price * product.discountPercentage) / 100 +
                  product.price
                ).toFixed(2)
              ).toLocaleString()}</p>
            </div>
          </div>
          <!--  -->
        </a>
      `;
    });

    searchedItemsContainerElem.innerHTML = showSearchProducts;

    const productCards = document.querySelectorAll(".product_card");
    //
    productCards.forEach((productCard) => {
      productCard.addEventListener("click", () => {
        //
        const productId = productCard.id;
        localStorage.setItem("productId", JSON.stringify(productId));
        //
      });
    });
  } else {
    searchedItemsContainerElem.innerHTML = `<p class="if_not_available">Oops! product not available</p>`;
  }
};
//
const displayOrderHistory:Function = () => {
  let showOrderHistory = "";

  orderHistoryProducts.forEach((product) => {
    showOrderHistory += `
    <div class="history_item">
                  <div>
                    <div class="history_item_image">
                      <img
                        src="${product.image}"
                        alt=""
                      />
                    </div>
                    <div class="history_item_details">
                      <h4 class="history_item_name">
                      ${product.nameOfProduct}
                      </h4>
                      <p>$${product.productPrice}×${product.quantityOfProduct}</p>
                      <button class="order_history_view_product" id="${product.productId}">
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
    `;
  });
  orderHistoryItemContainerElem.innerHTML = showOrderHistory;

      if (orderHistoryProducts.length < 1) {
        orderHistoryItemContainerElem.innerHTML = `<p class="history_empty">Oops looks like you have not purchased any product yet</p>`;

        //
        clearHistoryBtnElement.setAttribute(
          "class",
          "clear_history_second_style"
        );
      }

  const viewProduct = document.querySelectorAll<HTMLButtonElement>(
    ".order_history_view_product"
  );

  viewProduct.forEach((viewProduct) => {
    viewProduct.addEventListener("click", () => {
      const productId = viewProduct.id;
      localStorage.setItem("productId", JSON.stringify(productId));
      window.location.href = "product_details.html";
    });
  });
};
displayOrderHistory();

//
const displayMostPopular: Function = () => {
  let showMostPopularProduct: string = "";

  products.slice(0, 15).forEach((product) => {
    showMostPopularProduct += `
     <a href="product_details.html" class="product_card" id="${product.id}">
                  <!--  -->
                  <div class="product_image">
                    <span class="discount_tag">${
                      product.discountPercentage
                    }%</span>
                    <img src="${product.images[0]}" alt="" />
                  </div>
                  <!--  -->
                  <div class="product_info">
                    <h4 class="product_name">${product.title}</h4>
                    <p class="product_remaining">${product.stock} Remaining</p>
                    <!--  -->
                    <div class="card_price">
                      <span class="current_price">$${product.price.toLocaleString()}</span>
                      <span class="pre_price card_line_through">$${parseFloat(
                        (
                          (product.price * product.discountPercentage) / 100 +
                          product.price
                        ).toFixed(2)
                      ).toLocaleString()}</span>
                    </div>
                  </div>
                  <!--  -->
                </a>         
    `;
  });

  mostPopularContainerElem.innerHTML = showMostPopularProduct;

  const productCards = document.querySelectorAll(".product_card");
  //
  productCards.forEach((productCard) => {
    productCard.addEventListener("click", () => {
      //
      const productId = productCard.id;
      localStorage.setItem("productId", JSON.stringify(productId));
      //
    });
  });
};
//
const displayYouMayAlsoLike: Function = () => {
  let showYouMayAlsoLikeProduct: string = "";

  products.slice(15, 30).forEach((product) => {
    showYouMayAlsoLikeProduct += `
     <a href="product_details.html" class="product_card" id="${product.id}">
                  <!--  -->
                  <div class="product_image">
                    <span class="discount_tag">${
                      product.discountPercentage
                    }%</span>
                    <img src="${product.images[0]}" alt="" />
                  </div>
                  <!--  -->
                  <div class="product_info">
                    <h4 class="product_name">${product.title}</h4>
                    <!--  -->
                    <div class="card_price">
                      <span class="current_price">$${product.price.toLocaleString()}</span>
                      <span class="pre_price card_line_through">$${parseFloat(
                        (
                          (product.price * product.discountPercentage) / 100 +
                          product.price
                        ).toFixed(2)
                      ).toLocaleString()}</span>
                    </div>
                  </div>
                  <!--  -->
                </a>         
    `;
  });

  youMayAlsoLikeContainerElem.innerHTML = showYouMayAlsoLikeProduct;

  const productCards = document.querySelectorAll(".product_card");
  //
  productCards.forEach((productCard) => {
    productCard.addEventListener("click", () => {
      //
      const productId = productCard.id;
      localStorage.setItem("productId", JSON.stringify(productId));
      //
    });
  });
};

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
    displaySearchedProducts();
    displayMostPopular();
    displayYouMayAlsoLike();
  } catch (error) {
    console.log(error);
  }
};

handleGetProductFromApi();
//
// if the user have an account or not have an account
const userAccount: Function = () => {
  if (storedIsLoggedIn !== null && storedIsLoggedIn === true) {
    userHasAccount.setAttribute("id", "have_an_account_name");
    userHasAccount.innerText = `Hi, ${userInfo.firstName
      .slice(0, 3)
      .toUpperCase()}`;
    noUserAccount.setAttribute("class", "when_user_logged_in");
    userAccountSignUp.setAttribute("class", "when_user_logged_in");
    userAccountSignIn.setAttribute("class", "when_user_logged_in");
    userAccountLogOut.setAttribute("class", "when_user_logged_out");
  }
};
userAccount();

// cart icon total
if (cartProduct.length > 0 || !cartProduct) {
  cartTotal.setAttribute("class", "cart_total_second_style");
  cartTotal.innerHTML = cartProduct.length.toString();
}

//
// set storedIsLoggedIn to false when clicked
const handleLogOut: EventListener = (): void => {
  let isLoggedIn = false;
  //
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
};

// 
// handling clear history
const handleClearHistory:EventListener = ():void => {
  localStorage.removeItem("orderHistoryProducts");
};

 

//
//card Sliders forward and backward button call backFunction
const handlePreButton:Function = (container: HTMLDivElement) => () => {
  container.scrollBy({ left: -300, behavior: "smooth" });
};

const handleNxtButton:Function = (container: HTMLDivElement) => () => {
  container.scrollBy({ left: 300, behavior: "smooth" });
};

//
// adding event listeners
searchBarContainer.addEventListener("submit", handleSearchBar);
searchBarInputElem.addEventListener("change", handleSearchBarInput);
closeSearchSection.addEventListener("click", handleClosingSearchSection);
userAccountLogOut.addEventListener("click", handleLogOut);
clearHistoryBtnElement.addEventListener("click",handleClearHistory);
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
