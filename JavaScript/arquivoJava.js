$(document).ready(function(){
	$('#menu ul li').prepend('<span></span>');
		$('#menu ul li').each(function(){
			var texto= $(this).find('a').text();
			$(this).find('span').text(texto);
			$('a').css('color','#4C3EC7');
		});
		$('#menu ul li').hover(function(){
			$(this).find('span').stop().animate({
				marginLeft:"-140px"
			},400);
		},function(){
			$(this).find('span').stop().animate({
				marginLeft:"0px"
			},300);
		});
});