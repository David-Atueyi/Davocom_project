import { displayMostPopular } from "../displayMostPopular";
import { displayYouMayAlsoLike } from "../displayYouMayAlsoLike";
import { handleGetProductFromApi } from "../gettingAllProductFromApi";
import { ProductDetailsHtmlElements } from "./productDetailsDomElements";

// getting the html elements to work with
const {
  mostPopularContainerElem,
  youMayAlsoLikeContainerElem,
  loader,
  controlsContainerElem,
} = ProductDetailsHtmlElements;

export const showOtherProduct = () => {
  //
  // getting product from API
  const fetchAndHandleAllProducts = async () => {
    loader.forEach((loader) =>
      loader.setAttribute("class", "loader_second_style")
    );
    //
    const products = await handleGetProductFromApi();
    if (products) {
      //
      controlsContainerElem.forEach((controlContainer) =>
        controlContainer.setAttribute("class", "slide_control_second_style")
      );
      //
      loader.forEach((loader) => loader.setAttribute("class", "loader"));
      //
      displayMostPopular();
      displayYouMayAlsoLike();
    }
  };

  // Call the function
  fetchAndHandleAllProducts();
};
