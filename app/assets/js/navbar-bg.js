import $ from 'jquery';

$(window).scroll(()=> {
  if ($(window).scrollTop() > $('#products').position().top - 70) {
    if ($('#mainNav').hasClass('bg-dark')) {
      return
    }
    $('#mainNav').addClass('bg-dark');
  } else {
    if ($('#mainNav').hasClass('bg-dark')) {
      $('#mainNav').removeClass('bg-dark');
    }

  }
})
