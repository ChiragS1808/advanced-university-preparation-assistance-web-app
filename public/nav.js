let userName =
sessionStorage.getItem("userName");

let userNav =
document.getElementById("userNav");

let loginNav =
document.getElementById("loginNav");

let userDropdown =
document.getElementById("userDropdown");

if(userName){

    userNav.textContent =
    userName;

    userDropdown.style.display =
    "block";

    loginNav.style.display =
    "none";

}

document
.getElementById("logoutBtn")
.addEventListener("click",function(){

    sessionStorage.removeItem(
        "userName"
    );

    location.reload();

});