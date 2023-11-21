import "../styles/style.css";
import "../assets/images/davocom_favicon.png";
import "../assets/images/davocom_logo.png";
import "font-awesome/css/font-awesome.css";
import {
  storedIsLoggedIn,
  userInfo,
  userPhoneAndAddress,
} from "./gettingUserFromLocalStorage";
import { userAccount } from "./displayingUserAccountInformation";
import { handleLogOut } from "./handleLogOut";
import "./handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "./cartIcon";
import { searchProductAndFetchApi } from "./searchAndFetchFromApi";
import { userProfileDomElems } from "./userProfile/userProfileDomElements";
//
// getting the html elements to work with
const {
  noUserAccount,
  userHasAccount,
  userAccountSignIn,
  userAccountSignUp,
  userAccountLogOut,
  showUserNameElem,
  showUserFullNameElem,
  showUserEmailElem,
  showUserPhoneElem,
  showUserAddressElem,
} = userProfileDomElems;

//
// handle search bar
searchProductAndFetchApi();

//
// if the user have an account or not have an account
const displayUserAccountInformation: Function = () => {
  if (storedIsLoggedIn !== null && storedIsLoggedIn === true) {
    showUserNameElem.innerText = `${userInfo.firstName.toUpperCase()}`;
    showUserFullNameElem.innerText = `${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}`;
    showUserEmailElem.innerText = `${userInfo.email}`;
    if (userPhoneAndAddress) {
      showUserPhoneElem.innerText = `${userPhoneAndAddress.phone}`;
      showUserAddressElem.innerText = `${userPhoneAndAddress.address}`;
    } else {
      showUserPhoneElem.innerText = `Phone number not available`;
      showUserAddressElem.innerText = `Delivery address not available`;
    }
  } else {
    showUserNameElem.innerText = `You Are Not Logged In`;
    showUserFullNameElem.innerText = `You Are Not Logged In`;
    showUserEmailElem.innerText = `You Are Not Logged In`;
  }
};

displayUserAccountInformation();
//
userAccount(
  userHasAccount,
  noUserAccount,
  userAccountSignUp,
  userAccountSignIn,
  userAccountLogOut
);

// cart icon total
handleCartIcon();

//
// adding event listeners
userAccountLogOut.addEventListener("click", handleLogOut);
