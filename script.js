// 1. Event Handling

// Button click to change text
document.getElementById("changeButton").addEventListener("click", function() {
  this.textContent = "You clicked me!";
  this.style.backgroundColor = "#ff9900";
});

// Hover effect on images
const images = document.querySelectorAll("#imageGallery img");
images.forEach(image => {
  image.addEventListener("mouseover", function() {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.2s ease-in-out";
  });
  image.addEventListener("mouseout", function() {
    image.style.transform = "scale(1)";
  });
});

// Keypress detection (on the document)
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    alert("You pressed the Enter key!");
  }
});

// Bonus: Double-click to change the button color
document.getElementById("changeButton").addEventListener("dblclick", function() {
  this.style.backgroundColor = "#dc3545";
  alert("Double-click detected!");
});

// 2. Interactive Elements

// Toggle Tab Content
function toggleTab(tabId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.classList.remove('active');
  });
  
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

// 3. Form Validation

// Basic form validation with real-time feedback
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let errorMessages = [];

  // Email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errorMessages.push("Please enter a valid email.");
  }

  // Password length validation
  if (password.length < 8) {
    errorMessages.push("Password must be at least 8 characters.");
  }

  if (errorMessages.length > 0) {
    alert(errorMessages.join("\n"));
  } else {
    alert("Form submitted successfully!");
    // Form submission can be done here
    // this.submit();
  }
});
