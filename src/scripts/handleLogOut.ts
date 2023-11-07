//
// set storedIsLoggedIn to false when clicked
export const handleLogOut: EventListener = (): void => {
    let isLoggedIn = false;
    //
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    // 
    window.location.href = "log_in.html";
};
