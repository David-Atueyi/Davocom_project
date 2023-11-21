// import { cartProduct } from "./globalVariable";

import { ICartproduct } from "./interface";


const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");
//
const numberOfProductInCart = document.querySelector<HTMLSpanElement>(
  ".total_cart_product"
);

let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];

export const handleCartIcon = () => {
  if (cartProduct.length > 0 || !cartProduct) {
    cartTotal.setAttribute("class", "cart_total_second_style");
    cartTotal.innerHTML = cartProduct.length.toString();

    // Check if numberOfProductInCart is provided before accessing its properties
    if (numberOfProductInCart) {
      numberOfProductInCart.innerHTML = cartProduct.length.toString();
    }
  }
};
