document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form
    if (!validateForm()) {
      return; // Exit if form is not valid
    }

    // Submit form via fetch API
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to login page after successful signup
          window.location.href = "/login";
        } else {
          // Handle errors if any
          console.error("Signup failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error occurred during signup:", error);
      });
  });

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("nameError").classList.add("hidden");
  document.getElementById("emailError").classList.add("hidden");
  document.getElementById("passwordError").classList.add("hidden");

  let isValid = true;

  // Validate name
  if (!name.trim()) {
    document.getElementById("nameError").classList.remove("hidden");
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").classList.remove("hidden");
    isValid = false;
  }

  // Validate password
  if (!password.trim()) {
    document.getElementById("passwordError").classList.remove("hidden");
    isValid = false;
  }

  // Enable/disable submit button based on form validity
  document.getElementById("submitButton").disabled = !isValid;

  return isValid;
}
