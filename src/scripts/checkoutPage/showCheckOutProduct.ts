//

import { ICartproduct } from "../interface";

// template literals
export const showCheckOutProducts = (
  checkOutProduct: ICartproduct[],
  checkOutProductContainerElem: { innerHTML: string }
) => {
  const displayCheckOutProduct: Function = () => {
    let showCheckOutProduct = "";
    //
    checkOutProduct.forEach((product) => {
      showCheckOutProduct += `
    <div class="checkout_order_item">
                    <div class="checkout_order_item_image">
                      <img
                        src="${product.image}"
                        alt=""
                      />
                    </div>
                    <div class="checkout_order_item_description_container">
                      <h4>${product.nameOfProduct}</h4>
                      <div>
                        <p>Quantity: <span>${product.quantityOfProduct}</span></p>
                        <p class="productColor">Color: <span>${product.productColor}</span></p>
                      </div>
                    </div>
                    <p class="checkout_order_item_price">
                      $${product.productPrice}
                    </p>
                  </div>
    `;
    });
    checkOutProductContainerElem.innerHTML = showCheckOutProduct;

    //
    //
    // check if user selected a color
    const ifColorAvailable =
      document.querySelectorAll<HTMLDivElement>(".productColor");
    ifColorAvailable.forEach((colorAvailable, index) => {
      if (!checkOutProduct[index].productColor) {
        colorAvailable.setAttribute("class", "color_of_product");
      }
    });
  };
  displayCheckOutProduct()
};
