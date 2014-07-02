$(document).ready(function() {

	// $("#prop").click(function() {
	// 		$.get("offers.html",function(data){
	// 				$("#proposal").append(data);
	// 		});
	// 		return false;
	// });

	$(".js-switch-list").on('click', function(){
		$('.js-switch-map').removeClass('is-active');
		$(this).addClass('is-active');
		$(".js-offers").fadeIn();
		$(".js-map").fadeOut();
		$(".ymap").fadeOut();
		// var map = new ymaps.Map('map');
		// map.destroy();
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

	$(function(){
		var bg_image = (Math.floor(Math.random() * 11))+ ".jpg";
		$('.bg_cover').css({'background-image': 'url(img/covers/bg' + bg_image + ')'});
	});

	$(".js-select select").on("change",function(){
		var	val = $(this).val();
		$(this).parent().find(".js-select-input").val(val);
		$(this).parent().find(".js-select-text").text(val);
	});

	$(function() {
		var sidebar_height = $('.l-sidebar').height();
		$('.l-main').css('min-height', sidebar_height);
	});

	// $(function() {
	// 	var sidebar_height = $('.l-sidebar').height();
	// 	$('.yandex-map').css('height', sidebar_height);
	// });

});