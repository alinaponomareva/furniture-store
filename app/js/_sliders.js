$(function() {
  $('.main-slider').slick({
    nextArrow: '<button class="main-slider__arrow main-slider__arrow-next"></button>',
    prevArrow: '<button class="main-slider__arrow main-slider__arrow-prev"></button>',
    fade: true,
    dots: true,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

$(function() {
  $('.popular__list').slick({
    nextArrow: '<button class="products-categories__arrow products-categories__arrow-next"></button>',
    prevArrow: '<button class="products-categories__arrow products-categories__arrow-prev"></button>',
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 551,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function() {
  $('.products-categories__list').slick({
    nextArrow: '<button class="products-categories__arrow products-categories__arrow-next"></button>',
    prevArrow: '<button class="products-categories__arrow products-categories__arrow-prev"></button>',
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: false
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false
        }
      }
    ]
  });
});

$(function() {
  $('.advantages__list').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5500,
          infinite: true,
          pauseOnFocus: true,
          pauseOnHover: true,
          nextArrow: '<button class="products-categories__arrow products-categories__arrow-next"></button>',
          prevArrow: '<button class="products-categories__arrow products-categories__arrow-prev"></button>',
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          autoplay: true,
          infinite: true,
          pauseOnFocus: true,
          pauseOnHover: true,
          nextArrow: '<button class="products-categories__arrow products-categories__arrow-next"></button>',
          prevArrow: '<button class="products-categories__arrow products-categories__arrow-prev"></button>',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 601,
        settings: {
          arrows: false,
          autoplay: true,
          infinite: true,
          pauseOnFocus: true,
          pauseOnHover: true,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function() {
  $('.product__images').slick({
    nextArrow: '<button class="product__image-arrow product__image-arrow--next"></button>',
    prevArrow: '<button class="product__image-arrow product__image-arrow--prev"></button>',
    autoplay: false,
    dots: true,
    customPaging: function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },
    responsive: [
      {
        breakpoint: 850,
        settings: {
          customPaging: function(slider, i) {
            var thumb = false;
          },
          dots: true
        }
      },
    ]
  });
});

$(function() {
  $('.similar__list').slick({
    nextArrow: '<button class="products-categories__arrow products-categories__arrow-next"></button>',
    prevArrow: '<button class="products-categories__arrow products-categories__arrow-prev"></button>',
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1105,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 551,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
