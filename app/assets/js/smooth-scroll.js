import $ from 'jquery';

$('a[href*="#"]')
// Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      || location.hostname === this.hostname) {

      let target = this.hash;
      let $target = $(target);
      $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        $('html,body')
          .animate({
            scrollTop: $target.offset().top - 60,
          }, 1000, () => {
            target = target.replace(/^#/, '');
            let fx;
            const node = $('#' + target);
            if (node.length) {
              node.attr('id', '');
              fx = $('<div></div>')
                .css({
                  position: 'absolute',
                  visibility: 'hidden',
                  top: $(document)
                    .scrollTop() + 'px',
                })
                .attr('id', target)
                .appendTo(document.body);
            }
            window.location.hash = target;
            if (node.length) {
              fx.remove();
              node.attr('id', target);
            }

          });
        return false;
      }
    }
  });
