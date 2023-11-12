//

import { ProductDetailsHtmlElements } from "./productDetailsDomElements";

// getting the html elements to work with
const {
  prevButton,
  nextButton,
} = ProductDetailsHtmlElements;

export const productImageSlide = (scrollContainer: { scrollLeft: number; }) => {
  //
  // callback function for product image slider
  // Function to slide the images left (backwards)
  const slideBackward: EventListener = () => {
    scrollContainer.scrollLeft -= 300;
  };
  // Function to slide the images right (forwards)
  const slideForward: EventListener = () => {
    scrollContainer.scrollLeft += 300;
  };

  //
  // event listeners for product images
  // Add click event listeners to the prev and next buttons
  prevButton.addEventListener("click", slideBackward);
  nextButton.addEventListener("click", slideForward);
};
