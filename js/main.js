$(function() {
	/* ------------------------------------------------------------------------ */
	/* FLEXSLIDER */
	/* ------------------------------------------------------------------------ */

	if ($('.flexslider').length) {
		$('.flexslider').flexslider({
			animation: "fade",
			directionNav: true,
			controlNav: false,
			pauseOnAction: true,
			pauseOnHover: true,
			direction: "horizontal",
			slideshowSpeed: 5500
		});
	}

	/* ------------------------------------------------------------------------ */
	/* TEAM THUMBS */
	/* ------------------------------------------------------------------------ */
	$('.team-thumb').hover(function() {
		$(this).find('img').fadeIn();
	}, function() {
		$(this).find('img').fadeOut();
	});
});
