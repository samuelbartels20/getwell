jQuery('.mobile-nav ').click(function () {
	jQuery('body').toggleClass('open-menu');
});
jQuery('.closeIcn > span, .overlay ').click(function () {
	jQuery('body').removeClass('open-menu');
});

	//for header sticky start
	jQuery(window).scroll(function(){
		var scroll = jQuery(window).scrollTop();
		if (scroll >= 100) {
			jQuery("body").addClass("sticky");
		}
		else{ 
			jQuery("body").removeClass("sticky");
		}
	});
	//for header sticky END	


(function($) {
  
  "use strict";  
	
  $(window).on('load', function() {

  
   /*        Banner Slider Carousel 
    ==========================================*/ 
    var owl = $('.hero-slider');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1000,
        loop: true,
        items: 1,
        nav: false,
        dots: false,
        navText: ['<span class="sld_prev"><i class="lni lni-chevron-left"></i></span>','<span class="sld_next"><i class="lni lni-chevron-right"></i></span>']
    });

    var owl = $('.prod-slider');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        loop: true,
        margin: 8,
        dots: false,
        nav: true,
        navText: ['<span class="sld_prev"><i class="lni lni-chevron-left"></i></span>','<span class="sld_next"><i class="lni lni-chevron-right"></i></span>'],
		 responsive: {
			0: {
			  items: 1
			},

			479: {
			  items: 2
			},

			768: {
			  items: 3
			},
			992: {
			  items: 4
			},
			1200: {
			  items: 5
			}
		  }
    });

    //product slider
    var owl = $('.prod-detSlider');
    owl.owlCarousel({
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        loop: true,
        margin: 8,
        dots: false,
        thumbs: true,
        thumbsPrerendered: true,
        nav: true,
		touchDrag  : true,
        mouseDrag  : true,
        navText: ['<span class="sld_prev"><i class="lni lni-chevron-left"></i></span>','<span class="sld_next"><i class="lni lni-chevron-right"></i></span>'],
		responsive: {
			0: {
			  items: 1
			},

			479: {
			  items: 1
			},

			768: {
			  items: 1
			},
			992: {
			  items: 1
			},
			1200: {
			  items: 1
			}
		  }
    });

  /*Page Loader active
  ==========================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });
 
    /*  Prod quantity
    ========================================================*/
    $(document).ready(function() {
      $('.minus').click(function () {
        var obj = $(this).parent().find('input');
		var $input = obj[1];

		var count = parseInt($input.value) - 1;
        count = count < 1 ? 1 : count;
        $input.value = count;
        $($input).change();
        return false;
      });
      $('.plus').click(function () {
        var obj = $(this).parent().find('input');
		var $input = obj[1];
        $input.value = parseInt($input.value) + 1;
		$($input).change();
        return false;
      });
    });
  
    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });

	$(document).ready(function(){
		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	});
}(jQuery));

