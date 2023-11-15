import { displayMostPopular } from "../displayMostPopular";
import { displayYouMayAlsoLike } from "../displayYouMayAlsoLike";
import { ProductDetailsHtmlElements } from "./productDetailsDomElements";

// getting the html elements to work with
const {
  mostPopularContainerElem,
  youMayAlsoLikeContainerElem,
  loader,
  controlsContainerElem,
} = ProductDetailsHtmlElements;


export const showOtherProduct = (products) => {
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
    } catch (error) {
      console.log(error);
    }
  };

  handleGetProductFromApi();
};