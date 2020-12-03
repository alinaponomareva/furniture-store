function backToTop() {
  var top = $('.top__button');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 50) {
      top.fadeIn();
    } else {
      top.fadeOut();
    }
  });
  
  top.on('click', (e) => {
    e.preventDefault();
    $('html').animate({scrollTop: 0}, 800);  
  });
}

backToTop();
