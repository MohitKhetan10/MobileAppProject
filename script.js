// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// jQuery Click Message
$('#clickBtn').click(function () {
  $('#messageBox')
    .text("🎉 You clicked the button! jQuery is working.")
    .fadeIn();
});

// jQuery Toggle Content
$('#toggleBtn').click(function () {
  $('#infoBox').slideToggle();
});

// jQuery Form Validation
$('#submitBtn').click(function () {
  const name = $('#nameInput').val().trim();
  if (name === "") {
    $('#formResult').css('color', 'red').text("❌ Please enter your name.").fadeIn();
  } else {
    $('#formResult').css('color', 'green').text(`✅ Hello, ${name}!`).fadeIn();
  }
});
