$( document ).ready(function() {

	$slcount = $("#slider-one .sl").length;
	$elmsl= $("#slider-one .floater").html();
	switch ($slcount) { 
		case 1: 
			for(slc = 1; slc <= 9; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;
		case 2: 
			for(slc = 1; slc <= 4; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 3: 
			for(slc = 1; slc <= 3; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 4: 
			for(slc = 1; slc <= 1; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 5: 
			for(slc = 1; slc <= 1; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 6: 
			for(slc = 1; slc <= 1; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 7: 
			for(slc = 1; slc <= 1; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		case 8: 
			for(slc = 1; slc <= 1; slc++){
				$("#slider-one .floater").append($elmsl);
			}
			break;	
		default:
			//alert('Nobody Wins!');
	}
	$("#slider-one .floater .sl").removeClass("current");
	$("#slider-one .floater .sl:nth-child(1)").addClass("current");

	imghadjuster();
	$fh = $( "#slider-one .floater .sl.current" ).height() + 10;
	$( ".floater" ).height($fh);

	$( ".right-scroller" ).click(function() {
		$parent = $(".floater");
		$this = $parent.find('div.current');
		$this.children().addClass("slideOutDown"); // same one
		$this.next().children().addClass("slidedownleft"); // second one 
		$this.next().next().children().addClass("slideOutLeft"); // third one
		$this.next().next().next().next().children().addClass("slideOutUp"); // fifth one
		$this.next().next().next().children().addClass("slideOutRight"); // fourth one
		$('.floater div:nth-child(6)').insertAfter('.floater div:nth-child(8)'); // sixth one
		$('.floater div:nth-child(8) img').addClass('slideOutUp'); // eightth one
		setTimeout( function(){
			$this.removeClass("current");
			$this.children().removeClass("slideOutDown");
			$this.next().children().removeClass("slidedownleft");
			$this.next().next().children().removeClass("slideOutLeft");
			$this.next().next().next().next().children().removeClass("slideOutUp");
			$this.next().next().next().children().removeClass("slideOutRight");
			$('.floater div:nth-child(8) img').removeClass('slideOutUp');
			$('.floater div:nth-child(5)').insertAfter('.floater div:nth-child(3)');
			$('.floater div:nth-child(8)').insertAfter('.floater div:nth-child(4)');
			$next = $this.next('div');
			$parent.append($this);
			$next.addClass('current');
			imghadjuster();
			$fh = $( "#slider-one .floater .sl.current" ).height() + 10;
			$( ".floater" ).height($fh);
		}  , 1000 );
	});

	$( ".left-scroller" ).click(function() {
		$parent = $(".floater");
		$this = $parent.find('div.current');
		$this.removeClass("current");
		$last = $parent.find('div.sl:last-child');
		$parent.prepend($last);
		$last.addClass("current");
		imghadjuster();
		$fh = $( "#slider-one .floater .sl.current" ).height() + 10;
		$( ".floater" ).height($fh);
		$("#slider-one .sl img").addClass("fadeIn");
		setTimeout( function(){
			$("#slider-one .sl img").removeClass("fadeIn");
		}  , 1000 );
	});
	$slone = "nothovered";
	$("#slider-one").mouseover(function(){
	    $slone = "hovered";
	});
	$("#slider-one").mouseout(function(){
	    $slone = "nothovered";
	});


	// window.setInterval(function(){
	// 	if ($slone == "nothovered") {
	// 		$( ".right-scroller" ).click();
	// 	}
	// }, 5000);

});


function imghadjuster() {
	$slimagewidth = $("#slider-one .floater .sl:nth-child(3) img").width();
	$("#slider-one .floater .sl img").height($slimagewidth);
	$slimagewidthcurrent = $("#slider-one .floater .sl.current img").width();
	$("#slider-one .floater .sl:nth-child(1) img").height($slimagewidthcurrent);
}