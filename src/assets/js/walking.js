var countText_1=0;
 var countText_3=0;
$(document).ready (function()
{
    $("#app_4").click( function() {
              if(countText_1<5)
        $(".dog_walk").append('<div class="row" id="remove_row'+countText_1+'">\
        <div class=" col-md-12 input-group mb-3">\
        <input type="text" class="form-control" placeholder="select">\
        <div class="input-group-append">\
          <a class="btn btn-danger" href="javascript:void(0)" onclick="remove_row('+countText_1+')">-</a>\
        </div>\
        </div>\</div>');  
          countText_1++;
      });
      $("#app_5").click( function() {
                if(countText_3<5)
        $(".dog_walk1").append('<div class="row" id="remove_row1'+countText_3+'">\
        <div class=" col-md-12 input-group mb-3">\
        <input type="text" class="form-control" placeholder="Mention breed name">\
        <div class="input-group-append">\
          <a class="btn btn-danger" href="javascript:void(0)" onclick="remove_row1('+countText_3+')">-</a>\
        </div>\
        </div>\</div>');  
          countText_3++;
      });
      $(document).ready(function()
      {
      $("#walking_blk5").change(function(){
      
          if($('#walking_blk5').is(':checked'))
          {
              $("#walk").show();
              $("#walking_blk5").val("1");
          }
          else{
              $("#walk").hide();
              $("#walking_blk5").val("0");
          }
      });
      
      });
})

function remove_row(countVal){
    $('#remove_row'+countVal).remove();
    //         alert();
    }
    function remove_row1(countVal){
        $('#remove_row1'+countVal).remove();
        //         alert();
        }