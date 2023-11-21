import { handleGetProductFromApi } from "./gettingAllProductFromApi";
import { IProduct } from "./interface";

const youMayAlsoLikeContainerElem =
  document.querySelector<HTMLDivElement>(".you_may_also_like");

// 
  // getting product from API
let products: IProduct[];

const fetchAndHandleAllProducts = async () => {
  products = await handleGetProductFromApi();
}
  
fetchAndHandleAllProducts()

export const displayYouMayAlsoLike: Function = () => {
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
