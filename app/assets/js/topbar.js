var $navbar = $('.top-bar');

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $navbar.outerHeight();
var mobileView = $(window).width() <= 1024;

$(window).scroll(function(event){
	didScroll = true;
});

$(window).resize(function () {
	mobileView = $(window).width() <= 1024;
});

setInterval(function() {
	if (didScroll && mobileView) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

	// Make sure they scroll more than delta
	if(Math.abs(lastScrollTop - st) <= delta)
		return;

	// If they scrolled down and are past the navbar, add class .nav-up.
	// This is necessary so you never see what is "behind" the navbar.
	if (st > lastScrollTop && st > navbarHeight){
		// Scroll Down
		$navbar.removeClass('nav-down').addClass('nav-up');
		$('#responsive-menu').css('display', 'none');
	} else {
		// Scroll Up
		if(st + $(window).height() < $(document).height()) {
			$navbar.removeClass('nav-up').addClass('nav-down');
			$('#responsive-menu').css('display', 'none');
		}
	}

	lastScrollTop = st;
}