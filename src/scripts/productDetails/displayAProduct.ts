import { ICartproduct, IProduct } from "../interface";
import { selectedColor } from "../product_details";
import { ProductDetailsHtmlElements } from "./productDetailsDomElements";

const {
  cartTotal,
  scrollContainer,
  productImageControlContainerElem,
  productPriceAndNameContainerElem,
  productVariation,
  productBrand,
  productOverView,
  productDescription,
  productQuantityElem,
  buyNowBtnElem,
  cartButtonElem,
} = ProductDetailsHtmlElements;

//
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];
let checkOutProduct: ICartproduct[] = [];
let getUserQuantityInput: string = productQuantityElem.value;
const singleProductId = JSON.parse(localStorage.getItem("productId"));

//

export const displayAProduct = (aProduct: IProduct) => {
  //
  let showProductImage: string = "";
  let showProductNameAndPrice: string = "";
  //
  aProduct.images.forEach((img) => {
    showProductImage += `
        <img src="${img}" alt="" class="product_images"/>
        `;
  });
  if (aProduct.images.length > 1) {
    productImageControlContainerElem.setAttribute(
      "class",
      "controls_container_style_two"
    );
  }
  //
  showProductNameAndPrice += `
      <h4 class="product_description_name">
                  ${aProduct.title}
                </h4>
                <!--  -->
                <div class="price">
                  <p class="bold">$${aProduct.price.toLocaleString()}</p>
                  <p class="line_through">$${parseFloat(
                    (
                      (aProduct.price * aProduct.discountPercentage) / 100 +
                      aProduct.price
                    ).toFixed(2)
                  ).toLocaleString()}</p>
                </div>
      `;
  //
  productBrand.innerText = aProduct.brand;
  //
  productOverView.innerText = aProduct.title;
  //
  productDescription.innerText = aProduct.description;
  //
  aProduct.category === "smartphones" || aProduct.category === "laptops"
    ? productVariation.setAttribute("class", "available_second_style")
    : null;
  //
  const handleCartBtn: EventListener = () => {
    if (!getUserQuantityInput || getUserQuantityInput <= "0") {
      alert("please input the quantity of product to be purchased");
    } else {
      let newItem = {
        productId: aProduct.id,
        image: aProduct.images[0],
        nameOfProduct: aProduct.title,
        productPrice: aProduct.price,
        productColor: selectedColor,
        productStock: aProduct.stock,
        quantityOfProduct: Number(
          (getUserQuantityInput = productQuantityElem.value)
        ),
        fromCart: true,
      };

      const existingProduct = cartProduct.find(
        (product) =>
          product.productId === newItem.productId &&
          product.productColor === newItem.productColor
      );
      if (existingProduct) {
        existingProduct.quantityOfProduct = existingProduct.quantityOfProduct =
          Number(getUserQuantityInput);
      } else {
        cartProduct.push(newItem);
      }
    }
    localStorage.setItem("cartProduct", JSON.stringify(cartProduct));

    if (cartProduct.length > 0 || !cartProduct) {
      cartTotal.setAttribute("class", "cart_total_second_style");
      cartTotal.innerHTML = cartProduct.length.toString();
    }
  };

  //
  const handleBuyNowBtn: EventListener = (event: Event) => {
    if (!getUserQuantityInput || getUserQuantityInput <= "0") {
      alert("please input the quantity of product to be purchased");
      event.preventDefault();
    } else {
      let newItem = {
        productId: aProduct.id,
        image: aProduct.images[0],
        nameOfProduct: aProduct.title,
        productPrice: aProduct.price,
        productColor: selectedColor,
        productStock: aProduct.stock,
        quantityOfProduct: Number(
          (getUserQuantityInput = productQuantityElem.value)
        ),
        fromCart: false,
      };

      checkOutProduct.push(newItem);
    }
    localStorage.setItem("checkOutProduct", JSON.stringify(checkOutProduct));
  };
  //
  buyNowBtnElem.addEventListener("click", handleBuyNowBtn);
  cartButtonElem.addEventListener("click", handleCartBtn);
  //
  scrollContainer.innerHTML = showProductImage;
  productPriceAndNameContainerElem.innerHTML = showProductNameAndPrice;
  //
  const existingProduct = cartProduct.find(
    (product) => product.productId === Number(singleProductId)
  );
  existingProduct
    ? (productQuantityElem.value = String(existingProduct.quantityOfProduct))
    : null;
  //
};

// handling user quantity input
const handleQuantityInput: EventListener = (event: Event): void => {
  const userQuantityInput = event.target as HTMLInputElement;
  getUserQuantityInput = userQuantityInput.value;
};

productQuantityElem.addEventListener("change", handleQuantityInput);
