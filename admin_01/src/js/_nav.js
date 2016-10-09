$(function() {
	if ($(".nav").length) {
		$(".submenu > a").on("click", function(e) {
			if ($(this).next(".submenu__list:visible").length) {
				$(this).next(".submenu__list").slideUp(250, function() {
					$(this).parent().removeClass("active");
				});
			} else {
				$(".submenu__list").slideUp(250, function() {
					$(this).parent().removeClass("active");
				});

				$(this).next(".submenu__list").slideDown(250, function() {
					$(this).parent().addClass("active");
				});
			}
			e.stopPropagation();
		});
	}
});

/*
$(function() {
	$(".navicon").on("click", function() {
		$(".content").toggleClass("content--open");
	});
});
*/

$(function() {
	if ($(".navicon").length) {
		var elem = $(".content");

		if (localStorage) {
			var toggle = localStorage.getItem("dp-navbar");

			toggle = toggle == "true";

			elem.toggleClass("content--open", toggle);

			$(".navicon").on("click", function(e) {
				e.preventDefault();
				toggle = !toggle;  

				elem.toggleClass("content--open", toggle);

				localStorage.setItem("dp-navbar", toggle);
			});
		}
		else
		{
			elem.addClass("content--open");
		}
	}
});
