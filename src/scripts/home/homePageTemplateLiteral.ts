import { handleGetProductFromApi } from "../gettingAllProductFromApi";
import { IProduct } from "../interface";

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
let products: IProduct[];

const fetchAndHandleAllProducts = async () => {
   products = await handleGetProductFromApi();
};
// 
fetchAndHandleAllProducts();

// 
export const showProducts = () => {
  // template literals
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

  //
  displayTodayDeals();
  displayFlashSales();
  displayBestSellers();
  displayPhonesAndLaptops();
  displayCosmetic();
};
