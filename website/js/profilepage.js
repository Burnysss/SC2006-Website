var storedfname = localStorage.getItem("fname");
var storedlname = localStorage.getItem("lname");
var storedemail = localStorage.getItem("email");

document.getElementById("flname").textContent = storedfname + " " + storedlname;
document.getElementById("emaillocal").textContent = storedemail;