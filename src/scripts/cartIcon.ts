// import { cartProduct } from "./globalVariable";

import { ICartproduct } from "./interface";

interface ICartIcon {
  cartTotal: {
    setAttribute: (arg0: string, arg1: string) => void;
    innerHTML: string;
  };
  numberOfProductInCart?: { innerHTML: string };
}

let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];

export const handleCartIcon = ({
  cartTotal,
  numberOfProductInCart,
}: ICartIcon) => {
  if (cartProduct.length > 0 || !cartProduct) {
    cartTotal.setAttribute("class", "cart_total_second_style");
    cartTotal.innerHTML = cartProduct.length.toString();

    // Check if numberOfProductInCart is provided before accessing its properties
    if (numberOfProductInCart) {
      numberOfProductInCart.innerHTML = cartProduct.length.toString();
    }
  }
};
