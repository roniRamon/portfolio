/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

	};

	skel.breakpoints({
		xlarge: '(max-width: 1800px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$footer = $('#footer'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch?
			if (skel.vars.mobile) {

				// Turn on touch mode.
					$body.addClass('is-touch');

				// Height fix (mostly for iOS).
					window.setTimeout(function() {
						$window.scrollTop($window.scrollTop() + 1);
					}, 0);

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Footer.
			skel.on('+medium', function() {
				$footer.insertAfter($main);
			});

			skel.on('-medium !medium', function() {
				$footer.appendTo($header);
			});

		// Header.

			// Parallax background.

				// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
					if (skel.vars.browser == 'ie'
					||	skel.vars.mobile)
						settings.parallax = false;

				if (settings.parallax) {

					skel.on('change', function() {

						if (skel.breakpoint('medium').active) {

							$window.off('scroll.strata_parallax');
							$header.css('background-position', 'top left, center center');

						}
						else {

							$header.css('background-position', 'left 0px');

							$window.on('scroll.strata_parallax', function() {
								$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
							});

						}

					});

					$window.on('load', function() {
						$window.triggerHandler('scroll');
					});

				}

		// Main Sections: Two.

			// Lightbox gallery.
				$window.on('load', function() {

					$('#two').poptrox({
						caption: function($a) { return $a.next('h3').text(); },
						overlayColor: '#2c2c2c',
						overlayOpacity: 0.85,
						popupCloserText: '',
						popupLoaderText: '',
						selector: '.work-item a.image',
						usePopupCaption: true,
						usePopupDefaultStyling: false,
						usePopupEasyClose: false,
						usePopupNav: true,
						windowMargin: (skel.breakpoint('small').active ? 0 : 50)
					});

				});

			// $window.on('load', function() {
				let artical1 = $('.article1').height();
				$('.article2').height(artical1);

				//1: margin-top: 25px; ( 1330 - 1680 )
				//2: margin-top: 50px; ( 1100 - 1330 )
				//3: margin-top: 84px; ( 1050 - 1100 )
				//4: margin-top: 109px; ( 1030 - 1050 )
				//5: margin-top: 84px; ( 980 - 1030 )
				//6: margin-top: 26px; ( 965 - 980 )
				//7: margin-top: 55px; ( 866  - 965 )
				//8: margin-top: 30px; ( 850  - 866 )
				//8: margin-top: 54px; ( 800 - 850 )
				//9: margin-top: 85px; ( 766 - 800 )
				//10: margin-top: 110px; ( 750 - 766 )
				//11: margin-top: 85px; ( 738 - 750 )
				//12: margin-top: 54px; ( 710 - 738 )
				//13: margin-top: 85px; ( 677 - 710 )
				//14: margin-top: 110px; ( 660 - 677 )
				//15: margin-top: 85px; ( 630 - 660 )
				//16: margin-top: 60px; ( 607 - 630 )
				//17: margin-top: 85px; ( - 607 )
			// });

			$( "#contact" ).click(function( event ) {
			  event.preventDefault();
				let name = $('#name').val();
				let email = $('#email').val();
				let message = $('#message').val();

				// console.log(name);
				// console.log(email);
				// console.log(message);


			});

	});

})(jQuery);
