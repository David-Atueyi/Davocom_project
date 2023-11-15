interface IProductCardSlider {
  preButtons: string | any[] | NodeListOf<HTMLElement>;
  productContainers: NodeListOf<HTMLDivElement> | HTMLDivElement[];
  nxtButtons:
    | NodeListOf<HTMLElement>
    | { addEventListener: (arg0: string, arg1: () => void) => void }[];
}

export const productCardSlider = ({
  preButtons,
  productContainers,
  nxtButtons,
}: IProductCardSlider) => {

  let move = 300
  //
  //card Sliders forward and backward button call backFunction
  const handleCardSliderMovement = (container: HTMLDivElement,move: number) => () => {
    container.scrollBy({ left: move, behavior: "smooth" });
  };


  //
  // Add event listeners to all pre_btn and nxt_btn elements
  for (let i = 0; i < preButtons.length; i++) {
    preButtons[i].addEventListener(
      "click",
      handleCardSliderMovement(productContainers[i],-move)
    );
    nxtButtons[i].addEventListener(
      "click",
      handleCardSliderMovement(productContainers[i],move)
    );
  }
};
