import { storedIsLoggedIn, userInfo } from "./gettingUserFromLocalStorage";
import { handleLogOut } from "./handleLogOut";

const userHasAccount =
  document.querySelector<HTMLParagraphElement>(".have_an_account");

const userAccountSignIn = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_in"
);

const noUserAccount = document.querySelector<HTMLParagraphElement>(
  ".do_not_have_account"
);

const userAccountSignUp = document.querySelector<HTMLParagraphElement>(
  ".user_account_sign_up"
);

const userAccountLogOut = document.querySelector<HTMLParagraphElement>(
  ".user_account_log_out"
);


// if the user have an account or not have an account
export const userAccount: Function = () => {
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

userAccountLogOut.addEventListener("click", handleLogOut);