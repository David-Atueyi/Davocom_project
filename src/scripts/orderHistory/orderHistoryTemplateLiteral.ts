import { orderHistoryProducts } from "../globalVariable";
import { orderHistoryHtmlElems } from "./orderHistoryDomElems";

//
// getting the html elements to work with
const {
  orderHistoryItemContainerElem,
  clearHistoryBtnElement,
} = orderHistoryHtmlElems;


export const displayOrderHistory: Function = () => {
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
    clearHistoryBtnElement.setAttribute("class", "clear_history_second_style");
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


