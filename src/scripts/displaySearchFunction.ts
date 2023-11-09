import { ISearchedProduct } from "./interface";

// displaying the searched products

export const displaySearchedProducts: Function = (
  products: ISearchedProduct[],
  userInput: string,
  theHtmlElement: { innerHTML: string }
) => {
  const matchingProducts = products.filter(
    (product) =>
      product.title.toLowerCase().split(" ").join("").includes(userInput) ||
      product.title.toLowerCase().split("").join("").includes(userInput) ||
      product.brand.toLowerCase().split(" ").join("").includes(userInput) ||
      product.category.toLowerCase().split(" ").join("").includes(userInput)
  );

  if (matchingProducts.length > 0) {
    let showSearchProducts = "";

    matchingProducts.forEach((product) => {
      //
      const highlightedTitle = highlightMatch(product.title, userInput);
      //
      showSearchProducts += `
        <a href="product_details.html" class="product_card" id="${product.id}">
          <!--  -->
          <div class="product_image">
            <img src="${product.images[0]}" alt="" />
          </div>
          <!--  -->
          <div class="product_info">
             <h4 class="product_name">${highlightedTitle}</h4>
            <div class="card_price">
              <p class="card_bold">$${product.price.toLocaleString()}</p>
              <p class="card_line_through">$${parseFloat(
                (
                  (product.price * product.discountPercentage) / 100 +
                  product.price
                ).toFixed(2)
              ).toLocaleString()}</p>
            </div>
          </div>
          <!--  -->
        </a>
      `;
    });

    theHtmlElement.innerHTML = showSearchProducts;
    //
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
  } else {
    theHtmlElement.innerHTML = `<p class="if_not_available">Oops! product not available</p>`;
  }
};
const highlightMatch = (text: string, userInput: string): string => {
  const regex = new RegExp(`(${userInput})`, "gi");
  return text.replace(regex, '<span class="highlight">$1</span>');
};
