let slideIndex = 1;
showSlides(slideIndex);
playSlides();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function playSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(playSlides, 10000); // Change image every 2 seconds
}

let topButton = document.querySelector(".top-button");

addEventListener("scroll", () => {
  let nav = document.querySelector(".nav");
  let logo = document.querySelector(".nav-logo");

  if (window.pageYOffset !== 0) {
    nav.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
    logo.style.opacity = "1";
    nav.style.boxShadow = "0px 2px 3px gray";
    topButton.style.display = "block";
  } else {
    logo.style.opacity = "0";
    nav.style.boxShadow = "none";
    topButton.style.display = "none";
  }
});

onscroll = () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    topButton.style.boxShadow = "0 0 5px gray";
  } else {
    topButton.style.boxShadow = "none";
  }
};

addEventListener("click", () => {
  let rootElement = document.documentElement;
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
