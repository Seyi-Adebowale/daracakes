'use strict';
/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TOP BTN
 */

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
      } else {
        star.classList.remove('active');
      }
    });
  }


