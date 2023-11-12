import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import { ICartproduct, ISearchedProduct } from "./interface";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import { displayMostPopular } from "./displayMostPopular";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { productCardSlider } from "./slideCardSlider";
import { ProductDetailsHtmlElements } from "./productDetails/productDetailsDomElements";
import { displayYouMayAlsoLike } from "./displayYouMayAlsoLike";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { productImageSlide } from "./productDetails/productImageSlide";
//
// getting the html elements to work with
const {
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  cartTotal,
  mostPopularContainerElem,
  youMayAlsoLikeContainerElem,
  scrollContainer,
  productImageControlContainerElem,
  productPriceAndNameContainerElem,
  productVariation,
  productBrand,
  productOverView,
  productDescription,
  productColorElem,
  productQuantityElem,
  buyNowBtnElem,
  cartButtonElem,
  loader,
  controlsContainerElem,
  preButtons,
  nxtButtons,
  productContainers,
} = ProductDetailsHtmlElements;

//
// global variable
let products: ISearchedProduct[];
let cartProduct: ICartproduct[] =
  JSON.parse(localStorage.getItem("cartProduct")) || [];
let checkOutProduct: ICartproduct[] = [];
//
handleCartIcon({ cartTotal });
//
let selectedColor: string;
let getUserQuantityInput: string = productQuantityElem.value;
const getProductIdFromLocalStorage = JSON.parse(
  localStorage.getItem("productId")
);

//
//template literal
//
const displayAProduct: Function = () => {
  let matchingProduct = products.filter(
    (product) => product.id === Number(getProductIdFromLocalStorage)
  );

  if (matchingProduct.length > 0) {
    //
    let showProductImage: string = "";
    let showProductNameAndPrice: string = "";
    matchingProduct.forEach((product) => {
      //
      product.images.forEach((img) => {
        showProductImage += `
        <img src="${img}" alt="" class="product_images"/>
        `;
      });
      if (product.images.length > 1) {
        productImageControlContainerElem.setAttribute(
          "class",
          "controls_container_style_two"
        );
      }
      //
      showProductNameAndPrice += `
      <h4 class="product_description_name">
                  ${product.title}
                </h4>
                <!--  -->
                <div class="price">
                  <p class="bold">$${product.price.toLocaleString()}</p>
                  <p class="line_through">$${parseFloat(
                    (
                      (product.price * product.discountPercentage) / 100 +
                      product.price
                    ).toFixed(2)
                  ).toLocaleString()}</p>
                </div>
      `;
      //
      productBrand.innerText = product.brand;
      //
      productOverView.innerText = product.title;
      //
      productDescription.innerText = product.description;
      //
      product.category === "smartphones" || product.category === "laptops"
        ? productVariation.setAttribute("class", "available_second_style")
        : null;
      //
      const handleCartBtn: EventListener = () => {
        if (!getUserQuantityInput || getUserQuantityInput <= "0") {
          alert("please input the quantity of product to be purchased");
        } else {
          let newItem = {
            productId: product.id,
            image: product.images[0],
            nameOfProduct: product.title,
            productPrice: product.price,
            productColor: selectedColor,
            productStock: product.stock,
            quantityOfProduct: Number(getUserQuantityInput),
            fromCart: true,
          };

          const existingProduct = cartProduct.find(
            (product) =>
              product.productId === newItem.productId &&
              product.productColor === newItem.productColor
          );
          if (existingProduct) {
            existingProduct.quantityOfProduct =
              existingProduct.quantityOfProduct = Number(getUserQuantityInput);
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
            productId: product.id,
            image: product.images[0],
            nameOfProduct: product.title,
            productPrice: product.price,
            productColor: selectedColor,
            productStock: product.stock,
            quantityOfProduct: Number(getUserQuantityInput),
            fromCart: false,
          };

          checkOutProduct.push(newItem);
        }
        localStorage.setItem(
          "checkOutProduct",
          JSON.stringify(checkOutProduct)
        );
      };
      //
      buyNowBtnElem.addEventListener("click", handleBuyNowBtn);
      cartButtonElem.addEventListener("click", handleCartBtn);
    });
    scrollContainer.innerHTML = showProductImage;
    productPriceAndNameContainerElem.innerHTML = showProductNameAndPrice;
  }
  //
  const existingProduct = cartProduct.find(
    (product) => product.productId === Number(getProductIdFromLocalStorage)
  );
  existingProduct
    ? (productQuantityElem.value = String(existingProduct.quantityOfProduct))
    : null;
  //
};

// handle search bar
searchProductAndFetchApi({
  products,
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
});
//
// getting product from API
const handleGetProductFromApi: Function = async () => {
  loader.forEach((loader) =>
    loader.setAttribute("class", "loader_second_style")
  );
  try {
    const res = await fetch(`https://dummyjson.com/products`);
    const data = await res.json();
    products = data.products;

    //
    controlsContainerElem.forEach((controlContainer) =>
      controlContainer.setAttribute("class", "slide_control_second_style")
    );
    loader.forEach((loader) => loader.setAttribute("class", "loader"));
    //
    displayMostPopular(products, mostPopularContainerElem);
    displayYouMayAlsoLike(products, youMayAlsoLikeContainerElem);
    displayAProduct();
  } catch (error) {
    console.log(error);
  }
};

handleGetProductFromApi();

//
// if the user have an account or not have an account
userAccount(
  userHasAccount,
  noUserAccount,
  userAccountSignUp,
  userAccountSignIn,
  userAccountLogOut
);

//
// callback function for product image slider
productImageSlide(scrollContainer);

// handling the color of the product
const handleProductColor: EventListener = (event) => {
  //
  const clickedColor = event.target as HTMLAnchorElement;
  selectedColor = clickedColor.textContent;
  event.preventDefault();
  //
  productColorElem.forEach((selectedColor) => {
    selectedColor.classList.remove("chosen_color");
  });

  clickedColor.classList.add("chosen_color");
};
// handling user quantity input
const handleQuantityInput: EventListener = (event: Event): void => {
  const userQuantityInput = event.target as HTMLInputElement;
  getUserQuantityInput = userQuantityInput.value;
};

//
//card Sliders forward and backward button call backFunction
productCardSlider({preButtons, productContainers, nxtButtons});

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
productColorElem.forEach((color) => {
  color.addEventListener("click", handleProductColor);
});
productQuantityElem.addEventListener("change", handleQuantityInput);


