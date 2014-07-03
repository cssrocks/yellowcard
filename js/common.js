$(document).ready(function() {

	// $("#prop").click(function() {
	// 		$.get("offers.html",function(data){
	// 				$("#proposal").append(data);
	// 		});
	// 		return false;
	// });

	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").hide();
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").fadeOut(200);
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$("."+popup).parent().fadeIn(200);
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").fadeOut(200);
			$("body").removeClass("has-open-popup")
			return false;
		});
		$(".js-popup").on("click", function(event){
			event.stopPropagation();
		});
	} modals();

	function tabs() {
		$(".js-tab-nav").each(function(){
			var tab_link = $(this).children().find("a");
			var tab_cont = $(this).parents(".js-tabs").find(".tabs__pane");
			tab_link.bind("click", function() {
				var index = $(this).attr("href");
						tab_link.removeClass("is-active");
						tab_link.parent().removeClass("is-active");
				$(this).addClass("is-active");
				$(this).parent().addClass("is-active");
				tab_cont.removeClass('is-active');
				$(index).addClass('is-active');
				return false;
			});
		});
	} tabs();

	$(function(){
		$(' .js-spinner ').on('click', function(){
			$(this).toggleClass('is-loading');
			return false;
		});
	});

	$(function(){
		$(".js-switch-list").on('click', function(){
			$('.js-switch-map').removeClass('is-active');
			$(this).addClass('is-active');
			$(".js-offers").fadeIn();
			$(".js-map").fadeOut();
			$(".ymap").fadeOut();
			return false;
		});
		$(".js-switch-map").on('click', function(){
			$('.js-switch-list').removeClass('is-active');
			$(this).addClass('is-active');
			$(".js-map").css('height', '910').fadeIn();
			init();
			$(".js-offers").fadeOut();
			return false;
		});
	});

	$(function(){
		var bg_image = (Math.floor(Math.random() * 11))+ ".jpg";
		$('.bg_cover').css({'background-image': 'url(img/covers/bg' + bg_image + ')'});
	});

	$(function(){
		$(".js-select select").on("change",function(){
			var	val = $(this).val();
			$(this).parent().find(".js-select-input").val(val);
			$(this).parent().find(".js-select-text").text(val);
		});
	});

	$(function() {
		var sidebar_height = $('.l-sidebar').height();
		$('.l-main').css('min-height', sidebar_height);
	});

});