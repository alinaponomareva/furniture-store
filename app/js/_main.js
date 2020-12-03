$(function () {
  var filterItem = function () {
    $(document).on('click', '.filter-item__header',
    function () {
      $(this).parent().toggleClass('filter-item--active');
    });
  };
  filterItem();
});

$('.filter-item__header').on('click', function() {
  $(this).next().slideToggle();
  $(this).toggleClass('filter-item__header--active');
});

$('.search__tabs-item').on('click', function(e) {
  e.preventDefault();
  $('.search__tabs-item').removeClass('search__tabs-item--active');
  $('.search__content-item').removeClass('search__content-item--active');

  $(this).addClass('search__tabs-item--active');
  $($(this).attr('href')).addClass('search__content-item--active');
});

$('.product__tab').on('click', function(e) {
  e.preventDefault();
  $('.product__tab').removeClass('product__tab--active');
  $('.product__card-item').removeClass('product__card-item--active');

  $(this).addClass('product__tab--active');
  $($(this).attr('href')).addClass('product__card-item--active');
});

window.onscroll = function showHeader() {
  var header = document.querySelector('.header');

  if(window.pageYOffset > 150) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
};

$('.question').on('click', function() {
  $('.question-popup').toggleClass('question-popup--active');
});

$('.question-popup__close').on('click', function() {
  $('.question-popup').removeClass('question-popup--active');
});

$(".js-range-slider").ionRangeSlider({
  type: "double", 
  grid: false,
});

$('.filter-style').styler();

$('.filter__header').on('click', function() {
  $(this).next().slideToggle();
  $(this).toggleClass('filter__header--active');
});

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

var unlock = true;
