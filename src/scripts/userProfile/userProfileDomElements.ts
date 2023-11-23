//
// getting the html elements to work with
//
const showUserNameElem =
  document.querySelector<HTMLParagraphElement>(".user_name");
const showUserFullNameElem =
  document.querySelector<HTMLParagraphElement>(".user_full_name");
const showUserEmailElem =
  document.querySelector<HTMLParagraphElement>(".user_email");
const showUserPhoneElem =
  document.querySelector<HTMLParagraphElement>(".user_phone");
const showUserAddressElem =
  document.querySelector<HTMLParagraphElement>(".user_address_info");

export const userProfileDomElems = {
  showUserNameElem,
  showUserFullNameElem,
  showUserEmailElem,
  showUserPhoneElem,
  showUserAddressElem,
};
