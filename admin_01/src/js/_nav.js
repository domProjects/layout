$(function() {
	$(".sub-menu > a").on("click", function(e) {
		/*
		$(".nav ul ul").slideUp(), $(this).addClass("active"), $(this).next().is(":visible") || $(this).next().slideDown(), $(this).next().is(":hidden"), e.stopPropagation();
		*/
		$(".nav ul ul").slideUp(250), $(this).next().is(":visible") || $(this).next().slideDown(250), $(this).next().is(":hidden"), e.stopPropagation();
	});
});


$(function() {
	$(".navicon").on("click", function() {
		$(".content").toggleClass("content--open");
	});
});
