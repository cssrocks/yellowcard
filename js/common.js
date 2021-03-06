$(document).ready(function() {

	$('.floatlabel').floatlabel({
		slideInput: false
	});

	$('.js-car-model').hide();
	$('.selectfloat').on('change', function(){
		$(this).find('.floatlabel').trigger('keyup');
		$('.js-car-model').slideDown();
	});


	function subscribeValidate() {
		$('.js-val-submit').attr('disabled',true);
		$('.js-val-input').keyup(function(){
			if($(this).val().length !== 0){
				$('.js-val-submit').attr('disabled', false);
			}
			else{
				$('.js-val-submit').attr('disabled',true);
			}
		});

		$('.js-val-submit').on('click', function() {
			if($(this).attr('disabled', false)){
				$(this).parents('.subscribe__step').hide();
				$('.js-subscribe-success').fadeIn('slow');
			}
		});

		$('.js-subscribe-btn').on('click', function() {
			$(this).parents('.subscribe__step').hide();
			$('.js-subscribe-success').fadeIn('slow');
			return false;
		});
	} subscribeValidate();

	function offerSlider() {
		var offers = $('.js-offer-slider'),
				offers_item = offers.find('.offer-slider__slide'),
				offers_item_val = offers_item.length,
				offers_counter = $('.js-offers-counter'),
				offers_counter_current = offers_counter.find('.offer-slider__counter-current'),
				offers_counter_all = offers_counter.find('.offer-slider__counter-all');

		$('.js-offer-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			// infinite: false,
			arrows: false,
			onInit: function() {
				offers_counter_all.html(offers_item_val);
			},
			onAfterChange: function(){
				offers_item_current = offers.find('.offer-slider__slide.slick-active').data('counter');
				offers_counter_current.html(offers_item_current);
			}
		});

		$('.offer-slider__next').click(function(){
			$(".js-offer-slider").slickNext();
		});
		$('.offer-slider__prev').click(function(){
			$(".js-offer-slider").slickPrev();
		});
	} offerSlider();

	function modals() {
		$(document).on("click", function(){
			$(".js-overlay").removeClass('is-open');
			$(".js-popup").removeClass('is-active');
			$("body").removeClass("has-open-popup");
		});
		$(".js-popup-link").on("click", function(event){
			$(".js-overlay").removeClass('is-open');
			$(".js-popup").addClass('is-active');
			// $(".js-popup").animate({ top: '0px' }, 1000, 'easeInOutQuart', function () {
			// 	$(this).show();
			// });
			var popup = $(this).attr("href");
			$("body").addClass("has-open-popup");
			$(".js-overlay").addClass('is-open');
			event.stopPropagation();
			return false;
		});
		$(".js-popup-close").on("click", function(){
			$(".js-overlay").removeClass('is-open');
			$('.js-popup').removeClass('is-active');
			// $(".js-popup").animate({ top: '-=100%' }, 1000, 'easeInOutQuart', function () {
			// 	$(this).hide();
			// });
			$("body").removeClass("has-open-popup");
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