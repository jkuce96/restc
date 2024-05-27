
window.addEventListener('scroll', function() {
    if (window.innerWidth > 768) {
        var header = document.getElementById('header');
        var links = header.querySelectorAll('a');
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-lg');
            links.forEach(link => {
                link.classList.remove('md:text-white');
                link.classList.add('md:text-black');
            })
        } else {
            header.classList.remove('bg-white', 'shadow-lg');
            links.forEach(link => {
                link.classList.remove('md:text-black');
                link.classList.add('md:text-white');
            })
        }
    }
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
                          btn.classList.remove("text-red-700");
                          btn.classList.add("text-gray-900");
                      });
                      button.classList.remove("text-gray-900");
                      button.classList.add("text-red-700");
                  }
              });
          }
      });
  });

  menuButtons.forEach(button => {
      button.addEventListener("click", function(e) {
          e.preventDefault();

          menuButtons.forEach(btn => {
              btn.classList.remove("text-red-700");
              btn.classList.add("text-gray-900");
          });

          button.classList.remove("text-gray-900");
          button.classList.add("text-red-700");

          let targetId = button.getAttribute("href").substring(1);
          let target = document.getElementById(targetId);
          let targetPosition = target.offsetTop - 130;
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
    const burgerButton = document.getElementById('burger-button');
    const burgerMenu = document.getElementById('navbar-sticky');
    const menuLinks = burgerMenu.querySelectorAll('a');

    burgerButton.addEventListener('click', function () {
        const isMenuOpen = burgerMenu.classList.toggle('hidden');
        document.body.classList.toggle('overflow-hidden', !isMenuOpen);
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            burgerMenu.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    });


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

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
        },
        autoplay: {
            pauseOnMouseEnter: true,
        },
        loop: true,
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
