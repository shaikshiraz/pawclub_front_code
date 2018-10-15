$(document).ready(function()
{
                // bath 
    $("#bath_1").click(function()
    {
       $("#bath").trigger("click");
    });
    
    $("#bath_2").click(function()
    {
       $("#bath").trigger("click");
    });
    
    $("#bath").change(function()
    {
       if($("#bath").is(":checked"))
       {
           $("#bath_1").hide();
           $("#bath_2").show();
           $("#bath").val("1");
       }
       else
       {
           $("#bath_1").show();
           $("#bath_2").hide();
           $("#bath").val("0");
       }
    });
    // ----------- hair-------------------
    $("#hair_1").click(function()
    {
       $("#hair").trigger("click");
    });
    
    $("#hair_2").click(function()
    {
       $("#hair").trigger("click");
    });
    
    $("#hair").change(function()
    {
       if($("#hair").is(":checked"))
       {
           $("#hair_1").hide();
           $("#hair_2").show();
           $("#hair").val("1");
       }
       else
       {
           $("#hair_1").show();
           $("#hair_2").hide();
           $("#hair").val("0");
       }
    });
// ---------nail-------------------
$("#nail_1").click(function()
{
   $("#nail").trigger("click");
});

$("#nail_2").click(function()
{
   $("#nail").trigger("click");
});

$("#nail").change(function()
{
   if($("#nail").is(":checked"))
   {
       $("#nail_1").hide();
       $("#nail_2").show();
       $("#nail").val("1");
   }
   else
   {
       $("#nail_1").show();
       $("#nail_2").hide();
       $("#nail").val("0");
   }
});
// -------------style-----------------
$("#style_1").click(function()
{
   $("#style").trigger("click");
});

$("#style_2").click(function()
{
   $("#style").trigger("click");
});

$("#style").change(function()
{
   if($("#style").is(":checked"))
   {
       $("#style_1").hide();
       $("#style_2").show();
       $("#style").val("1");
   }
   else
   {
       $("#style_1").show();
       $("#style_2").hide();
       $("#style").val("0");
   }
});
// --------------spa----------------
$("#other_1").click(function()
{
   $("#other").trigger("click");
});

$("#other_2").click(function()
{
   $("#other").trigger("click");
});

$("#other").change(function()
{
   if($("#other").is(":checked"))
   {
       $("#other_1").hide();
       $("#other_2").show();
       $("#other").val("1");
   }
   else
   {
       $("#other_1").show();
       $("#other_2").hide();
       $("#other").val("0");
   }
});
// ----------------------------------

// ----------------------------------------------
     $("#change_custum").change(function(){

            if($('#change_custum').is(':checked'))
            {
                $("#cust_change").show();
                $("#change_custum").val("1");
            }
            else{
                $("#cust_change").hide();y
                $("#change_custum").val("0");
            }
        });
        $("#change_blk11").change(function(){

            if($('#change_blk11').is(':checked'))
            {
                $("#blk11").show();
                $("#change_blk11").val("1");
            }
            else{
                $("#blk11").hide();
                $("#change_blk11").val("0");
            }
        });
        $("#change_custum1").change(function(){

            if($('#change_custum1').is(':checked'))
            {
                $("#cust_change2").show();
                $("#change_custum1").val("1");
            }
            else{
                $("#cust_change2").hide();y
                $("#change_custum1").val("0");
            }
        });

});       
