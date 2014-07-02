$(document).ready(function() {

	// $("#prop").click(function() {
	// 		$.get("offers.html",function(data){
	// 				$("#proposal").append(data);
	// 		});
	// 		return false;
	// });

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