function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("error-message");

  // Simple validation
  if (name === "" || email === "" || password === "") {
    errorMessage.textContent = "All fields are required";
    return false; // Prevent form submission
  }

  // Additional validation (e.g., email format)
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Enter a valid email address";
    return false; // Prevent form submission
  }

  // Clear any previous error message
  errorMessage.textContent = "";

  // Continue with form submission
  return true;
}
