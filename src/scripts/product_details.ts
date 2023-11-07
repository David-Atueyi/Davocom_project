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
//
const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");
//
// js for the main
const mostPopularContainerElem =
  document.querySelector<HTMLDivElement>(".most_popular");
//
const youMayAlsoLikeContainerElem =
  document.querySelector<HTMLDivElement>(".you_may_also_like");
//
// images scroll images
const scrollContainer = document.querySelector<HTMLDivElement>(
  ".product_image_container"
);
const productImageControlContainerElem = document.querySelector<HTMLDivElement>(
  ".controls_container"
);
const prevButton = document.querySelector<HTMLElement>(".prev_btn");
const nextButton = document.querySelector<HTMLElement>(".next_btn");
//
// product description
const productPriceAndNameContainerElem = document.querySelector<HTMLDivElement>(
  ".product_name_price"
);
const productVariation = document.querySelector<HTMLDivElement>(".available");
const productBrand = document.querySelector<HTMLSpanElement>(".product_brand");
//
const productOverView =
  document.querySelector<HTMLParagraphElement>(".overview_content");
//
const productDescription = document.querySelector<HTMLParagraphElement>(
  ".description_content"
);
//
const productColorElem =
  document.querySelectorAll<HTMLAnchorElement>(".product_color");
const productQuantityElem =
  document.querySelector<HTMLInputElement>("#quantity");
const buyNowBtnElem = document.querySelector<HTMLButtonElement>(".buynow_btn");
const cartButtonElem = document.querySelector<HTMLAnchorElement>(".cart_btn");
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
let checkOutProduct: ICartproduct[] = [];
//
if (cartProduct.length > 0 || !cartProduct) {
  cartTotal.setAttribute("class", "cart_total_second_style");
  cartTotal.innerHTML = cartProduct.length.toString();
}
//
let selectedColor: string;
let getUserQuantityInput: string = productQuantityElem.value;
const getProductIdFromLocalStorage = JSON.parse(
  localStorage.getItem("productId")
);

//
//template literal
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
const displayAProduct: Function = () => {
  let matchingProduct = products.filter(
    (product) => product.id === Number(getProductIdFromLocalStorage)
  );

  if (matchingProduct.length > 0) {
    let showProductImage: string = "";
    let showProductNameAndPrice: string = "";
    matchingProduct.forEach((product) => {
      //
      product.images.forEach((img) => {
        showProductImage += `
        <img src="${img}" alt="" class="product_images"/>
        `;
      });
      if (product.images.length > 1) {
        productImageControlContainerElem.setAttribute(
          "class",
          "controls_container_style_two"
        );
      }
      //
      showProductNameAndPrice += `
      <h4 class="product_description_name">
                  ${product.title}
                </h4>
                <!--  -->
                <div class="price">
                  <p class="bold">$${product.price.toLocaleString()}</p>
                  <p class="line_through">$${parseFloat(
                    (
                      (product.price * product.discountPercentage) / 100 +
                      product.price
                    ).toFixed(2)
                  ).toLocaleString()}</p>
                </div>
      `;
      //
      productBrand.innerText = product.brand;
      //
      productOverView.innerText = product.title;
      //
      productDescription.innerText = product.description;
      //
      product.category === "smartphones" || product.category === "laptops"
        ? productVariation.setAttribute("class", "available_second_style")
        : null;
      //
      const handleCartBtn: EventListener = () => {
        if (!getUserQuantityInput || getUserQuantityInput <= "0") {
          alert("please input the quantity of product to be purchased");
        } else {
          let newItem = {
            productId: product.id,
            image: product.images[0],
            nameOfProduct: product.title,
            productPrice: product.price,
            productColor: selectedColor,
            productStock: product.stock,
            quantityOfProduct: Number(getUserQuantityInput),
            fromCart: true,
          };

          const existingProduct = cartProduct.find(
            (product) =>
              product.productId === newItem.productId &&
              product.productColor === newItem.productColor
          );

          if (existingProduct) {
            existingProduct.quantityOfProduct =
              existingProduct.quantityOfProduct + Number(getUserQuantityInput);
          } else {
            cartProduct.push(newItem);
          }
        }

        localStorage.setItem("cartProduct", JSON.stringify(cartProduct));

        if (cartProduct.length > 0 || !cartProduct) {
          cartTotal.setAttribute("class", "cart_total_second_style");
          cartTotal.innerHTML = cartProduct.length.toString();
        }
      };

      //
      const handleBuyNowBtn: EventListener = (event: Event) => {
        if (!getUserQuantityInput || getUserQuantityInput <= "0") {
          alert("please input the quantity of product to be purchased");
          event.preventDefault();
        } else {
          let newItem = {
            productId: product.id,
            image: product.images[0],
            nameOfProduct: product.title,
            productPrice: product.price,
            productColor: selectedColor,
            productStock: product.stock,
            quantityOfProduct: Number(getUserQuantityInput),
            fromCart: false,
          };

          checkOutProduct.push(newItem);
        }
        localStorage.setItem(
          "checkOutProduct",
          JSON.stringify(checkOutProduct)
        );
      };
      //
      buyNowBtnElem.addEventListener("click", handleBuyNowBtn);
      cartButtonElem.addEventListener("click", handleCartBtn);
    });
    scrollContainer.innerHTML = showProductImage;
    productPriceAndNameContainerElem.innerHTML = showProductNameAndPrice;
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
    displayYouMayAlsoLike();
    displayAProduct();
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
// callback function for product image slider
// Function to slide the images left (backwards)
const slideBackward: EventListener = () => {
  scrollContainer.scrollLeft -= 300;
};
// Function to slide the images right (forwards)
const slideForward: EventListener = () => {
  scrollContainer.scrollLeft += 300;
};

// handling the color of the product
const handleProductColor: EventListener = (event) => {
  const clickedColor = event.target as HTMLAnchorElement;
  selectedColor = clickedColor.textContent;
  event.preventDefault();
};
// handling user quantity input
const handleQuantityInput: EventListener = (event: Event): void => {
  const userQuantityInput = event.target as HTMLInputElement;
  getUserQuantityInput = userQuantityInput.value;
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
productColorElem.forEach((color) => {
  color.addEventListener("click", handleProductColor);
});
productQuantityElem.addEventListener("change", handleQuantityInput);

//
// event listeners for product images
// Add click event listeners to the prev and next buttons
prevButton.addEventListener("click", slideBackward);
nextButton.addEventListener("click", slideForward);

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
