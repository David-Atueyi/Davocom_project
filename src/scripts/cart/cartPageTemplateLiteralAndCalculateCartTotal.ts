import { cartProduct } from "../globalVariable";
import { cartPageHtmlElems } from "./cartPageHtmlElements";
// 
const cartSubTotal = document.querySelector<HTMLParagraphElement>(".price");
// 
const checkoutBtnSubtotal = document.querySelector<HTMLParagraphElement>(
  ".checkout_btn_subtotal"
);


const { cartTotal, numberOfProductInCart, cartProductsContainerElem } =
  cartPageHtmlElems;

export const displayCartProductsAndCalculateCartTotal = () => {
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
    const plusButtons =
      document.querySelectorAll<HTMLElement>(".fa-plus-square");
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
  // total price of product
  const calculatePriceTotal: Function = () => {
    let totalPrice = 0;

    cartProduct.forEach((total) => {
      totalPrice += total.productPrice * total.quantityOfProduct;
    });
    cartSubTotal.innerText = `$${totalPrice.toLocaleString()}`;
    checkoutBtnSubtotal.innerText = `$${totalPrice.toLocaleString()}`;
  };
  calculatePriceTotal();
};
