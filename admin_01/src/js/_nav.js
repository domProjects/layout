$(".sub-menu > a").click(function(e) {
	$(".nav ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(), e.stopPropagation();
})
