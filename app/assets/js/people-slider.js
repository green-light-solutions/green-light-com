import $ from 'jquery';

if (document.body.classList.contains('homepage')) {
  $('.scrollbox .scrollbox-next')
    .click((e) => {
      e.preventDefault();
      const $scrollbox = $('.scrollbox .scrollbox-inner');
      $scrollbox.animate({
        scrollLeft: '+=700',
      }, 500);
    });
  $('.scrollbox .scrollbox-prev')
    .click((e) => {
      e.preventDefault();
      const $scrollbox = $('.scrollbox .scrollbox-inner');
      $scrollbox.animate({
        scrollLeft: '-=700',
      }, 500);
    });

  let width = $('.scrollbox .scrollbox-inner .person').length * 420;

  $('.scrollbox .scrollbox-inner')
    .scroll((e) => {
      const $target = $(e.target);

      if ($target.scrollLeft() + $(window)
          .width() === width) {
        $('.scrollbox .scrollbox-next')
          .fadeOut();
      } else if ($target.scrollLeft() === 0) {
        $('.scrollbox .scrollbox-prev')
          .fadeOut();
      } else {
        $('.scrollbox .scrollbox-prev')
          .fadeIn();
        $('.scrollbox .scrollbox-next')
          .fadeIn();
      }
    });
}
