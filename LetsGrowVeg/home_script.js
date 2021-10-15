/* 
Home page carousel slideshow.
*/

// Define variables which reference objects in carousel slideshow. 
const slideshow = document.body.getElementsByClassName("carousel_slideshow")[0];
const slides = slideshow.children;
const leftButton = document.getElementById("left_slideshow_button");
const rightButton = document.getElementById("right_slideshow_button");
// const indicatorGroup = document.body.getElementsByClassName("slideshow_indicators");
// const indicators = indicatorGroup[0].children;

// Organize slides in line.
const slideWidth = slides[0].getBoundingClientRect().width;

for (var i = 0; i < slides.length; i++) {
    slides[i].style.left = slideWidth * i + "px";
}

// Define function that will move slides.
const moveSlides = (current, target) => {
    // Move slides in specified direction. 
    slideshow.style.transform = "translateX(-" + target.style.left + ")";
    // Update element classes to reflect current slide change.
    target.classList.add("current_slide");
    current.classList.remove("current_slide");

}

// Define function that will move slides left.
const moveLeft = () => {
    // Define variables to reference current and previous slides.
    const currentSlide = document.body.getElementsByClassName("current_slide")[0];
    const prevSlide = currentSlide.previousElementSibling;
    // Move slides to left on page, so next slide to right is centered. 
    moveSlides(currentSlide, prevSlide);
}

// Define function that will move slides right. 
const moveRight = () => {
    // Define variables to reference current and next slides.
    const currentSlide = document.body.getElementsByClassName("current_slide")[0];
    const nextSlide = currentSlide.nextElementSibling;
    // Move slides to left on page, so next slide to right is centered. 
    moveSlides(currentSlide, nextSlide);
}

// If left slideshow button is clicked, move slides left. 
leftButton.addEventListener("click", function (event) {
    // Define variables to reference current slide.
    const currentSlide = document.body.getElementsByClassName("current_slide")[0];
    // If there is no previous slide, move to last slide.
    if (!currentSlide.previousElementSibling) {
        moveRight();
        moveRight();
        moveRight();
    } else {
        // Otherwise, move slides left.
        moveLeft();
    }
});

// If right slideshow button is clicked, move slides right. 
rightButton.addEventListener("click", function (event) {
    // Define variables to reference current slide.
    const currentSlide = document.body.getElementsByClassName("current_slide")[0];
    // If there is no next slide, move to first slide.
    if (!currentSlide.nextElementSibling) {
        moveLeft();
        moveLeft();
        moveLeft();
    } else {
        // Otherwise, move slides right.
        moveRight();
    }
});

// If slide indicators are clicked, move to corresponding slides.
// ***This functionality could be added later, but is not supported at this time***

// Set the slideshow to move to the right automatically. 
const autoMove = setInterval(() => {
    const currentSlide = document.body.getElementsByClassName("current_slide")[0];
    if (!currentSlide.nextElementSibling) {
        moveLeft();
        moveLeft();
        moveLeft();
    } else {
        moveRight();
    }
}, 7000)

document.addEventListener("DOMContentLoaded", autoMove);
