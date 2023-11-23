//
// getting the html elements to work with
// js for the main
const orderHistoryItemContainerElem = document.querySelector<HTMLDivElement>(
  ".history_items_container"
);
//
const clearHistoryBtnElement =
  document.querySelector<HTMLButtonElement>(".clear_history");
//
const clearHistoryWarningTemplateElement =
  document.querySelector<HTMLDivElement>(".clear_history_warning_overlay");
//
const closeClearHistoryWarning = document.querySelector<HTMLElement>(
  ".close_clearHistory_warning"
);
//
const clearHistoryWarningMessageBtnElement =
  document.querySelector<HTMLDivElement>(".warning_message_btn");
//
// card sliders
const loader = document.querySelectorAll<HTMLDivElement>(".loader");
const controlsContainerElem =
  document.querySelectorAll<HTMLDivElement>(".slide_control");


export const orderHistoryHtmlElems = {
  orderHistoryItemContainerElem,
  clearHistoryBtnElement,
  clearHistoryWarningTemplateElement,
  closeClearHistoryWarning,
  clearHistoryWarningMessageBtnElement,
  loader,
  controlsContainerElem,

};
