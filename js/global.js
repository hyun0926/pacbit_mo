$(function() {
  // jquery ui 아코디언
  $(".accordion_ui").accordion({
    heightStyle: "content",
    collapsible: true
  });
  $('.accordion_ui input[type="checkbox"]').click(function(e) {
    e.stopPropagation();
  });
  // tab 메뉴
  $('.tabList a').click(function(e){
    e.preventDefault();
    $('.tabList a, .tabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });
	$('.subTabList a').click(function(e){
    e.preventDefault();
    $('.subTabList a, .subTabCon').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });

	// 구매/판매 tab
	$('.tradeTap a').click(function(e){
    e.preventDefault();
    $('.tradeTap a, .tradeTab-con').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });

	$('.tradeTap1 a').click(function(e){
    e.preventDefault();
    $('.tradeTab1 a, .tradeTab1-con').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });

	$('.tradeTap2 a').click(function(e){
    e.preventDefault();
    $('.tradeTab2 a, .tradeTab2-con').removeClass('current');
    $(this).add($($(this).attr('href'))).addClass('current');
  });


  // popup num1
  $('.btnPopNum1').click(function(){
    $('.popNum1').show();
  })
  $('.popNum1 .btn_popClose').click(function(){
    $('.popNum1').fadeOut();
  });
  // popup num2
  $('.btnPopNum2').click(function(){
    $('.popNum2').show();
  })
  $('.popNum2 .btn_popClose').click(function(){
    $('.popNum2').fadeOut();
  });
  // popup num3
  $('.btnPopNum3').click(function(){
    $('.popNum3').show();
  })
  $('.popNum3 .btn_popClose').click(function(){
    $('.popNum3').fadeOut();
  });
  // popup num4
  $('.btnPopNum4').click(function(){
    $('.popNum4').show();
  })
  $('.popNum4 .btn_popClose').click(function(){
    $('.popNum4').fadeOut();
  });
  // popup num5
  $('.btnPopNum5').click(function(){
    $('.popNum5').show();
  })
  $('.popNum5 .btn_popClose').click(function(){
    $('.popNum5').fadeOut();
  });
  // popup num6
  $('.btnPopNum6').click(function(){
    $('.popNum6').show();
  })
  $('.popNum6 .btn_popClose').click(function(){
    $('.popNum6').fadeOut();
  });
  // popup num7
  $('.btnPopNum7').click(function(){
    $('.popNum7').show();
  })
  $('.popNum7 .btn_popClose').click(function(){
    $('.popNum7').fadeOut();
  });
	// 구매/판매
  $('.btnPopTrade').click(function(){
    $('.popTrade').show();
  })
  $('.btn_popTradeClose').click(function(){
    $('.popTrade').hide();
  });
  // 메인 팝업
  $('.btn_popClose').click(function(){
    $('.mainPopup').fadeOut();
  });
  // toggleswitch
  $('.toggleswitch').toggleSwitch();
  // 전자지갑
  $('a.addM').click(function(){
		$('.ewCode').show();
    $(this).hide();
	})
	// 슬라이드 메뉴
	$(function() {
		var swiper = new Swiper('.slide_mainMenu', {
			slidesPerView: 3,
			spaceBetween: 0,
			// init: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				1024: {
					slidesPerView: 4,
					spaceBetween: 00,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 4,
					spaceBetween: 0,
				},
				320: {
					slidesPerView: 4,
					spaceBetween: 0,
				}
			}
		});
	});
	$(function() {
		var swiper = new Swiper('.slide_subMenu', {
			slidesPerView: 4,
			spaceBetween: 0,
			// init: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			breakpoints: {
				1920: {
					slidesPerView: 8,
					spaceBetween: 00,
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 0,
				},
				640: {
					slidesPerView: 5,
					spaceBetween: 0,
				},
				320: {
					slidesPerView: 4,
					spaceBetween: 0,
				}
			}
		});
	});
  // floating menu
  $('.floating a').click(function(){
    $('.popup_quick').toggle();
    $('.floating').addClass('current');
    setTimeout(function(){
      $('ul.quick_menu li').toggleClass('move');
    },100);
    setTimeout(function(){
      $('ul.quick_menu li span').fadeToggle();
    },500);
    if($('i',this).attr('class') == 'xi-plus'){
      $('i',this).removeClass('xi-plus').addClass('xi-minus');
      // $('.q1').animate({bottom:60});
      // $('.q2').animate({bottom:120});
      // $('.q3').animate({bottom:180});
      // $('.q4').animate({bottom:240});
    }else if($('i',this).attr('class') == 'xi-minus'){
      $('i',this).removeClass('xi-minus').addClass('xi-plus');
    }
  })

  // slidemnue toggle menu
  $('ul.menubox li').click(function(){
    $('a.toggle',this).toggleClass('current');
    $('ul.toggle_menu',this).slideToggle();
  })

	$(function($){
		var $columns_number = $('#tableCross .cover').find('.normal_type02').length;

		$('.cover').on('scroll', function(){ 
			$this = $(this);
			//hide the arrow on scrolling
			if( $this.scrollLeft() > 0 ) {
				$('.cd-scroll-right').addClass('moving');
				$('.cd-scroll-left').addClass('moving');
			} else{
				$('.cd-scroll-right').removeClass('moving');
				$('.cd-scroll-left').removeClass('moving');
			}
			//remove color gradient when table has scrolled to the end
			var total_table_width = parseInt($('.cd-table-wrapper').css('width').replace('px', '')),
				table_viewport = parseInt($('#tableCross').css('width').replace('px', ''));

			if( $this.scrollLeft() >= total_table_width - table_viewport - $columns_number) {
				$('#tableCross').addClass('table-end');
			} else {
				$('#tableCross').removeClass('table-end');
			}
		});
	});
	
	
});
