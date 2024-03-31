        // Retrieve the stored value from local storage
        var storedValue = localStorage.getItem("storedValue");
        
        // Set the retrieved value to the second textbox
        document.getElementById("searchtext2").value = storedValue;