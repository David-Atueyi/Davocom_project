const preButtons = document.querySelectorAll<HTMLElement>(".pre_btn");
const nxtButtons = document.querySelectorAll<HTMLElement>(".nxt_btn");
const productContainers =
  document.querySelectorAll<HTMLDivElement>(".product_container");



export const productCardSlider = () => {
  let move = 300;
  //
  //card Sliders forward and backward button call backFunction
  const handleCardSliderMovement =
    (container: HTMLDivElement, move: number) => () => {
      container.scrollBy({ left: move, behavior: "smooth" });
    };

  //
  // Add event listeners to all pre_btn and nxt_btn elements
  for (let i = 0; i < preButtons.length; i++) {
    preButtons[i].addEventListener(
      "click",
      handleCardSliderMovement(productContainers[i], -move)
    );
    nxtButtons[i].addEventListener(
      "click",
      handleCardSliderMovement(productContainers[i], move)
    );
  }
};
