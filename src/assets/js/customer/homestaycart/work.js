$(document).ready(function() {

	//slider
	$("#owl-demo").owlCarousel({
		stopOnHover: true,
		nav: true,
		pagination: false,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet: [600,2],
		itemsMobile : [400,1]
	});
	var owl = $("#owl-demo");
	$(".next").click(function(){
		$winwid = $(window).width();
		if ($winwid >= 992) {
			owl.trigger('owl.next');
		}
		else{owl.trigger('owl.prev');}
	});
	$(".prev").click(function(){
		$winwid = $(window).width();
		if ($winwid >= 992) {
			owl.trigger('owl.prev');
		}
		else{owl.trigger('owl.next');}
	});
	//slider over

});
//owl carousel over


	
/* date */

$(function () {

	/* Days to be disabled as in the array */
	disabledDays = ['10/17/2018', '10/18/2018', '11/2/2018', "12/11/2018"];
	function disableAllTheseDays(date) {
        var m = date.getMonth(), d = date.getDate(), y = date.getFullYear();
        for (i = 0; i < disabledDays.length; i++) {
            if($.inArray((m+1) + '/' + d + '/' + y,disabledDays) != -1) {
                return [false];
            }
        }
        return [true];
    }
    /* Days to be disabled as in the array over */


	$( "#date1" ).datepicker();
	$( "#date2" ).datepicker();

	serverdate = $("#serverdate").text();

	/* first-load data */
	$("#startdate").val(serverdate);
	$("#enddate").val(serverdate);
	$(".data-fetch").attr("data-sdate", serverdate);
	$(".data-fetch").attr("data-edate", serverdate);
	$(".data-fetch").attr("data-days", 1);
	$(".data-fetch").attr("data-total", 0);
	$(".data-fetch").attr("data-qty", 1);
	$(".data-fetch").attr("data-selected", "not-selected");
	/* first-load data over */


	/* date #startdate fn */
	$('#startdate').datepicker({
		defaultDate: serverdate,
	    dateFormat: 'dd/mm/yy',
	    minDate: serverdate,
	    maxDate: '+2M',
	    beforeShowDay: disableAllTheseDays,
	    onSelect: function (dateText, inst) {
			seconddate = $.datepicker.parseDate('dd/mm/yy', dateText);
			$( "#enddate" ).datepicker( "option", "minDate", seconddate );
			$( "#enddate" ).datepicker( "option", "defaultDate", seconddate );

			var calcstartdate = $('#startdate').datepicker('getDate');
			var calcenddate   = $('#enddate').datepicker('getDate');
			var calcedtotaldays = (calcenddate - calcstartdate)/1000/60/60/24;
			calcedtotaldays = calcedtotaldays + 1;

			$stxtval = $("#startdate").val();
			$etxtval = $("#enddate").val();

			daysnotdisabled(calcstartdate, calcenddate);
			betweenselectedstring = betweenselected.join(', ');

			vavaildays = calcedtotaldays - betweenselected.length;

			if (betweenselected.length > 0) {
				$("#msg").html('<div class="alert alert-danger"><strong>Warning!</strong> '+betweenselectedstring+' vendor is not available <strong>'+betweenselected.length+'</strong> date(s). So we have reduced & calculated day(s) as <strong>'+vavaildays+'</strong> from <strong>'+calcedtotaldays+'</strong>. for more check Availability calendar</div>');
			}
			else{$("#msg").html("");}

			$(".days").text(vavaildays);
			$(".costperday-days").text(vavaildays);
			$(".data-fetch").attr("data-days", vavaildays);
			
			$(".data-fetch").attr("data-sdate", $stxtval);
			$(".data-fetch").attr("data-edate", $etxtval);
			rowprice();
			grandsub();
        }
	});
	/* date #startdate fn over */




	/* date #enddate fn */
	$( "#enddate" ).datepicker({
		defaultDate: serverdate,
		dateFormat: 'dd/mm/yy',
		minDate: serverdate,
	    maxDate: '+2M',
	    beforeShowDay: disableAllTheseDays,
		onSelect: function (dateText, inst) {
			var calcstartdate = $('#startdate').datepicker('getDate');
			var calcenddate   = $('#enddate').datepicker('getDate');
			var calcedtotaldays = (calcenddate - calcstartdate)/1000/60/60/24;
			calcedtotaldays = calcedtotaldays + 1;

			$stxtval = $("#startdate").val();
			$etxtval = $("#enddate").val();

			daysnotdisabled(calcstartdate, calcenddate);
			betweenselectedstring = betweenselected.join(', ');

			vavaildays = calcedtotaldays - betweenselected.length;

			if (betweenselected.length > 0) {
				$("#msg").html('<div class="alert alert-danger"><strong>Warning!</strong> '+betweenselectedstring+' vendor is not available <strong>'+betweenselected.length+'</strong> date(s). So we have reduced & calculated day(s) as <strong>'+vavaildays+'</strong> from <strong>'+calcedtotaldays+'</strong>. for more check Availability calendar</div>');
			}
			else{$("#msg").html("");}

			$(".days").text(vavaildays);
			$(".costperday-days").text(vavaildays);
			$(".data-fetch").attr("data-days", vavaildays);
			
			$(".data-fetch").attr("data-sdate", $stxtval);
			$(".data-fetch").attr("data-edate", $etxtval);
			rowprice();
			grandsub();
		}
	});
	/* date #enddate fn over*/

});

/* filter available days */
function daysnotdisabled(st, en){
    var currentDate = new Date(st);
    between = [];
    betweenselected= [];

	while (currentDate <= en) {
		var mmc = currentDate.getMonth(), ddc = currentDate.getDate(), yyc = currentDate.getFullYear();
		var cmdy= (mmc+1)+"/"+ddc+"/"+yyc;
        between.push(cmdy);

        if($.inArray(cmdy,disabledDays) != -1) {
            betweenselected.push(ddc+"/"+(mmc+1)+"/"+yyc);
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    betweenselectedlength = betweenselected.length;
}
/* filter available days over */

/* date Sub total fn  */
function subtotal() {
	$tableslength = $('.pricetable').length;
	for ($i = 1; $i <= $tableslength; $i++) {
		$selectedlength = $('#pricetable'+$i+' div[data-selected="selected"]').length;
		$subpricetmp = 0;
		$subprice = 0;
		$("#pricetable"+$i+' div[data-selected="selected"]').each(function(){
			$subpricetmp = $(this).attr("data-total");
			$subpricetmp = parseInt($subpricetmp);
			$subprice = $subprice + $subpricetmp;
		});
		$("#subtotal-dnone-"+$i).attr("data-stotal", $subprice);
		($subprice === 0) ? $('#pricetable'+$i+' .subtotal').text("00.00"):$('#pricetable'+$i+' .subtotal').text($subprice+".00");
	}
}
/* date Sub total fn over */

/* date Grand total fn  */
function grandtotal() {
	$subtotallength = $('.subtotal-dnone').length;
	$gtotaltmp = 0;
	$gtotalperm = 0;
	for ($i = 1; $i <= $subtotallength; $i++) {
		$gtotaltmp = $("#subtotal-dnone-"+$i).attr("data-stotal");
		$gtotaltmp = parseInt($gtotaltmp);
		$gtotalperm = $gtotalperm + $gtotaltmp;
	}
	$("#grand-total-dnone").attr("data-gtotal", $gtotalperm);
	($gtotalperm === 0)? $("#grand-total-displayed span").text("00.00"):$("#grand-total-displayed span").text($gtotalperm+".00");
}
/* date Grand total fn over */


/* date Sub+Grand total fn */
function grandsub() {
	subtotal();
	grandtotal();
	carthide();
}
/* date Sub total fn over */


/* checkbox fn */
$( ".selectorcheck" ).click(function() {
	if($(this).prop("checked") == true){
		$(this).parent().parent().find(".data-fetch").attr("data-selected","selected");
	}
	else if($(this).prop("checked") == false){
		$(this).parent().parent().find(".data-fetch").attr("data-selected","not-selected");
	}
	rowprice();
	grandsub();
});
/* checkbox fn over */


/* calc prise row-wise fn */
function rowprice() {
	$tableslength = $('.pricetable').length;
	for ($i = 1; $i <= $tableslength; $i++) {
		$selectedlength = $('#pricetable'+$i+' div.data-fetch').length;
		$('#pricetable'+$i+' div.data-fetch').each(function(){
			$rprice = $(this).attr("data-price");
			$rprice = parseInt($rprice);
			$rdays = $(this).attr("data-days");
			$rdays = parseInt($rdays);
			$rqty = $(this).attr("data-qty");
			$rqty = parseInt($rqty);
			$rdq = $rdays * $rqty;
			$rtotal = $rprice * $rdq;
			$(this).attr("data-total", $rtotal);
			$(this).parent().find(".costperday-total").text($rtotal);
		});
	}
}
/* calc prise row-wise fn over */


$(".breedname").change(function() {
	qtychanger = $(this).parent().parent().find(".quantity select");
	selectorchange(this);
	qtychange(qtychanger);
	rowprice();
	grandsub();
});

function selectorchange(that) {
	$bselectorval = $(that).val(); //all selected value of this into array
	$bselectorvallength = $bselectorval.length;

	$bselectorvalstring = $bselectorval.join(', ');
	$(that).parent().parent().find(".data-fetch").attr("data-breed", $bselectorvalstring); // store value to data-breed
	
	ii=0;
	$bselarr1 = [];
	$(that).children('option').each( function() {
		$bselarr1[ii++] = $(this).text(); //all values into array
	});
	if($bselectorvallength == 0){
		$(that).parent().parent().find(".quantity").html('<div class="quantity-set not-setted animated shake"><select type="number" name="" class="w-75 py-0 fz-9"><option value="1">1</option></select><div class="w-25 qn-wrapper"><div class="qn"><h2 class="qn-info not-selected ">Select one breed</h2></div></div></div>');
	}
	else {
		$(that).parent().parent().find(".not-setted").remove(); //removing if not-selected is there

		for ($j = 0; $j < $bselectorvallength; $j++) { //selected removing from all values
			$nowbselectorval = $bselectorval[$j];
			$bselarr1 = jQuery.grep($bselarr1, function(value) {
			  return value != $nowbselectorval;
			});
		}
		if($bselarr1.length > 0){ //remove non-selected qty from qty if setted
			for (var k = 0; k < $bselarr1.length; k++) {
				$nowbselarr1 = $bselarr1[k];
				$(that).parent().parent().find(".setted[data-selectedbname='"+$nowbselarr1+"']").remove();
			}
		}
		for (var l = 0; l < $bselectorvallength; l++) {
			$nowbselectorval = $bselectorval[l];
			$avail = $(that).parent().parent().find(".setted[data-selectedbname='"+$nowbselectorval+"']").length;
			if ($avail === 0) {
				$inserthtml = '<div class="quantity-set setted animated flash" data-selectedbname="'+$nowbselectorval+'"><select type="number" name="" class="w-75 py-0 fz-9"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option></select><div class="w-25 qn-wrapper"><div class="qn"><h2 class="qn-info not-selected ">'+$nowbselectorval+'</h2></div></div></div>';
				$(that).parent().parent().find(".quantity").append($inserthtml);
			}
		}
	}
}


$(".quantity").on("change", "select", function(){
    qtychange(this);
	rowprice();
	grandsub();
});


function qtychange(that) {
	$qtyrowwise = 0;
	$(that).parent().parent().find("select").each(function(){
		$qtyrowwisetmp = $(this).val();
		$qtyrowwisetmp = parseInt($qtyrowwisetmp);
		$qtyrowwise = $qtyrowwise + $qtyrowwisetmp;
	});
	$(that).parent().parent().parent().find(".data-fetch").attr("data-qty", $qtyrowwise);
	$(that).parent().parent().parent().find(".costperday-breed").text($qtyrowwise);
}

function carthide(){
	$grandvalue = $("#grand-total-dnone").attr("data-gtotal");
	$grandvalue = parseInt($grandvalue);
	if ($grandvalue === 0) {$("#submitprice-wrapper").hide();}
	else {$("#submitprice-wrapper").show();}
}




///////////////////////////////  ADD TO CART  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

$maxqty = $("#maxqty").text();
$maxqty = parseInt($maxqty);

$("#submitprice").click(function (e) {
	e.preventDefault();
	$pricetablelength=$('div.pricetable').length;
	mqtyobj = {};
	for ($i=1; $i <= $pricetablelength; $i++) {
		$selectedintablelength=$("#pricetable"+$i+" div[data-selected='selected']").length;
		if($selectedintablelength > 0){
			$maxq = 0;
			$tablename=$("#tphead-main-"+$i).attr("data-stype");
			$("#pricetable"+$i+' div[data-selected="selected"]').each(function(){
				$mxq=$(this).attr("data-qty");
				$mxq= parseInt($mxq);
				$maxq= $maxq + $mxq;
			});
			if ($maxq > $maxqty) {
				mqtyobj[$tablename]=$maxq;
			}
		}
	}
	//if mqtyobj have valuue show alert
	$objsize = Object.keys(mqtyobj).length;
	if ($objsize > 0) {
		overhtml = "maximum 10 quantity only you can select from each table. But your over selection from table(s) are\n";
		$.each( mqtyobj, function( key, value ) {
			overhtml += "in '" + key + "' Table,  quantity = " + value+ ".\n" ;
		});
		overhtml += "Decrease Quantity to "+$maxqty+" or less than "+$maxqty;
		alert(overhtml);
	}
	else {
		cart={};
		$vid=$('#vname').attr("data-vid");
		vendor={"vendorid":$vid};
		cart["vendor"] = vendor;
		$pricetablelength=$('div.pricetable').length;
		for ($i=1; $i <= $pricetablelength; $i++) {
			$selectedintablelength=$("#pricetable"+$i+" div[data-selected='selected']").length;
			if($selectedintablelength > 0){
				$tablename=$("#tphead-main-"+$i).attr("data-stype");
				$j=1;
				$tmptable={};
				$subcart={};
				$("#pricetable"+$i+' div[data-selected="selected"]').each(function(){
					$sdate=$(this).attr("data-sdate");
					$edate=$(this).attr("data-edate");
					$qty=$(this).attr("data-qty");
					$breedt=$(this).attr("data-btype");
					$breed=$(this).attr("data-breed");
					$total=$(this).attr("data-total");
					$tmptable={"sdate":$sdate,"edate":$edate,"qty":$qty,"breed-type":$breedt,"breed":$breed,"total":$total};
					$subcart["row"+$j] = $tmptable;
					$j++;
				});
				cart["pricetable"+$i] = $subcart;
			}
		}
		$gtotal=$('#grand-total-dnone').attr("data-gtotal");
		price={"gtotal":$gtotal};
		$subtotallength=$(".subtotal-dnone").length;
		$k=0;
		$(".subtotal-dnone").each(function(){
			$k++;
			$subtotal=$("#subtotal-dnone-"+$k).attr("data-stotal");
			if ($subtotal > 0) {price["subtotal"+$k] = $subtotal;}
		});
		cart["prices"] = price;
	}
});