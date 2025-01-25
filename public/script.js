
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {
    const isPasswordVisible = passwordInput.type === "text";
    
    // Toggle password visibility
    passwordInput.type = isPasswordVisible ? "password" : "text";

    // Update the icon
    if (isPasswordVisible) {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        this.style.color = "#bbb"; // Gray for hidden state
    } else {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        this.style.color = "#fff"; // White for visible state
    }
});
// Function to adjust visibility based on screen width
function adjustLayout() {
    const rightSection = document.querySelector('.right-section');

    // Check if the screen width is smaller than 768px (adjust as needed for different screen sizes)
    if (window.innerWidth < 768) {
        rightSection.style.display = 'none';  // Hide the right section on smaller screens
    } else {
        rightSection.style.display = 'block';  // Show the right section on larger screens
    }
}

// Run the adjustLayout function on page load
window.addEventListener('load', adjustLayout);

// Run the adjustLayout function when the window is resized
window.addEventListener('resize', adjustLayout);
