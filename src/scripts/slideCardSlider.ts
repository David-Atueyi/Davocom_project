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
  //
  //card Sliders forward and backward button call backFunction
  const handlePreButton = (container: HTMLDivElement) => () => {
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleNxtButton = (container: HTMLDivElement) => () => {
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  //
  // Add event listeners to all pre_btn and nxt_btn elements
  for (let i = 0; i < preButtons.length; i++) {
    preButtons[i].addEventListener(
      "click",
      handlePreButton(productContainers[i])
    );
    nxtButtons[i].addEventListener(
      "click",
      handleNxtButton(productContainers[i])
    );
  }
};
