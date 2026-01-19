let myIndex = 0;
let carouselTimer = null;

function carousel() {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

  myIndex = myIndex + 1 > slides.length ? 1 : myIndex + 1;
  slides[myIndex - 1].style.display = "block";

  carouselTimer = setTimeout(carousel, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  carousel();
});
