(function ($) {
	$(document).foundation();

	// Team.gl sign-up validation and ajax
	var $teamSignUp = $('#signUp');
	$('#team-sign-up-form').on('submit', function (e) {
		e.preventDefault();
		$(this).ajaxSubmit({
			beforeSubmit: function (arr, $form) {
				if (!validateEmail(arr[0].value)) {
					return false;
				}
			},
			success: function () {
				$teamSignUp.find('.form-section').addClass('hide');
				$teamSignUp.find('.thank-your-section').removeClass('hide');
			},
			error: function () {
				alert('We apologize. An error occurred.');
			}

		});
	});

	// Contact form validation and ajax
	var $getInTouch = $('#getInTouch');
	$('#contact-form').on('submit', function (e) {
		e.preventDefault();
		$(this).ajaxSubmit({
			beforeSubmit: function (arr, $form) {
				if (!validateEmail(arr[1].value)) {
					return false;
				}
			},
			success: function () {
				$getInTouch.find('form').addClass('hide');
				$getInTouch.find('.thank-you-section').removeClass('hide');
			},
			error: function () {
				alert('We apologize. An error occurred.');
			}

		});
	});

	// Job forms
	$('form.job-form').on('submit', function (e) {
		var $form = $(this);
		e.preventDefault();
		$(this).ajaxSubmit({
			beforeSubmit: function (arr, $form) {
				if (!validateEmail(arr[1].value)) {
					return false;
				}
			},
			success: function () {
				$form.addClass('hide');
				$form.next().removeClass('hide');
				fbq('track', 'Lead');
			},
			error: function () {
				alert('We apologize. An error occurred.');
			}

		});
	});

	// Hash tag functionality
	function offsetAnchor() {
		if (location.hash.length !== 0) {
			window.scrollTo(window.scrollX, window.scrollY - 100);

			var $element = $(location.hash);
			if ($element.hasClass('accordion-item')) {
				$element.find('.accordion-title').trigger('click');
			}
		}
	}

	window.setTimeout(offsetAnchor, 10);

	// Intro video
	$('#intro-video')[0].play();
})(jQuery);


/**
 * @param {String} email
 * @returns {boolean}
 */
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}