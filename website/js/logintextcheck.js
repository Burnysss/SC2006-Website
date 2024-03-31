
    function validateForm() {
        var email = document.getElementById("inputEmail").value;
        var password = document.getElementById("inputPassword").value;

        if (email.trim() === "" || password.trim() === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Redirect to index page if fields are not empty
        window.location.href = "index2.html";
        return false; // Prevent form submission (since we're manually redirecting)
    }
    function validateForm2() {
        var email = document.getElementById('inputEmail').value;
    
        if (email.trim() === '') {
            alert('Please fill in all fields.');
            return false; // Prevent form submission
        }
    
        // You can add more validation logic here if needed
    
        return true; // Allow form submission
    }
    
