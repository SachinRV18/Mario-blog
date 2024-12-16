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

    window.location.href = "index.html";
  });
