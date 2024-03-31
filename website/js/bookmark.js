
function showNotification() {
    var notificationPopup = document.getElementById("notificationPopup");
    notificationPopup.style.display = "block";
    // Hide the notification after 3 seconds
    setTimeout(function() {
      hideNotification();
    }, 1500); // 3000 milliseconds = 3 seconds
  }

  function hideNotification() {
    var notificationPopup = document.getElementById("notificationPopup");
    notificationPopup.style.display = "none";
  }

  function showMoreinfo() {
    var popup = document.getElementById("moreinfo");
    popup.style.display = "block";
}

function hideMoreinfo() {
    var popup = document.getElementById("moreinfo");
    popup.style.display = "none";
}

