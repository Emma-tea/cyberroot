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


 document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.getElementById('menuToggle');
            const menu = document.getElementById('navLinks');
            
            // Toggle menu when clicking the hamburger
            toggle.addEventListener('click', function() {
                menu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link (optional)
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        menu.classList.remove('active');
                    }
                });
            });
        });


