import { checkOutProduct } from "../globalVariable";
import { checkOutHtmlElems } from "./checkOutHtmlElements";



// getting the html elements to work with
const {
  checkoutSubTotal,
  shippingFee,
  checkoutTotal,
} = checkOutHtmlElems;

export const handleCalculatingOfCartTotal = () => {
  // total price of product
  const calculatePriceTotal: Function = () => {
    let totalPrice = 0;

    checkOutProduct.forEach((total) => {
      totalPrice += total.productPrice * total.quantityOfProduct;
    });
    checkoutSubTotal.innerText = `$${totalPrice.toLocaleString()}`;

    if (totalPrice >= 1000 && totalPrice < 5000) {
      shippingFee.innerText = "$500";
      checkoutTotal.innerText = `$${(totalPrice + 500).toLocaleString()}`;
    } else if (totalPrice > 4999) {
      shippingFee.innerText = "$1000";
      checkoutTotal.innerText = `$${(totalPrice + 1000).toLocaleString()}`;
    } else {
      shippingFee.innerText = "Free Shipping";
      checkoutTotal.innerText = `$${totalPrice.toLocaleString()}`;
    }
  };
  calculatePriceTotal();
}