$(document).ready(function(){
    $("#transport_blk1").change(function(){

        if($('#transport_blk1').is(':checked'))
        {
            $("#transport").show();
            $("#transport_blk1").val("1");
        }
        else{
            $("#transport").hide();
            $("#transport_blk1").val("0");
        }
    });
});