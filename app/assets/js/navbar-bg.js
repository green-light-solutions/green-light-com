import $ from 'jquery';

if (document.body.classList.contains('homepage')) {
  $(window)
    .scroll(() => {
      if ($(window)
          .scrollTop() > $('#products')
          .parent()
          .position().top - 70) {
        if ($('#mainNav')
            .hasClass('bg-dark')) {
          return;
        }
        $('#mainNav')
          .addClass('bg-dark');
      } else {
        if ($('#mainNav')
            .hasClass('bg-dark')) {
          $('#mainNav')
            .removeClass('bg-dark');
        }

      }
    });
}
