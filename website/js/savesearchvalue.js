function saveValue() {
    // Get the value from the first textbox
    var valueToStore = document.getElementById("searchtext").value;
    
    // Store the value in local storage
    localStorage.setItem("storedValue", valueToStore);
    
    // Redirect to the other page
    window.location.href = "searchresults.html";
}

function saveValue2() {
    // Get the value from the first textbox
    var valueToStore = document.getElementById("searchtext2").value;
    
    // Store the value in local storage
    localStorage.setItem("storedValue", valueToStore);
    window.location.reload();




}