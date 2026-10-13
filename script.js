"use strict";

const navDialog = document.getElementById("nav-dialog");
handleMenu;
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// const initialTranslateLTR = -48 * 4;
// const initialTranslateRTL = 36 * 4;

// function setupIntersectionObserver(element, isLTR, speed) {
//   const intersectionCallback = (entries) => {
//     const isIntersecting = entries[0].isIntersecting;
//     // console.log(element, isIntersecting);
//     if (isIntersecting) {
//       document.addEventListener("scroll", scrollHandler);
//     } else {
//       document.removeEventListener("scroll", scrollHandler);
//     }
//   };
//   const intersectionObserver = new IntersectionObserver(intersectionCallback);
//   intersectionObserver.observe(element);

//   function scrollHandler() {
//     const translateX =
//       (window.innerHeight - element.getBoundingClientRect().top) * speed;

//     let totalTranslate = 0;
//     totalTranslate;

//     if (isLTR) {
//       totalTranslate = translateX + initialTranslateLTR;
//     } else {
//       totalTranslate = -(translateX + initialTranslateRTL);
//     }

//     element.style.transform = `translateX(${totalTranslate}px)`;
//   }
// }

// const line1 = document.getElementById("line1");
// const line2 = document.getElementById("line2");
// const line3 = document.getElementById("line3");

// setupIntersectionObserver(line1, true, 0.15);
// setupIntersectionObserver(line2, false, 0.15);
// setupIntersectionObserver(line3, true, 0.12);

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);

  intersectionObserver.observe(element);

  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    let totalTranslate = 0;
    totalTranslate;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);

setupIntersectionObserver(line4, true, 0.8);

const dtElements = document.querySelectorAll("dt");
dtElements.forEach((element) => {
  element.addEventListener("click", () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const ddArrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    ddArrowIcon.classList.toggle("-rotate-180");
  });
});

// header and back to open n

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
};

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

// header and back to open n

const headerr = document.querySelector("[data-header]");
const backTopBtnn = document.querySelector("[data-back-top-btn]");

let lastScrollPoss = 0;
lastScrollPoss;
const hideHead = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    headerr.classList.add("hide");
  } else {
    headerr.classList.remove("hide");
  }

  lastScrollPoss = window.scrollY;
};
hideHead;
window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    headerr.classList.add("active");
    backTopBtnn.classList.add("active");
    hideHeader();
  } else {
    headerr.classList.remove("active");
    backTopBtnn.classList.remove("active");
  }
});
