$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
      $('nav>a').addClass('font');
    } else {
      $('nav').removeClass('shrink');    
      $('nav>a').removeClass('font');
    }
  });