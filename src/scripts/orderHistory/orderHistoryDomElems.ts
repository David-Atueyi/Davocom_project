//
// getting the html elements to work with

const noUserAccount = document.querySelector<HTMLParagraphElement>(
  ".do_not_have_account"
);
const userHasAccount =
  document.querySelector<HTMLParagraphElement>(".have_an_account");
const userAccountSignIn = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_in"
);

const userAccountSignUp = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_up"
);

const userAccountLogOut = document.querySelector<HTMLParagraphElement>(
  ".user_account_log_out"
);

//
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
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  orderHistoryItemContainerElem,
  clearHistoryBtnElement,
  clearHistoryWarningTemplateElement,
  closeClearHistoryWarning,
  clearHistoryWarningMessageBtnElement,
  loader,
  controlsContainerElem,

};
