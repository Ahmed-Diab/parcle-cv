'use strict';
var slideIndex   = 1;
var nextSlide     = document.getElementsByClassName('next');
var prevSlide     = document.getElementsByClassName('prev');
changeSlide(slideIndex, "shoes-shop");
changeSlide(slideIndex, "yoda");
changeSlide(slideIndex, "cv");

for (let i = 0; i < nextSlide.length; i++) {
  const element = nextSlide[i];
  element.addEventListener('click', plus);
}
for (let i = 0; i < prevSlide.length; i++) {
  const element = prevSlide[i];
  element.addEventListener('click', previous);
}

// previous controls
function plus(e) {
let className = e.target.getAttribute('data')
  changeSlide(slideIndex += 1, className);
}

// next controls
function previous(e) {
  let className = e.target.getAttribute('data')
  changeSlide(slideIndex += -1, className);
}


function changeSlide(n, event) {
  var slideDivs = document.getElementsByClassName(`${event}`);  
  var i;
  if (n > slideDivs.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slideDivs.length}
  for (i = 0; i < slideDivs.length; i++) {
    slideDivs[i].style.display = "none";
    slideDivs[i].style.opacity = "0";
  }
  slideDivs[slideIndex-1].style.display = "block";
  setTimeout(() => {
    slideDivs[slideIndex-1].style.opacity = "1";
  }, 50);
}





























// // Thumbnail image controls
// function currentSlide(i) {
//   showSlides(slideIndex = i);
// }

// for (i = 0; i < dots.length; i++) {
//   dots[i].addEventListener('click', function(p) {
//     t = parseInt(p.target.getAttribute("data"));
//     showSlides(slideIndex = t);
//   })
// }