document.querySelector('.sorting__btn--asc').onclick = function(){
  sort('data-price');
};
document.querySelector('.sorting__btn--desc').onclick = function(){
  sortDesc('data-price');
};
document.querySelector('.sorting__btn--raiting').onclick = function(){
  sortDesc('data-raiting');
};

function sort(sortType) {
  var sorting = document.querySelector('.catalog__list');
  for (var i = 0; i < sorting.children.length; i++) {
    for (var j = i; j < sorting.children.length; j++) {
      if (+sorting.children[i].getAttribute(sortType) > +sorting.children[j].getAttribute(sortType)) {
        var replacedNode = sorting.replaceChild(sorting.children[j], sorting.children[i]);
        insertAfter(replacedNode, sorting.children[i]);
      } 
    }
  }
}

function sortDesc(sortType) {
  var sorting = document.querySelector('.catalog__list');
  for (var i = 0; i < sorting.children.length; i++) {
    for (var j = i; j < sorting.children.length; j++) {
      if (+sorting.children[i].getAttribute(sortType) < +sorting.children[j].getAttribute(sortType)) {
        var replacedNode = sorting.replaceChild(sorting.children[j], sorting.children[i]);
        insertAfter(replacedNode, sorting.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

$('.sorting').on('click', function() {
  $('.sorting__list').toggleClass('sorting__list--active');
});

$(document).on('click', '.sorting',
function () {
  $(this).toggleClass('sorting--active');
});
