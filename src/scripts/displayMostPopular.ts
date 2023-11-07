import { ISearchedProduct } from "./interface";

//
export const displayMostPopular: Function = (
  products: ISearchedProduct[],
  mostPopularContainerElem: { innerHTML: string }
) => {
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
