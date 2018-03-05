import $ from 'jquery';
import 'waypoints/lib/noframework.waypoints';

$('#mainNav .nav-link')
  .click(() => {
    $('#navigation')
      .collapse('hide');
  });

if (document.body.classList.contains('homepage')) {
  $(window)
    .scroll(() => {
      if ($(window)
          .scrollTop() > 50) {
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

  const productsWaypoint = new Waypoint({
    element: document.getElementById('products'),
    handler: (dir) => {
      if (dir === 'down') {
        $('#mainNav a[href="#products"]')
          .parent()
          .addClass('active');
      } else {
        $('#mainNav a[href="#products"]')
          .parent()
          .removeClass('active');
      }
    },
  });

  const usWaypoint = new Waypoint({
    element: document.getElementById('us'),
    handler: (dir) => {
      if (dir === 'down') {
        $('#mainNav a[href="#products"]')
          .parent()
          .removeClass('active');
        $('#mainNav a[href="#us"]')
          .parent()
          .addClass('active');
      } else {
        $('#mainNav a[href="#products"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#us"]')
          .parent()
          .removeClass('active');
      }
    },
  });

  const jobsWaypoint = new Waypoint({
    element: document.getElementById('jobs'),
    handler: (dir) => {
      if (dir === 'down') {
        $('#mainNav a[href="#us"]')
          .parent()
          .removeClass('active');
        $('#mainNav a[href="#jobs"]')
          .parent()
          .addClass('active');
      } else {
        $('#mainNav a[href="#us"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#jobs"]')
          .parent()
          .removeClass('active');
      }
    },
  });

  const contactsWaypoint = new Waypoint({
    element: document.getElementById('contact'),
    handler: (dir) => {
      if (dir === 'down') {
        $('#mainNav a[href="#jobs"]')
          .parent()
          .removeClass('active');
        $('#mainNav a[href="#contact"]')
          .parent()
          .addClass('active');
      } else {
        $('#mainNav a[href="#jobs"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#contact"]')
          .parent()
          .removeClass('active');
      }
    },
  });
}
