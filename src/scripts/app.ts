import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "../assets/images/hero_slide1.jpg";
import "../assets/images/hero_slide2.jpg";
import "../assets/images/hero_slide3.png";
import "../assets/images/hero_slide4.png";
import "../assets/images/accessories_220x220 (1).png";
import "../assets/images/electronics_220x220.png";
import "../assets/images/health-beauty_220x220 (1).png";
import "../assets/images/groceries_220x220.png";
import "../assets/images/Television.jpg";
import "../assets/images/phones_220x220.png";
import "../assets/images/Best_Seller.png";
import "../assets/images/exclusive-deals_220x220v2.png";
import "../assets/images/260x144-Nestle.png";
import "../assets/images/260x144_edifier.png";
import "../assets/images/Binatone.png";
import "../assets/images/Defacto.jpg";
import "../assets/images/Infinix.jpg";
import "../assets/images/Nivea.png";
import "../assets/images/Oraimo.png";
import "../assets/images/Pernod_ricard.png";
import "../assets/images/Samsung.jpg";
import "../assets/images/Tecno.jpg";
import "../assets/images/Xiaomi.jpg";
import "../assets/images/adidas260_x_144.png";
import "../assets/images/coca-cola_260x144.png";
import "../assets/images/diageo_260x144.png";
import "../assets/images/haier-thermocool_260x144.png";
import "../assets/images/weyon_260x144.png";
import "../assets/images/philips_260x144.png";
import "../assets/images/tcl_260x144.png";
import "../assets/images/JForce.png";
import "../assets/images/advert.jpg";
import "../assets/images/free-delivery_218x184.png";
import "font-awesome/css/font-awesome.css";
import { storedIsLoggedIn, userInfo } from "./gettingUserFromLocalStorage";
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

// js for the main
// hero image slider
const heroImageSlider =
  document.querySelector<HTMLDivElement>(".hero_image_slider");
const prevButton = document.querySelector<HTMLElement>(".prev-button");
const nextButton = document.querySelector<HTMLElement>(".next-button");
//
//
const todayDealsContainerElem =
  document.querySelector<HTMLDivElement>(".today_deals");
//
const flashSalesContainerElem =
  document.querySelector<HTMLDivElement>(".flash_sales");
const bestSellersContainerElem =
  document.querySelector<HTMLDivElement>(".best_sellers");
const phonesAndLaptopsContainerElem =
  document.querySelector<HTMLDivElement>(".phones_laptops");
const cosmeticContainerElem =
  document.querySelector<HTMLDivElement>(".cosmetic");
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
//
let slideInterval: string | number | NodeJS.Timeout;
let currentIndex: number = 0;

// redirect to signup if user is not logged in
storedIsLoggedIn === null || storedIsLoggedIn === false
  ? (window.location.href = "sign_up.html")
  : null;

// template literals
// displaying the searched products
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
        <a href="product_details.html" class="product_card" id="${product.id}">
          <!--  -->
          <div class="product_image">
            <img src="${product.images[0]}" alt="" />
          </div>
          <!--  -->
          <div class="product_info">
            <h4  class="product_name">${product.title}</h4>
            <div class="card_price">
              <p class="card_bold">$${(product.price).toLocaleString()}</p>
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
    //
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
const displayTodayDeals: Function = () => {
  let showTodayDealsProduct = "";

  products.slice(3, 9).forEach((product) => {
    showTodayDealsProduct += `
    <a href="product_details.html" class="product_card" id="${product.id}">
                  <!--  -->
                  <div class="product_image">
                    <span class="discount_tag">${
                      product.discountPercentage
                    }%</span>
                    <img src="${product.images[2]}" alt="" />
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
                    <div class="star">
                        <p>Rating :</p><i class="fa fa-star"> ${
                          product.rating
                        }</i>
                      </div>
                  </div>
                  <!--  -->
                </a>                
    `;
  });
  todayDealsContainerElem.innerHTML = showTodayDealsProduct;

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
const displayFlashSales: Function = () => {
  let showFlashSalesProduct = "";
  products.slice(5, 14).forEach((product) => {
    showFlashSalesProduct += `
     <a href="product_details.html" class="product_card" id="${product.id}">
                  <!--  -->
                  <div class="product_image">
                    <span class="discount_tag">${
                      product.discountPercentage
                    }%</span>
                    <img src="${product.images[2]}" alt="" />
                  </div>
                  <!--  -->
                  <div class="product_info">
                    <h4 class="product_name">${product.title}</h4>
                    <p class="product_remaining">${product.stock} Remaining</p>
                    <div class="items_left">
                        <div class="bar">
                          <div class="bar_child" style="width: ${
                            product.stock
                          }%;"></div>
                        </div>
                      </div>
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
  //
  flashSalesContainerElem.innerHTML = showFlashSalesProduct;
  //
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
const displayBestSellers: Function = () => {
  let showBestSellersProduct = "";
  products.slice(20, 30).forEach((product) => {
    showBestSellersProduct += `
    <a href="product_details.html" class="product_card" id="${product.id}">
                  <!--  -->
                  <div class="product_image">
                    <span class="discount_tag">${
                      product.discountPercentage
                    }%</span>
                    <img src="${product.images[2]}" alt="" />
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
                    <div class="star">
                        <p>Rating :</p><i class="fa fa-star"> ${
                          product.rating
                        }</i>
                      </div>
                  </div>
                  <!--  -->
                </a>                
    `;
  });
  bestSellersContainerElem.innerHTML = showBestSellersProduct;

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
const displayPhonesAndLaptops: Function = () => {
  let showPhonesAndLaptops = "";
  products.slice(0, 10).forEach((product) => {
    showPhonesAndLaptops += `
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
                    <div class="star">
                        <p>Rating :</p><i class="fa fa-star"> ${
                          product.rating
                        }</i>
                      </div>
                  </div>
                  <!--  -->
                </a>                
    `;
  });
  phonesAndLaptopsContainerElem.innerHTML = showPhonesAndLaptops;

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
const displayCosmetic: Function = () => {
  let showCosmetic = "";
  products.slice(10, 20).forEach((product) => {
    showCosmetic += `
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
  cosmeticContainerElem.innerHTML = showCosmetic;

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
    displayTodayDeals();
    displayFlashSales();
    displayBestSellers();
    displayPhonesAndLaptops();
    displayCosmetic();
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

//
// set storedIsLoggedIn to false when clicked
const handleLogOut: EventListener = (): void => {
  let isLoggedIn = false;
  //
  localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
};

// cart icon total
if (cartProduct.length > 0 || !cartProduct) {
  cartTotal.setAttribute("class", "cart_total_second_style");
  cartTotal.innerHTML = cartProduct.length.toString();
}

// home page main
// hero image
// Function to move the slider to the specified index
const moveToIndex: Function = (index: number) => {
  currentIndex = index;
  const translateX = -currentIndex * 100;
  heroImageSlider.style.transform = `translateX(${translateX}%)`;
};

// previous and next buttons callback function
const handlePrevBtn:EventListener = ():void => {
  currentIndex =
    (currentIndex - 1 + heroImageSlider.children.length) %
    heroImageSlider.children.length;
  moveToIndex(currentIndex);
};

const handleNextBtn:EventListener = ():void => {
  currentIndex = (currentIndex + 1) % heroImageSlider.children.length;
  moveToIndex(currentIndex);
};

// Auto slide to the next image every 4 seconds
const autoSlide:Function = () => {
  currentIndex = (currentIndex + 1) % heroImageSlider.children.length;
  moveToIndex(currentIndex);
};

const setIntervals = () => {
  slideInterval = setInterval(autoSlide, 4000);
};

setIntervals();

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
//
// Event listeners for previous and next buttons hero image
prevButton.addEventListener("click", handlePrevBtn);
nextButton.addEventListener("click", handleNextBtn);
// Stop auto sliding hero image on button hover
prevButton.addEventListener("mouseenter", () => clearInterval(slideInterval));
nextButton.addEventListener("mouseenter", () => clearInterval(slideInterval));
// Resume auto sliding hero image when the mouse leaves the buttons
prevButton.addEventListener("mouseleave", setIntervals);
nextButton.addEventListener("mouseleave", setIntervals);
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
