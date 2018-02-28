import $ from 'jquery';

if (document.body.classList.contains('homepage')) {
  $('.scrollbox .scrollbox-next')
    .click((e) => {
      e.preventDefault();
      const $scrollbox = $('.scrollbox .scrollbox-inner');
      $scrollbox.animate({
        scrollLeft: '+=300',
      }, 500);
    });
}
