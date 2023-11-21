import { displaySearchedProducts } from "./displaySearchFunction";
import { searchBarInputElem } from "../scripts/home/homePageDomElement";
import { handleGetProductFromApi } from "./gettingAllProductFromApi";

// getting the html elements to work with
const searchBarContainer = document.querySelector<HTMLFormElement>(
  ".search_bar_container"
);

const searchSectionContainer = document.querySelector<HTMLDivElement>(
  ".searched_container"
);
const closeSearchSection = document.querySelector<HTMLElement>(
  ".close_search_section"
);

export const searchProductAndFetchApi = () => {
  let searchInputValue: string;

  //
  // handle search bar
  const handleSearchProduct: EventListener = (e: Event): void => {
    e.preventDefault();
    searchInputValue
      ? searchSectionContainer.setAttribute(
          "class",
          "searched_container_second_style"
        )
      : searchSectionContainer.setAttribute("class", "searched_container");
    fetchAndHandleAllProducts();
  };

  //
  // handle getting of user input
  const getSearchInputValue: EventListener = (e: Event): void => {
    const searchInput = e.target as HTMLInputElement;
    searchInputValue = searchInput.value.trim().toLowerCase();
  };

  //
  // closing of the search section when the x icon is clicked
  const handleClosingSearchSection: EventListener = (): void => {
    searchSectionContainer.setAttribute("class", "closing_search_section");
  };

  // getting product from API
  const fetchAndHandleAllProducts = async () => {
    const products = await handleGetProductFromApi();
    if (products) {
      displaySearchedProducts(products, searchInputValue);
    }
  };

  // adding event listeners
  searchBarContainer.addEventListener("submit", handleSearchProduct);
  searchBarInputElem.addEventListener("change", getSearchInputValue);
  closeSearchSection.addEventListener("click", handleClosingSearchSection);
};
