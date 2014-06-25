head.ready(function() {

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

});