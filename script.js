let hamburger = document.getElementById("hamburger-menu");
let menus = document.getElementById("menus");
const track = document.querySelector(".crousel-track");
const slides = document.querySelectorAll(".crousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let index = 0;

// image slider
function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
});


/* Toggle Menu */
hamburger.addEventListener("click", () => {
    menus.classList.toggle("active");
});


