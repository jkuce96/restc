let isClickScroll = false;

document.querySelectorAll('.custom-underline').forEach(link => {
    link.addEventListener('click', function() {
        isClickScroll = true;
        setTimeout(() => isClickScroll = false, 1000);
    });
});

window.addEventListener('scroll', function() {
    if (!isClickScroll) {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('custom-underline')) {
            focusedElement.blur();
        }
    }
});

window.addEventListener('scroll', function() {
    if (window.innerWidth > 768) {
        var header = document.getElementById('header');
        var links = header.querySelectorAll('a');
        if (window.scrollY > 50) {
            sessionStorage.setItem('scrollState', 'scrolled')
            header.classList.add('bg-white', 'shadow-lg');
            links.forEach(link => {
                link.classList.remove('md:text-white');
                link.classList.add('md:text-black');
            })
        } else {
            sessionStorage.setItem('scrollState', 'notScrolled')
            header.classList.remove('bg-white', 'shadow-lg');
            links.forEach(link => {
                link.classList.remove('md:text-black');
                link.classList.add('md:text-white');
            })
        }
    }
});

window.addEventListener('load', function () {
    if (window.innerWidth > 768) {
        var header = document.getElementById('header');
        var links = header.querySelectorAll('a');
        var scrollState = sessionStorage.getItem('scrollState');

        if (scrollState === 'scrolled' && window.scrollY > 50) {
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
})

document.addEventListener("DOMContentLoaded", function() {
    const menuButtons = document.querySelectorAll("#list-items-burger li a");
    const getOffset = () => window.innerWidth <= 768 ? 60 : 160;

    menuButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();

            let targetId = button.getAttribute("href").substring(1);
            let target = document.getElementById(targetId);
            let targetPosition = target.offsetTop - getOffset();
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });


    const burgerMenu = document.querySelector('.navbar-menu');
    const burgerMenuLinks = document.querySelectorAll('#list-items-burger a');

    burgerMenuLinks.forEach(link => {
        link.addEventListener('click', () => burgerMenu.classList.add('hidden'));
    });

    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

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


const scrollTopBtn = document.getElementById('scrollTopBtn');
const scrollTopBtnImgTop = document.getElementById('scrollTopBtnImgTop');
const scrollTopBtnImgBottom = document.getElementById('scrollTopBtnImgBottom');

const buttons = [scrollTopBtn, scrollTopBtnImgTop, scrollTopBtnImgBottom];

buttons.forEach(button => {
    button.addEventListener('click', scrollToTop)
})

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
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
