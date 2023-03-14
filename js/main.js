function start() {
  dataLayer.push({ pageTitle: document.title });
}

function swiperHome() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: false,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}

function accordionHome() {
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");

    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }

    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }

  items.forEach((item) => item.addEventListener("click", toggleAccordion));
}

function displayFullYear(element) {
  const year = document.querySelector(element);
  const getYear = new Date().getFullYear();

  year.innerText = getYear;
}

function gtm() {
  let btn = document.getElementsByClassName("btn");

  function gtmClickBtn() {
    dataLayer.push({ event: "click_aula_gratis" });
  }

  function gtmClickBtnPurple() {
    dataLayer.push({ event: "click_aula_gratis_purple" });
  }

  btn[0].addEventListener("click", gtmClickBtnPurple);
  btn[1].addEventListener("click", gtmClickBtn);
}

const init = () => {
  AOS.init();
  start();
  swiperHome();
  accordionHome();
  displayFullYear(".myDate");
  gtm();
};

init();
