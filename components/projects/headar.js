var slideIndex = 1;
var nextShoeShop = document.getElementById('nextShoeShop');
var prevShoeShop = document.getElementById('prevShoeShop');
var nextYoda = document.getElementById('nextYoda');
var prevYoda = document.getElementById('prevYoda');
var slideIndex = 1;
showSlidesForShoesShop(slideIndex);
showSlidesForYoda(slideIndex);
// previous controls
function plusShoesShop() {
  showSlidesForShoesShop(slideIndex += 1);
}
// next controls
function previousShoesShop() {
  showSlidesForShoesShop(slideIndex += -1);
}
// previous controls
function plusYoda() {
  showSlidesForYoda(slideIndex += 1);
}
// next controls
function previousYoda() {
  showSlidesForYoda(slideIndex += -1);
}


function showSlidesForShoesShop(n) {
  var shoesShop = document.getElementsByClassName("shoes-shop");  
  var i;
  if (n > shoesShop.length) {slideIndex = 1}
  if (n < 1) {slideIndex = shoesShop.length}
  for (i = 0; i < shoesShop.length; i++) {
    shoesShop[i].style.display = "none";
    shoesShop[i].style.opacity = "0";
  }
  shoesShop[slideIndex-1].style.display = "block";
  setTimeout(() => {
    shoesShop[slideIndex-1].style.opacity = "1";
  }, 50);
}

function showSlidesForYoda(n) {
  var yoda = document.getElementsByClassName("yoda");  
  var i;
  if (n > yoda.length) {slideIndex = 1}
  if (n < 1) {slideIndex = yoda.length}
  for (i = 0; i < yoda.length; i++) {
    yoda[i].style.display = "none";
    yoda[i].style.opacity = "0";
  }
  yoda[slideIndex-1].style.display = "block";
  setTimeout(() => {
    yoda[slideIndex-1].style.opacity = "1";
  }, 50);
}

nextShoeShop.addEventListener('click', plusShoesShop);
prevShoeShop.addEventListener('click', previousShoesShop);
nextYoda.addEventListener('click', plusYoda);
prevYoda.addEventListener('click', previousYoda);


function test(n, o) {
  var t = n+o;
  return t;
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function(){
  console.log(test(8, 9));
  
})






























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