
// function showNotification() {
//     var notificationPopup = document.getElementById("notificationPopup");
//     notificationPopup.style.display = "block";
//     // Hide the notification after 3 seconds
//     setTimeout(function() {
//       hideNotification();
//     }, 1500); // 3000 milliseconds = 3 seconds
//   }
// function showNotification(event) {
//   const clickedId = event.target.id;
//   if (clickedId) {
//       const index = clickedId.split("-")[1]; // Extract index from id
//       const selectedItem = symbolData[index];
//       const noti = document.getElementById('bookmarkstest');
//       // Set the inner HTML of the addinfo paragraph tag with the desired information
//       noti.innerHTML = `Symbol: ${selectedItem.symbol}, Type: ${selectedItem.type}, Data: ${selectedItem.data}` + "Bookmark Added";
//       // Show the moreinfo div
//       document.getElementById('notificationPopup').style.display = 'block';
//           // Hide the notification after 3 seconds
//       setTimeout(function() {
//         hideNotification();
//       }, 1500); // 3000 milliseconds = 3 seconds
//   }
// }
function showNotification(event) {
  const clickedId = event.target.id;
  if (clickedId) {
      const index = clickedId.split("-")[1]; // Extract index from id
      const selectedItem = symbolData[index];
      const noti = document.getElementById('bookmarkstest');
      // Set the inner HTML of the addinfo paragraph tag with the desired information
      noti.innerHTML = `Symbol: ${selectedItem.symbol}, Type: ${selectedItem.type}, Data: ${selectedItem.data}` + "Bookmark Added";
      // Show the moreinfo div
      document.getElementById('notificationPopup').style.display = 'block';
          // Hide the notification after 3 seconds
      setTimeout(function() {
        hideNotification();
      }, 1500); // 3000 milliseconds = 3 seconds
  }
}
  function hideNotification() {
    var notificationPopup = document.getElementById("notificationPopup");
    notificationPopup.style.display = "none";
  }



