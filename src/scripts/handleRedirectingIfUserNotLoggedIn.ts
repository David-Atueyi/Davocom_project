//

import { storedIsLoggedIn } from "./gettingUserFromLocalStorage";

// redirect to signup if user is not logged in
storedIsLoggedIn === null || storedIsLoggedIn === false
  ? (window.location.href = "sign_up.html")
  : null;
