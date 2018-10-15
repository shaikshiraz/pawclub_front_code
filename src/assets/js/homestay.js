
 

 var countText=0;
 var TextCount=0;
 var add=0;
 var add_Field=0;
 var Count=0
var count=0;
//24 service------------------------------------------------>
 $(document).ready(function()
 {
                    $("#change_blk5").change(function(){

                         if($('#change_blk5').is(':checked'))
                         {
                             $("#blk5").show();
                             $("#change_blk5").val("1");
                         }
                         else{
                             $("#blk5").hide();
                             $("#change_blk5").val("0");
                         }
                     });
                     $("#change_blk1").change(function(){

                        if($('#change_blk1').is(':checked'))
                        {
                            $("#blk1").show();
                            $("#change_blk1").val("1");
                        }
                        else{
                            $("#blk1").hide();
                            $("#change_blk1").val("0");
                        }
                    });
                
                    $("#change_blk2").change(function(){
                
                        if($('#change_blk2').is(':checked'))
                        {
                            $("#blk2").show();
                            $("#change_blk2").val("1");
                        }
                        else{
                            $("#blk2").hide();
                            $("#change_blk2").val("0");
                        }
                    });
                
                $("#change_blk3").change(function(){
                
                    if($('#change_blk3').is(':checked'))
                    {
                        $("#blk3").show();
                        $("#change_blk3").val("1");
                    }
                    else{
                        $("#blk3").hide();
                        $("#change_blk3").val("0");
                    }
                });
                
                $("#change_blk4").change(function(){
                
                    if($('#change_blk4').is(':checked'))
                    {
                        $("#blk4").show();
                        $("#change_blk4").val("1");
                    }
                    else{
                        $("#blk4").hide();
                        $("#change_blk4").val("0");
                    }
                });
// homestay block first_row additional textbox inhouse pet--------------------------------
$("#first_row").click( function() {
    if(countText<5)
    {
        $(".inhouse").append('<div class="col-md-12" id="inremove_row1'+countText+'">\
        <div class="form-row">\
          <div class="col-md-2 col-lg-3">\
            <div class="">\
             <input type="text" placeholder="Type of pets" class="form-control"  ">\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-3">\
              <div class="">\
            <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
            </div>\
            <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_4" class="form-control" required>\
                    <option value="">Breed</option>\
                    <option>Small</option>\
                    <option>Medium</option>\
                    <option>Large</option>\
                    <option>Xtra Large</option>\
                  </select>\
                </div>\
              </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <select id="breed_gender_4" class="form-control" required>\
                <option value="">Gender</option>\
                <option>Male</option>\
                <option>Female</option>\
              </select>\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <div class=" input-group mb-3">\
                <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                <div class="input-group-append">\
                <a onclick="inremove_breed1('+countText+')" class="btn-danger btn-sm">-</a>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'); 
    } 
          countText++;
          return false
       });
    // Second row in homestay-------------------------------------
    
    $("#Second_row").click( function() {
        if(add_Field<5)
        {
            $(".cat_xyz").append('<div class="col-md-12" id="inremove_row2'+add_Field+'">\
            <div class="form-row">\
              <div class="col-md-2 col-lg-3">\
                <div class="">\
                 <input type="text" placeholder="Type of pets" class="form-control"  ">\
                </div>\
              </div>\
              <div class="col-md-2 col-lg-3">\
                  <div class="">\
                <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
                </div>\
                <div class="col-md-2 col-lg-2">\
                    <div class="form-group">\
                      <select id="breed_4" class="form-control" required>\
                        <option value="">Breed</option>\
                        <option>Small</option>\
                        <option>Medium</option>\
                        <option>Large</option>\
                        <option>Xtra Large</option>\
                      </select>\
                    </div>\
                  </div>\
              <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_gender_4" class="form-control" required>\
                    <option value="">Gender</option>\
                    <option>Male</option>\
                    <option>Female</option>\
                  </select>\
                </div>\
              </div>\
              <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <div class=" input-group mb-3">\
                    <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                    <div class="input-group-append">\
                    <a onclick="inremove_breed2('+add_Field+')" class="btn-danger btn-sm">-</a>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>'); 
        } 
        add_Field++;
              return false
           });
// third_row---------------------
$("#last_row").click( function() {
    if(TextCount<5)
    {
        $(".cat_kbc").append('<div class="col-md-12" id="inremove_row3'+TextCount+'">\
        <div class="form-row">\
          <div class="col-md-2 col-lg-3">\
            <div class="">\
             <input type="text" placeholder="Type of pets" class="form-control"  ">\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-3">\
              <div class="">\
            <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
            </div>\
            <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_4" class="form-control" required>\
                    <option value="">Breed</option>\
                    <option>Small</option>\
                    <option>Medium</option>\
                    <option>Large</option>\
                    <option>Xtra Large</option>\
                  </select>\
                </div>\
              </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <select id="breed_gender_4" class="form-control" required>\
                <option value="">Gender</option>\
                <option>Male</option>\
                <option>Female</option>\
              </select>\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <div class=" input-group mb-3">\
                <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                <div class="input-group-append">\
                <a onclick="inremove_breed3('+TextCount+')" class="btn-danger btn-sm">-</a>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'); 
    } 
    TextCount++;
          return false
       });

//what kind of pets second row--------------------------------
$("#kind_1").click( function() {
    if(count<5)
    {
        $(".kindrow").append('<div class="col-md-12" id="kindremove_row1'+count+'">\
        <div class="form-row">\
          <div class="col-md-2 col-lg-3">\
            <div class="">\
             <input type="text" placeholder="Type of pets" class="form-control"  ">\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-3">\
              <div class="">\
            <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
            </div>\
            <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_4" class="form-control" required>\
                    <option value="">Breed</option>\
                    <option>Small</option>\
                    <option>Medium</option>\
                    <option>Large</option>\
                    <option>Xtra Large</option>\
                  </select>\
                </div>\
              </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <select id="breed_gender_4" class="form-control" required>\
                <option value="">Gender</option>\
                <option>Male</option>\
                <option>Female</option>\
              </select>\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <div class=" input-group mb-3">\
                <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                <div class="input-group-append">\
                <a onclick="kindremove_breed1('+count+')" class="btn-danger btn-sm">-</a>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'); 
    } 
          count++;
          return false
       });
    // Second row in homestay-------------------------------------
    
    $("#kindrow_2").click( function() {
        if(Count<5)
        {
            $(".xyz").append('<div class="col-md-12" id="kindremove_row2'+Count+'">\
            <div class="form-row">\
              <div class="col-md-2 col-lg-3">\
                <div class="">\
                 <input type="text" placeholder="Type of pets" class="form-control"  ">\
                </div>\
              </div>\
              <div class="col-md-2 col-lg-3">\
                  <div class="">\
                <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
                </div>\
                <div class="col-md-2 col-lg-2">\
                    <div class="form-group">\
                      <select id="breed_4" class="form-control" required>\
                        <option value="">Breed</option>\
                        <option>Small</option>\
                        <option>Medium</option>\
                        <option>Large</option>\
                        <option>Xtra Large</option>\
                      </select>\
                    </div>\
                  </div>\
              <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_gender_4" class="form-control" required>\
                    <option value="">Gender</option>\
                    <option>Male</option>\
                    <option>Female</option>\
                  </select>\
                </div>\
              </div>\
              <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <div class=" input-group mb-3">\
                    <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                    <div class="input-group-append">\
                    <a onclick="kindremove_breed2('+Count+')" class="btn-danger btn-sm">-</a>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>'); 
        } 
        Count++;
              return false
           });
// third_row---------------------
$("#kind_row3").click( function() {
    if(add<5)
    {
        $(".kbc").append('<div class="col-md-12" id="kindremove_row3'+add+'">\
        <div class="form-row">\
          <div class="col-md-2 col-lg-3">\
            <div class="">\
             <input type="text" placeholder="Type of pets" class="form-control"  ">\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-3">\
              <div class="">\
            <input type="text" placeholder="Number of pets" class="form-control"  ">\</div>\
            </div>\
            <div class="col-md-2 col-lg-2">\
                <div class="form-group">\
                  <select id="breed_4" class="form-control" required>\
                    <option value="">Breed</option>\
                    <option>Small</option>\
                    <option>Medium</option>\
                    <option>Large</option>\
                    <option>Xtra Large</option>\
                  </select>\
                </div>\
              </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <select id="breed_gender_4" class="form-control" required>\
                <option value="">Gender</option>\
                <option>Male</option>\
                <option>Female</option>\
              </select>\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-2">\
            <div class="form-group">\
              <div class=" input-group mb-3">\
                <input type="text" id="breed_age_4" class="form-control" placeholder="Age">\
                <div class="input-group-append">\
                <a onclick="kindremove_breed3('+add+')" class="btn-danger btn-sm">-</a>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'); 
    } 
    add++;
          return false
       });

// ------------------24 services-------------------------------------------------
$("#24_service_1").click(function()
{
    $("#24_service").trigger("click");
});

$("#24_service_2").click(function()
{
    $("#24_service").trigger("click");
});

$("#24_service").change(function()
{
    if($("#24_service").is(":checked"))
    {
        $("#24_service_1").hide();
        $("#24_service_2").show();
        $("#24_service").val("1");
    }
    else
    {
        $("#24_service_1").show();
        $("#24_service_2").hide();
        $("#24_service").val("0");
    }
    
});
// Ac accomaz-------------------------------------------------------------------------
                $("#ac_defalut_1").click(function()
                {
                    $("#ac_accomodation").trigger("click");
                });
            
                $("#ac_defalut_2").click(function()
                {
                    $("#ac_accomodation").trigger("click");
                });
            
                $("#ac_accomodation").change(function()
                {
                    if($("#ac_accomodation").is(":checked"))
                    {
                        $("#ac_defalut_1").hide();
                        $("#ac_defalut_2").show();
                        $("#ac_accomodation").val("1");
                        
                    }
                    else
                    {
                        $("#ac_defalut_1").show();
                        $("#ac_defalut_2").hide();
                        $("#ac_accomodation").val("0");
                    }
                    
                });
                $("#others").click(function() {
                    $v = $('#othersbtn1').is(':hidden');
                    if($v == false){
                        
                    }
                    else{
                        $("#others").blur();
                    }
                });
                $("#test").click(function() {
                    $v = $('#ac_defalut_2').is(':hidden');
                    if($v == false){
            
                    }
                    else{
                        $("#test").blur();
                    }
                });
 // first aid kits//---------------------------------------------->

        $("#first_aidkit_1").click(function()
        {
            $("#first_aidkit").trigger("click");
        });
    
        $("#first_aidkit_2").click(function()
        {
            $("#first_aidkit").trigger("click");
        });
    
        $("#first_aidkit").change(function()
        {
            if($("#first_aidkit").is(":checked"))
            {
                $("#first_aidkit_1").hide();
                $("#first_aidkit_2").show();
                $("#first_aidkit").val("1");
            }
            else
            {
                $("#first_aidkit_1").show();
                $("#first_aidkit_2").hide();
                $("#first_aidkit").val("0");
            }
        });
// Senior_dog handling//------------------------------------------------>
     $("#senior_dog_1").click(function()
        {
            $("#senior_dog").trigger("click");
        });
    
        $("#senior_dog_2").click(function()
        {
            $("#senior_dog").trigger("click");
        });
    
        $("#senior_dog").change(function()
        {
            if($("#senior_dog").is(":checked"))
            {
                $("#senior_dog_1").hide();
                $("#senior_dog_2").show();
                $("#senior_dog").val("1");
            }
            else
            {
                $("#senior_dog_1").show();
                $("#senior_dog_2").hide();
                $("#senior_dog").val("0");
            }
        });
// oral medications////---------------------------------------------------->
                    $("#medication_1").click(function()
                    {
                        $("#medication").trigger("click");
                    });

                    $("#medication_2").click(function()
                    {
                        $("#medication").trigger("click");
                    });

                    $("#medication").change(function()
                    {
                        if($("#medication").is(":checked"))
                        {
                            $("#medication_1").hide();
                            $("#medication_2").show();
                            $("#medication").val("1");
                        }
                        else
                        {
                            $("#medication_1").show();
                            $("#medication_2").hide();
                            $("#medication").val("0");
                        }
                    });
    //instance booking//------------------------------------------>
                        $("#booking_1").click(function()
                        {
                            $("#booking").trigger("click");
                        });

                        $("#booking_2").click(function()
                        {
                            $("#booking").trigger("click");
                        });

                        $("#booking").change(function()
                        {
                            if($("#booking").is(":checked"))
                            {
                                $("#booking_1").hide();
                                $("#booking_2").show();
                                $("#booking").val("1");
                            }
                            else
                            {
                                $("#booking_1").show();
                                $("#booking_2").hide();
                                $("#booking").val("0");
                            }
                        });
    //Home visit mandatory------------------------------------------------>
                                $("#home_visit_1").click(function()
                                {
                                    $("#home_visit").trigger("click");
                                });

                                $("#home_visit_2").click(function()
                                {
                                    $("#home_visit").trigger("click");
                                });

                                $("#home_visit").change(function()
                                {
                                    if($("#home_visit").is(":checked"))
                                    {
                                        $("#home_visit_1").hide();
                                        $("#home_visit_2").show();
                                        $("#home_visit").val("1");
                                    }
                                    else
                                    {
                                        $("#home_visit_1").show();
                                        $("#home_visit_2").hide();
                                        $("#home_visit").val("0");
                                    }
                                });
// pet_training------------------------------------------------------------------>
                                    $("#pet_training_1").click(function()
                                    {
                                        $("#pet_training").trigger("click");
                                    });

                                    $("#pet_training_2").click(function()
                                    {
                                        $("#pet_training").trigger("click");
                                    });

                                    $("#pet_training").change(function()
                                    {
                                        if($("#pet_training").is(":checked"))
                                        {
                                            $("#pet_training_1").hide();
                                            $("#pet_training_2").show();
                                            $("#pet_training").val("1");
                                        }
                                        else
                                        {
                                            $("#pet_training_1").show();
                                            $("#pet_training_2").hide();
                                            $("#pet_training").val("0");
                                        }
                                    });
// Females on heat------------------------------------------------------->
                                        $("#females_on_1").click(function()
                                        {
                                            $("#females_on").trigger("click");
                                        });

                                        $("#females_on_2").click(function()
                                        {
                                            $("#females_on").trigger("click");
                                        });

                                        $("#females_on").change(function()
                                        {
                                            if($("#females_on").is(":checked"))
                                            {
                                                $("#females_on_1").hide();
                                                $("#females_on_2").show();
                                                $("#females_on").val("1");
                                            }
                                            else
                                            {
                                                $("#females_on_1").show();
                                                $("#females_on_2").hide();
                                                $("#females_on").val("0");
                                            }
                                        });
// Females on heat------------------------------------------------------->
                                                $("#need_ticks_1").click(function()
                                                {
                                                    $("#need_ticks").trigger("click");
                                                });

                                                $("#need_ticks_2").click(function()
                                                {
                                                    $("#need_ticks").trigger("click");
                                                });

                                                $("#need_ticks").change(function()
                                                {
                                                    if($("#need_ticks").is(":checked"))
                                                    {
                                                        $("#need_ticks_1").hide();
                                                        $("#need_ticks_2").show();
                                                        $("#need_ticks").val("1");
                                                    }
                                                    else
                                                    {
                                                        $("#need_ticks_1").show();
                                                        $("#need_ticks_2").hide();
                                                        $("#need_ticks").val("0");
                                                    }
                                                });
// open play area-----------------------------------------------------
                $("#open_play_1").click(function()
                {
                    $("#open_play").trigger("click");
                });

                $("#open_play_2").click(function()
                {
                    $("#open_play").trigger("click");
                });

                $("#open_play").change(function()
                {
                    if($("#open_play").is(":checked"))
                    {
                        $("#open_play_1").hide();
                        $("#open_play_2").show();
                        $("#open_play").val("1");
                    }
                    else
                    {
                        $("#open_play_1").show();
                        $("#open_play_2").hide();
                        $("#open_play").val("0");
                    }
                });
               
            });


function inremove_breed1 (countVal){
    $('#inremove_row1'+countVal).remove();
}
function inremove_breed2 (countVal){
    $('#inremove_row2'+countVal).remove();
}
function inremove_breed3 (countVal){
    $('#inremove_row3'+countVal).remove();
}
function kindremove_breed1 (countVal){
    $('#kindremove_row1'+countVal).remove();
}
function kindremove_breed2 (countVal){
    $('#kindremove_row2'+countVal).remove();
}
function kindremove_breed3(countVal){
    $('#kindremove_row3'+countVal).remove();
}

