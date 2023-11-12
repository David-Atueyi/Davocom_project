import { displaySearchedProducts } from "./displaySearchFunction";
import { ISearchedProduct } from "./interface";

interface ISearch {
  products: ISearchedProduct[];
  searchBarContainer: {
    addEventListener: (arg0: string, arg1: EventListener) => void;
  };
  searchBarInputElem: {
    addEventListener: (arg0: string, arg1: EventListener) => void;
  };
  searchSectionContainer: {
    setAttribute: (arg0: string, arg1: string) => void;
  };
  closeSearchSection: {
    addEventListener: (arg0: string, arg1: EventListener) => void;
  };
  searchedItemsContainerElem: HTMLDivElement;
}

export const searchProductAndFetchApi = ({
  products,
  searchBarContainer,
  searchBarInputElem,
  searchSectionContainer,
  closeSearchSection,
  searchedItemsContainerElem,
}: ISearch) => {
  let getSearchInput: string;

  //
  // handle search bar
  const handleSearchBar: EventListener = (e: Event): void => {
    e.preventDefault();
    getSearchInput
      ? searchSectionContainer.setAttribute(
          "class",
          "searched_container_second_style"
        )
      : searchSectionContainer.setAttribute("class", "searched_container");
    handleGetProductFromApi();
  };

  //
  // handle getting of user input
  const handleSearchBarInput: EventListener = (e: Event): void => {
    const searchInput = e.target as HTMLInputElement;
    getSearchInput = searchInput.value.toLowerCase();
  };

  //
  // closing of the search section when the x icon is clicked
  const handleClosingSearchSection: EventListener = (): void => {
    searchSectionContainer.setAttribute("class", "closing_search_section");
  };

  //
  // getting product from API
  const handleGetProductFromApi: Function = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products`);
      const data = await res.json();
      products = data.products;
      //
      displaySearchedProducts(
        products,
        getSearchInput,
        searchedItemsContainerElem
      );
    } catch (error) {
      console.log(error);
    }
  };
  // adding event listeners
  searchBarContainer.addEventListener("submit", handleSearchBar);
  searchBarInputElem.addEventListener("change", handleSearchBarInput);
  closeSearchSection.addEventListener("click", handleClosingSearchSection);
};
