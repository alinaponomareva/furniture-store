$(document).ready(function(){
  $('.footer__item-title').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__item-title--active');
  });
});
