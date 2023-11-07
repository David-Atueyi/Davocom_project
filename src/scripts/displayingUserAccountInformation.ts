import { storedIsLoggedIn, userInfo, userPhoneAndAddress } from "./gettingUserFromLocalStorage";

// if the user have an account or not have an account
export const userAccount: Function = (
  userHasAccount: HTMLParagraphElement,
  noUserAccount: HTMLParagraphElement,
  userAccountSignUp: HTMLParagraphElement,
  userAccountSignIn: HTMLParagraphElement,
  userAccountLogOut: HTMLParagraphElement,
) => {
  if (storedIsLoggedIn !== null && storedIsLoggedIn === true) {
    userHasAccount.setAttribute("id", "have_an_account_name");
    userHasAccount.innerText = `Hi, ${userInfo.firstName
      .slice(0, 3)
      .toUpperCase()}`;
    noUserAccount.setAttribute("class", "when_user_logged_in");
    userAccountSignUp.setAttribute("class", "when_user_logged_in");
    userAccountSignIn.setAttribute("class", "when_user_logged_in");
    userAccountLogOut.setAttribute("class", "when_user_logged_out");
  } 
};