// Define the easing function with an extra easing effect towards the end
function easeOutExpo(t) {
  if (t < 0.5) {
    return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
  } else {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
}

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
    //o nás zoom
    document.getElementById("oNas").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("onas");
        let target = document.getElementById("kdoJsmeSection");
        let targetPosition = target.offsetTop - 40;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });

    document.getElementById("nabidka").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("nabidka");
        let target = document.getElementById("nabidka-menu");
        let targetPosition = target.offsetTop - 80;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}

function napojeSwitch() {
    const studeneButton = document.getElementById("teple-napoje-button");
    const tepleButton = document.getElementById("studene-napoje-button");

    const studeneMenu = document.getElementById("studene-napoje");
    const tepleMenu = document.getElementById("teple-napoje");

    studeneButton.addEventListener("click", function() {
        studeneMenu.style.display = "block";
        tepleMenu.style.display = "none";
    });

    tepleButton.addEventListener("click", function() {
        studeneMenu.style.display = "none";
        tepleMenu.style.display = "block";
    });
}

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

// Event listener to scroll to the top when the button is clicked
scrollTopBtn.addEventListener('click', scrollToTop);



aboutZoom();
napojeSwitch();

aboutZoom();
napojeSwitch();