import "../../styles/style.css";
import "../../assets/images/davocom_favicon.png";
import "../../assets/images/davocom_logo.png";
import "../../assets/images/dhl-express (1).png";
import "../../assets/images/ups.png";
import "font-awesome/css/font-awesome.css";
import { userAccount } from "../displayingUserAccountInformation";
import { handleLogOut } from "../handleLogOut";
import "../handleRedirectingIfUserNotLoggedIn";
import { handleCartIcon } from "../cartIcon";
import { handleCheckoutInputChecks } from "./checkOutInputChecks";
import { searchProductAndFetchApi } from "../searchAndFetchFromApi";
import { showCheckOutProducts } from "./showCheckOutProduct";
import {
  checkOutProduct,
  orderHistoryProducts,
  products,
} from "../globalVariable";

export const checkOutImports = {
  userAccount,
  handleLogOut,
  handleCartIcon,
  handleCheckoutInputChecks,
  searchProductAndFetchApi,
  showCheckOutProducts,
  checkOutProduct,
  orderHistoryProducts,
  products,
};
