(function ($) {

  "use strict";

  // COLOR MODE

  $('#chk').on('change', () => {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  });

  // HEADER
  $(".navbar").headroom();

  // PROJECT CAROUSEL
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });

  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

  // TOOLTIP
  $('.social-links a').tooltip();

  /*------------------------------*/
  /*	 Parallax
  /*------------------------------*/


  $(window).bind('load', function () {
    if (!onMobile)
      parallaxInit();
  });

  function parallaxInit() {
    $('#history').parallax("50%", 0.2);
    $('#facts').parallax("50%", 0.2);
    $('#cta').parallax("50%", 0.2);
    $('#skills').parallax("50%", 0.2);
    $('#video').parallax("50%", 0.2);
    $('#testimonials').parallax("50%", 0.2);
    $('#contact').parallax("50%", 0.2);
    $('#page-header').parallax("50%", 0.2);

    /*add as necessary*/
  }

})(jQuery);
