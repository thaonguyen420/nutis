var click = document.querySelector('.click-menu'),
    menu_Mobi = document.querySelector('.show-menu'),
    slideIndex = 1,
    menu_scroll = document.querySelector('.header-bottom');
    console.log(menu_scroll);
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        menu_scroll.classList.add('fix-top');
    } else {
        menu_scroll.classList.remove('fix-top');
    }

})
click.addEventListener('click',function(){
    menu_Mobi.classList.toggle('trax-0');
})

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" act", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " act";
}