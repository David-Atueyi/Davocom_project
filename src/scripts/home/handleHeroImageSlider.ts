import { homePageDomElems } from "./homePageDomElement";

const { heroImageSlider, prevButton, nextButton } = homePageDomElems;

export const heroImageSliderFunction = () => {
  let currentIndex: number = 0;
  let slideInterval: string | number | NodeJS.Timeout;

  // hero image
  // Function to move the slider to the specified index
  const moveToIndex: Function = (index: number) => {
    currentIndex = index;
    const translateX = -currentIndex * 100;
    heroImageSlider.style.transform = `translateX(${translateX}%)`;
  };

  // previous and next buttons callback function
  const handlePrevBtn: EventListener = (): void => {
    currentIndex =
      (currentIndex - 1 + heroImageSlider.children.length) %
      heroImageSlider.children.length;
    moveToIndex(currentIndex);
  };

  const handleNextBtn: EventListener = (): void => {
    currentIndex = (currentIndex + 1) % heroImageSlider.children.length;
    moveToIndex(currentIndex);
  };

  // Auto slide to the next image every 4 seconds
  const autoSlide: Function = () => {
    currentIndex = (currentIndex + 1) % heroImageSlider.children.length;
    moveToIndex(currentIndex);
  };

  const setIntervals = () => {
    slideInterval = setInterval(autoSlide, 4000);
  };

  setIntervals();

  //
  // Event listeners for previous and next buttons hero image
  prevButton.addEventListener("click", handlePrevBtn);
  nextButton.addEventListener("click", handleNextBtn);
  // Stop auto sliding hero image on button hover
  prevButton.addEventListener("mouseenter", () => clearInterval(slideInterval));
  nextButton.addEventListener("mouseenter", () => clearInterval(slideInterval));
  // Resume auto sliding hero image when the mouse leaves the buttons
  prevButton.addEventListener("mouseleave", setIntervals);
  nextButton.addEventListener("mouseleave", setIntervals);
};
