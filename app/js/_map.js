document.addEventListener("DOMContentLoaded", function(event) {
  var mapEl = document.querySelector('#map');

  if (mapEl) {
    ymaps.ready(init);
    var map;
    function init() {
      if (document.body.clientWidth < 768) {
        map = new ymaps.Map('map', {
          center: [55.796688, 37.537202],
          zoom: 16,
          controls: ['zoomControl']
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([55.796688, 37.537202], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [35, 53],
          iconImageOffset: [-23, -40]
        });
        map.geoObjects.add(placemark);
      } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
        map = new ymaps.Map("map", {
        center: [55.796688, 37.537202],
        zoom: 17,
        controls: ['zoomControl']
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([55.796688, 37.537202], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [56, 86],
          iconImageOffset: [-56, -106]
        });
        map.geoObjects.add(placemark);
      } else if (document.body.clientWidth >= 1300) {
        map = new ymaps.Map("map", {
        center: [55.796688, 37.537202],
        zoom: 16,
        controls: ['zoomControl']
        });

        map.behaviors.disable('scrollZoom');
        var placemark = new ymaps.Placemark([55.796688, 37.537202], {}, {
          iconLayout: "default#image",
          iconImageHref: "img/map-pin.png",
          iconImageSize: [55, 85],
          iconImageOffset: [-26, -60]
        });
        map.geoObjects.add(placemark);
      }
    }
  }
});
