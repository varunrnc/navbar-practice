(function ($) {
	"use strict";

	// Screen Size Counting
	let screenSize = window.innerWidth;
	window.addEventListener("resize", function (e) {
		screenSize = window.innerWidth;
	});

	$(document).ready(function () {
	


		$('.menu-toggle').on('click', function () {
			$('.overlay').toggleClass('active');
		});
		$('.overlay').on('click', function () {
			$('.overlay').removeClass('active');
			$(".navbar-toggler").click();
		});

		// Mobile Submenu
		let primaryMenuLink = $(".primary-menu__link");
		let primaryMenu = $(".has-sub > .primary-menu__link");
		let primarySubMenu = $(".primary-menu__sub");
		if (primaryMenu || primarySubMenu || primaryMenuLink) {
			primaryMenu.on("click", function (e) {
				e.preventDefault();
				if (parseInt(screenSize) < parseInt(992)) {
					$(this).toggleClass("active").siblings(primarySubMenu).slideToggle();
				}
				if (parseInt(screenSize) >= parseInt(992)) {
					e.stopPropagation();
					$(this)
						.toggleClass("active")
						.parent()
						.siblings()
						.children(".primary-menu__link")
						.removeClass("active");
				}
			});
			primarySubMenu.each(function () {
				if (parseInt(screenSize) >= parseInt(992)) {
					$(this).on("click", function (e) {
						e.stopPropagation();
					});
				}
			});
			$(document).on("click", function () {
				if (parseInt(screenSize) >= parseInt(992)) {
					primaryMenuLink.removeClass("active");
				}
			});
		}

		// mega menu js 




		
	});

	



	
})(jQuery);