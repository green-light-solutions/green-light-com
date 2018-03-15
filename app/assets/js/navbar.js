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

        history.pushState(1,1,'#product')
      } else {
        $('#mainNav a[href="#products"]')
          .parent()
          .removeClass('active');
        history.pushState(1,1,'#')
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
        history.pushState(1,1,'#us')
      } else {
        $('#mainNav a[href="#products"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#us"]')
          .parent()
          .removeClass('active');
        history.pushState(1,1,'#product')
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
        history.pushState(1,1,'#jobs')
      } else {
        $('#mainNav a[href="#us"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#jobs"]')
          .parent()
          .removeClass('active');
        history.pushState(1,1,'#us')
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
        history.pushState(1,1,'#contact')
      } else {
        $('#mainNav a[href="#jobs"]')
          .parent()
          .addClass('active');
        $('#mainNav a[href="#contact"]')
          .parent()
          .removeClass('active');
        history.pushState(1,1,'#jobs')
      }
    },
  });
}
