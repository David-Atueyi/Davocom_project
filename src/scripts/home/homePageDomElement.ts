// getting the html elements to work with
const searchBarContainer = document.querySelector<HTMLFormElement>(
  ".search_bar_container"
);

export const searchBarInputElem = document.querySelector<HTMLInputElement>("#search");

//


const cartTotal = document.querySelector<HTMLParagraphElement>(".cart_total");

// js for the main
// hero image slider
const heroImageSlider =
  document.querySelector<HTMLDivElement>(".hero_image_slider");
const prevButton = document.querySelector<HTMLElement>(".prev-button");
const nextButton = document.querySelector<HTMLElement>(".next-button");
//

//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");


export const homePageDomElems = {
  searchBarContainer,
  searchBarInputElem,
  cartTotal,
  heroImageSlider,
  prevButton,
  nextButton,
  loader,
  controlsContainerElem,
};
