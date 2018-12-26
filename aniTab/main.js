// JavaScript Document
 
(function(context){
	"use strict";
		
	var jQuery = context.jQuery;
	
	if(!jQuery){
		context.main = { loadHandle: context.setTimeout(this, 100) };
		return;
	}
	
	function logic(){
	
	
	var pane1 = $('.pane1').css('width'),
	
	width = pane1.replace('px',''),
	i = 0;
	
	$('ul li').each(function(){
		i++;
	});
	
	var val1 = width/i;
	$('.pane1').css('width',val1 + 'px');
	
	$('ul li:nth-child(1)').on('click', function(){
		
		$('.pane1').animate({
			left: '0px'
		});
	});
	
	$('ul li:nth-child(2)').on('click', function(){
		
		$('.pane1').animate({	left : val1 - 10 + 'px'
		});
	});
	$('ul li:nth-child(3)').on('click', function(){
		
		$('.pane1').animate({	left : val1 + val1 + 'px'
		});
	});
	
}
	
	if(document.readyState === 4) logic();
	else $(document).ready(logic);
	
})(this);

