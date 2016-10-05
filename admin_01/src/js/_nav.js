$(function() {
	$(".sub-menu > a").on("click", function(e) {
		/*
		$(".nav ul ul").slideUp(), $(this).addClass("active"), $(this).next().is(":visible") || $(this).next().slideDown(), $(this).next().is(":hidden"), e.stopPropagation();
		*/
		$(".nav ul ul").slideUp(250), $(this).next().is(":visible") || $(this).next().slideDown(250), $(this).next().is(":hidden"), e.stopPropagation();
	});
});

/*
$(function() {
	$(".navicon").on("click", function() {
		$(".content").toggleClass("content--open");
	});
});
*/

$(function() {
	if ($('.navicon').length) {
		var elem = $('.content');

		if (localStorage) {
			var toggle = localStorage.getItem('dp-navbar');

			toggle = toggle == 'true';

			elem.toggleClass('content--open', toggle);

			$('.navicon').on('click', function(e) {
				e.preventDefault();
				toggle = !toggle;  

				elem.toggleClass('content--open', toggle);

				localStorage.setItem('dp-navbar', toggle);
			});
		}
		else
		{
			elem.addClass('content--open');
		}
	}
});
