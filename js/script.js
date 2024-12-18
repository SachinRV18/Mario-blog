function confirmLeaveSite() {
  var userConfirmed = confirm("Are you sure you want to leave this site?");
  if (userConfirmed) {
    return true;
  } else {
    return false;
  }
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    alert("Message sent successfully!");
  });

// Event listener for form submission
document.forms.form01.addEventListener(
  "invalid",
  function (e) {
    e.preventDefault();
    e.target.classList.add("invalid");
  },
  true
);
