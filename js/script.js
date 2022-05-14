/* ===================================================================

 * スマホ向けサブメニュー

=================================================================== */
$(function($){
	$('nav h3').hide();
	var windowWidth = $(window).width();

	function slideMenu() {
		if ($('#main').css('float') == 'none') {
			$('nav h3').show();
			$('nav ul').hide();
		}else {
			$('nav h3').hide();
			$('nav ul').show();
		}
	}

	$(window).on('load', function(){
		slideMenu();
	});

	$(window).on('resize', function(){
		var nowWidth = $(window).width();
		if(windowWidth != nowWidth) {
			slideMenu();
		}
	});

	$('nav h3').click(function(){
		$(this).next().slideToggle();
		$('#navBtnIcon').toggleClass('close');
	});
});
