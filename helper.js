document.addEventListener("DOMContentLoaded", function () {
    var footer = document.getElementById("site-footer");
  
    function showFooter() {
      var scrollPosition = window.scrollY;
      var windowHeight = window.innerHeight;
      var bodyHeight = document.body.offsetHeight;
  
      // Adjust the threshold as needed
      var threshold = 0.9;
  
      if (scrollPosition + windowHeight >= bodyHeight * threshold) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
    }
  
    // Listen for scroll events
    window.addEventListener("scroll", showFooter);
  
    // Show the footer initially if the page is short
    showFooter();
  });