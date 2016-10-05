$(function() {
	var lnk, d, x, y;

	$("a").each(function() {
		$(this).addClass("ripple");
	});

	$(".ripple").on("click", function(e) {
		if ($(this).find(".lnk").length === 0) {
			$(this).prepend("<span class=\"lnk\"></span>");
		}

		lnk = $(this).find(".lnk").removeClass("animate");

		if (!lnk.height() && !lnk.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());

			lnk.css({
				height: d,
				width: d
			});
		}

		x = e.pageX - $(this).offset().left - lnk.width() / 2;
		y = e.pageY - $(this).offset().top - lnk.height() / 2;

		lnk.css({
			top: y + "px",
			left: x + "px"
		}).addClass("animate");
	});
});
