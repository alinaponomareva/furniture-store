var body = document.querySelector('body');
var navMobile = document.querySelector('.mobile-menu');
var navToggle = document.querySelector('.header__nav-toggle');
var headerPopup = document.querySelector('.mobile-menu__popup-body');
var popupLinks = document.querySelector('.popup-link');

navMobile.classList.remove('mobile-menu--nojs');
navToggle.classList.remove('header__nav-toggle--nojs');

if (popupLinks.length > 0) {
  for (var index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('header__nav-toggle--open')) {
    navToggle.classList.remove('header__nav-toggle--open');
    navToggle.classList.add('header__nav-toggle--close');
    navMobile.classList.remove('mobile-menu--closed');
    navMobile.classList.add('mobile-menu--opened');
    headerPopup.classList.add('mobile-menu__popup-body--active');
    body.classList.add('body-hidden');

  } else if (navToggle.classList.contains('header__nav-toggle--close')) {
    navToggle.classList.remove('header__nav-toggle--close');
    navToggle.classList.add('header__nav-toggle--open');
    navMobile.classList.add('mobile-menu--closed');
    navMobile.classList.remove('mobile-menu--opened');
    headerPopup.classList.remove('mobile-menu__popup-body--active');
    body.classList.remove('body-hidden');
  }
});

$('.mobile-menu__popup__area').on('click', function(e) {
  $('.header__nav-toggle').removeClass('header__nav-toggle--close');
  $('.mobile-menu').removeClass('mobile-menu--opened');
  $('.header__nav-toggle').addClass('header__nav-toggle--open');
  $('.mobile-menu').addClass('mobile-menu--closed');
  $('.mobile-menu__popup-body').removeClass('mobile-menu__popup-body--active');
  body.classList.remove('body-hidden');

  e.preventDefault();
});
