import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { storedIsLoggedIn, userInfo, userPhoneAndAddress } from "./gettingUserFromLocalStorage";
import { ICartproduct, ISearchedProduct } from "./interface";

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
const showUserNameElem =
  document.querySelector<HTMLParagraphElement>(".user_name");
const showUserFullNameElem =
  document.querySelector<HTMLParagraphElement>(".user_full_name");
const showUserEmailElem =
  document.querySelector<HTMLParagraphElement>(".user_email");
const showUserPhoneElem =
    document.querySelector<HTMLParagraphElement>(".user_phone");
 const showUserAddressElem =
   document.querySelector<HTMLParagraphElement>(".user_address_info");



//
// global variable
let getSearchInput: string;
let products: ISearchedProduct[];
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];


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
const handleGetProductFromApi:Function = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    products = data.products;

    displaySearchedProducts();
  } catch (error) {
    console.log(error);
  }
};






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
    showUserNameElem.innerText = `${userInfo.firstName.toUpperCase()}`;
    showUserFullNameElem.innerText = `${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}`;
    showUserEmailElem.innerText = `${userInfo.email}`;
    if (userPhoneAndAddress) {
      showUserPhoneElem.innerText = `${userPhoneAndAddress.phone}`;
      showUserAddressElem.innerText = `${userPhoneAndAddress.address}`;
    } else {
      showUserPhoneElem.innerText = `Phone number not available`;
      showUserAddressElem.innerText = `Delivery address not available`;
    }
  } else {
    showUserNameElem.innerText = `You Are Not Logged In`;
    showUserFullNameElem.innerText = `You Are Not Logged In`;
    showUserEmailElem.innerText = `You Are Not Logged In`;
    
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
// adding event listeners
searchBarContainer.addEventListener("submit", handleSearchBar);
searchBarInputElem.addEventListener("change", handleSearchBarInput);
closeSearchSection.addEventListener("click", handleClosingSearchSection);
userAccountLogOut.addEventListener("click", handleLogOut);
