// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


  function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}


  window.addEventListener("scroll", function() {
    console.log("Scrolling detected!"); // Check if this appears in the console
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

window.addEventListener("scroll", function() {
  let element = document.querySelector(".animate");
  if (isInViewport(element)) {
      element.classList.add("active");
  }
});
