document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate form
    if (!validateForm()) {
      return; // Exit if form is not valid
    }

    // Submit form via fetch API
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to dashboard or desired page after successful login
          window.location.href = "/dashboard";
        } else {
          // Handle errors if any
          console.error("Login failed:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error occurred during login:", error);
      });
  });

function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Reset error messages
  document.getElementById("emailError").classList.add("hidden");
  document.getElementById("passwordError").classList.add("hidden");

  let isValid = true;

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

  return isValid;
}
