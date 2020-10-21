// variable to store the textarea element. We're targeting this element
// rather than the window object, just for experimental purposes
const textarea = document.querySelector("textarea");
console.log(textarea)

// variables to store html elements in which we will show
// the number of pixels scrolled from zero
const log = document.getElementById("log");
const log2 = document.getElementById("log2");

// variable for first image we are going to transform
const img1 = document.getElementById("img1");

// target the textarea when scrolled and call the logScroll() function
// basically, when the user scrolls the textarea element,
// call the logScroll() function
textarea.onscroll = logScroll;

// function accepts an event (e) as an argument
function logScroll(e) {
  // variable to store the number of pixels that the user has scrolled
  // from zero
  let scroll = e.target.scrollTop;

  // change the content of the <p> elements (const log & log2) to show
  // a string plus the value of the variable 'scroll'
  // this is written as a template literal, rather than a concatenated string:
  // i.e. log.textContent = "Scroll position: " + scroll
  log.textContent = `Scroll position: ${scroll}`;
  log2.textContent = `Scroll position: ${scroll}`;

  // scale the log2 element using the translate3d trick to hopefully make this work better on mobile devices
  log2.style.transform = `translate3d(0px, 0, 0) scale( ${
    100 + scroll / 10
  }% )`;

  // scale the image stored in the variable 'img1
  img1.style.transform = `translate3d(0, 0px, 0) scale( ${
    100 + scroll / 50
  }%)`;

  // change the opacitity of the image
  // 955 is the number of pixels needed to scroll from top to bottom of the textarea
  // NB: couldn't chain this in the transform like it is done in jQuery!
  img1.style.opacity = `${1 - scroll / 477}`;

  // img2
  img2.style.transform = `translate3d(0, 0px, 0) scale( ${
    100 + scroll / 100
  }%)`;
  img2.style.opacity = `${1 - (scroll -477)/ 477}`;
}
