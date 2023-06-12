$(function(){
  
  $(".menu a, .logo, .footer__logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $('.blog-slider__inner').slick({
    dots: true,
    arrows: false
  });
  
  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.gallery__content');

});