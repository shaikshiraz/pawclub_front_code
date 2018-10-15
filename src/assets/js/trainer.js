$(document).ready(function(){
$("#change_train2").change(function(){

    if($('#change_train2').is(':checked'))
    {
        $("#Trainer").show();
        $("#change_train2").val("1");
    }
    else{
        $("#Trainer").hide();
        $("#change_train2").val("0");
    }
});
});