'use strict';
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('myModal');
  const closeBtn = document.getElementById('closeBtn');

  function closeModal() {
    modal.style.display = 'none';
  }

  function displayModal() {
    modal.style.display = 'block';
  }

  window.addEventListener('click', function(event) {
    if (event.target === modal || event.target === closeBtn) {
      closeModal();
    }
  });

  setTimeout(displayModal, 3000);
});


// add event listener on multiple elements
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

// NAVBAR
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

// HEADER & BACK TOP BTN
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const starsContainer = document.querySelector('.rating-stars');
const stars = starsContainer.querySelectorAll('.fas.fa-star');
const starsInput = document.getElementById('stars-input');

starsContainer.addEventListener('click', function(event) {
  const selectedStar = event.target;
  if (selectedStar.classList.contains('fas', 'fa-star')) {
    const rating = selectedStar.dataset.rating;
    setRating(rating);
    }
});

starsContainer.addEventListener('mouseover', function(event) {
  const hoveredStar = event.target;
  if (hoveredStar.classList.contains('fas', 'fa-star')) {
    const rating = hoveredStar.dataset.rating;
    highlightStars(rating);
  }
});

starsContainer.addEventListener('mouseout', function() {
  const currentRating = starsInput.value;
  highlightStars(currentRating);
});

function setRating(rating) {
  starsInput.value = rating;
  highlightStars(rating);
}

function highlightStars(rating) {
  stars.forEach(function(star) {
    const starRating = star.dataset.rating;
    if (starRating <= rating) {
      star.classList.add('active');
    } 
    else {
      star.classList.remove('active');
      }
    });
  }

// Get all the star rating elements
const starRatingElements = document.querySelectorAll(".star-rating");

// Loop over each star rating element
starRatingElements.forEach(function (element) {
// Get the star rating value from the adjacent p.star element
const rating = parseInt(element.previousElementSibling.textContent);

// Calculate the number of filled stars
const filledStars = Math.floor(rating);

// Calculate the number of empty stars
const emptyStars = 5 - filledStars;

// Create a string representing the filled stars
let starsHTML = "";
for (let i = 0; i < filledStars; i++) {
  starsHTML += '<i class="fas fa-star star-filled"></i>';
}

// Create a string representing the empty stars
for (let i = 0; i < emptyStars; i++) {
  starsHTML += '<i class="fas fa-star star-empty"></i>';
}

// Set the HTML content of the star rating element
  element.innerHTML = starsHTML;
});

// document.getElementById('read-reviews-btn').addEventListener('click', function() {
//   document.getElementById('reviews').style.display = 'block';
//   document.getElementById('reservation').style.display = 'none';
//   document.getElementById('reviews').scrollIntoView({ behavior: 'smooth' });
// });

document.getElementById('post-review-btn').addEventListener('click', function() {
  document.getElementById('reviews').style.display = 'none';
  document.getElementById('reservation').style.display = 'block';
  document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' });
});

function redirectToWhatsApp() {
  // Generate the custom message
  var message = "Recommending LKO Foods to you, sure you will love it. Check out their menu: ";

  // Get the link to your WhatsApp catalog
  var catalogLink = "https://wa.me/c/447368325136";

  // Generate the WhatsApp share link
  var shareLink = "https://wa.me/?text=" + encodeURIComponent(message + catalogLink);

  // Open the WhatsApp share link in a new window
  window.open(shareLink, "_blank");

  // Redirect the user to the index.php page
  window.location.href = "index.php";
}

function redirectToIndex() {
  window.location.href = "index.php";
}


