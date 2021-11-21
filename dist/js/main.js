jQuery(document).ready(function ($) {
  window.onscroll = function () {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        $("#header").removeClass("active");
      } else {
        $("#header").addClass("active");
      }
      prevScrollpos = currentScrollPos;
    }
  };
});
