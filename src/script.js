

// Define the easing function with an extra easing effect towards the end

function easeOutExpo(t) {
  if (t < 0.5) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  } else {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
}

//burger
const navbarSticky = document.getElementById("navbar-sticky");
const button = document.querySelector("[data-collapse-toggle='navbar-sticky']");

function hideStickyNav() {
    navbarSticky.classList.add("hidden");
}

function toggleStickyNav() {
    navbarSticky.classList.toggle("hidden");
}

document.addEventListener("click", function(event) {
    if (event.target !== button && !navbarSticky.contains(event.target)) {
        hideStickyNav();
    }
});

button.addEventListener("click", function(event) {
    event.stopPropagation();
    
    toggleStickyNav();
});


// Function to animate the counter
function animateCounter(target, targetValue) {
  let current = 0;
  const interval = 25; // Interval between updates in milliseconds

  // Function to update the counter
  function updateCounter() {
    if (current < targetValue) {
      current++;
      target.textContent = current;
      setTimeout(updateCounter, interval * easeOutExpo(current / targetValue)); // Apply easing
    }
  }

  // Start the animation
  updateCounter();
}

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start the animation only when the element is scrolled into view for the first time
      const target = entry.target;
      const targetValue = parseInt(target.textContent);
      animateCounter(target, targetValue);
      // Stop observing the element to prevent multiple animations
      observer.unobserve(target);
    }
  });
}, { threshold: 0 });

// Get all elements with the class 'counter'
const counters = document.querySelectorAll('.counter');

// Start observing each counter element
counters.forEach(counter => {
  observer.observe(counter);
});

  




function aboutZoom() {
  // list tlačítek
  const menuButtons = document.querySelectorAll("#list-items-burger li a");

  window.addEventListener("scroll", function() {
      let currentScroll = window.scrollY;
    
      document.querySelectorAll("section").forEach(section => {
          let sectionTop = section.offsetTop;
          let sectionBottom = section.offsetTop + section.offsetHeight;

          if (currentScroll >= sectionTop && currentScroll < sectionBottom) {

            let targetId = section.id;
              menuButtons.forEach(button => {
                  if (button.getAttribute("href").substring(1) === targetId) {
                      menuButtons.forEach(btn => {
                          btn.classList.remove("text-blue-700");
                          btn.classList.add("text-gray-900");
                      });
                      button.classList.remove("text-gray-900");
                      button.classList.add("text-blue-700");
                  }
              });
          }
      });
  });

  menuButtons.forEach(button => {
      button.addEventListener("click", function(e) {
          e.preventDefault();

          menuButtons.forEach(btn => {
              btn.classList.remove("text-blue-700");
              btn.classList.add("text-gray-900");
          });

          button.classList.remove("text-gray-900");
          button.classList.add("text-blue-700");

          let targetId = button.getAttribute("href").substring(1);
          let target = document.getElementById(targetId);
          let targetPosition = target.offsetTop - 40;
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });
  });
}

// Call the aboutZoom function to initialize it
aboutZoom();



document.addEventListener("DOMContentLoaded", function() {
    const labels = document.querySelectorAll("label[data-content]");

    labels.forEach(function(label) {
        label.addEventListener("click", function() {
            const contentId = this.getAttribute("data-content");
            const content = document.getElementById(contentId);
            const allContents = document.querySelectorAll(".content");
            allContents.forEach(function(element) {
                element.classList.add("hidden");
            });

            content.classList.remove("hidden");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        autoplay: {
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


// Get the scroll to top button element
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Function to scroll to the top of the page when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}

// Event listener to toggle the visibility of the button when scrolling
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const scrollThreshold = viewportHeight * 0.5; // 50% of the viewport height

  if (scrollPosition > scrollThreshold) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }
});

//ig 



// Event listener to scroll to the top when the button is clicked
scrollTopBtn.addEventListener('click', scrollToTop);


aboutZoom();