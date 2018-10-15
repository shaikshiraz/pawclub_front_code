
 var countText_8 =   0;
 
$(document).ready(function()
{
// ------------Start v food code-------------------------------------------------
    $("#date_month1").click( function() {
        if(countText_8< 10)
    {
    $(".try1").append('<div class="col-md-12 col-lg-12" id="DivId11'+countText_8+'">\
    <div class="form-row">\
        <div class="col-md-6 col-lg-6">\
            <div class="form-group">\
                <select class="form-control" id="area_'+countText_8+' required>\
                  <option value="">Area that you service</option>\
                  <option>Mysore</option>\
                  <option>Bangalore</option>\
                  <option>jp nagar</option>\
                  <option>kormangla</option>\
                </select>\
              </div>\
        </div>\
        <div class="col-md-6 col-lg-6">\
            <div class="form-group">\
                <div class=" input-group mb-3">\
                <input type="text" class="form-control"  id="breed_'+countText_8+' placeholder="INR">\
                    <div class="input-group-append">\
                    <a class="btn btn-danger" href="javascript:void(0)" onclick="removeDiv11('+countText_8+')">-</a>\</div>\
                </div>\
            </div>\
        </div>\
    </div>\</div> ');
    }

        countText_8++;
    return false;
        
    });
    $("#food_blk5").change(function(){

        if($('#food_blk5').is(':checked'))
        {
            $("#food_5").show();
            $("#food_blk5").val("1");
        }
        else{
            $("#food_5").hide();y
            $("#food_blk5").val("0");
        }
    });
    //  End of v food code----------------------------------------------
   



$( document ).ready(function() {
    $('#otherscheck').click(function(){
        if($(this).prop("checked") == true){
            $( "#otherstext" ).focus();
        }
        else{
            $( "#otherstext" ).val("");
        }
    });
    $( "#otherstext" ).keydown(function( event ) {
        if($('#otherscheck').is(":not(:checked)")){
            event.preventDefault();
        }
    });
    $( "#otherstext" ).click(function( event ) {
        if($('#otherscheck').is(":not(:checked)")){
            event.preventDefault();
            $( "#otherstext" ).blur();
        }
    });

    $("#advancedsearch").click(function(){
        var x = document.getElementById("normal-section");
        if (x.style.display === "none") {
            $(this).text("Advanced Search");
            $("#normal-section").show();
            $("#advance-section").hide();
        } else {
            $(this).text("Advance Close");
            $("#normal-section").hide();
            $("#advance-section").show();
        }
    });
});
});
function removeDiv11(countVal){
    $('#DivId11'+countVal).remove();
    //alert(countVal);
}
    // $("#ac_defalut_1").click(function()
    // {
    //     $("#ac_accomodation").trigger("click");
    // });

    // $("#ac_defalut_2").click(function()
    // {
    //     $("#ac_accomodation").trigger("click");
    // });

    // $("#ac_accomodation").change(function()
    // {
    //     if($("#ac_accomodation").is(":checked"))
    //     {
    //         $("#ac_defalut_1").hide();
    //         $("#ac_defalut_2").show();
    //         $("#ac_accomodation").val("1");
            
    //     }
    //     else
    //     {
    //         $("#ac_defalut_1").show();
    //         $("#ac_defalut_2").hide();
    //         $("#ac_accomodation").val("0");
    //     }
        
    // });
    // $("#others").click(function() {
    //     $v = $('#othersbtn1').is(':hidden');
    //     if($v == false){
            
    //     }
    //     else{
    //         $("#others").blur();
    //     }
    // });
    // $("#test").click(function() {
    //     $v = $('#ac_defalut_2').is(':hidden');
    //     if($v == false){

    //     }
    //     else{
    //         $("#test").blur();
    //     }
    // });
    
    // $("#cn11").click(function() {
    //     $v = $('#cn22').is(':hidden');
    //     if($v == false){

    //     }
    //     else{
    //         $("#cn11").blur();
    //     }
    // });

//24 service------------------------------------------------>
        // $("#24_service_1").click(function()
        // {
        //     $("#24_service").trigger("click");
        // });
    
        // $("#24_service_2").click(function()
        // {
        //     $("#24_service").trigger("click");
        // });
    
        // $("#24_service").change(function()
        // {
        //     if($("#24_service").is(":checked"))
        //     {
        //         $("#24_service_1").hide();
        //         $("#24_service_2").show();
        //         $("#24_service").val("1");
        //     }
        //     else
        //     {
        //         $("#24_service_1").show();
        //         $("#24_service_2").hide();
        //         $("#24_service").val("0");
        //     }
            
        // });

//what kind of dog taken------------ dog-----------------------------------------------------------
// $("#cn11").click(function()
// {
//     $("#cn").trigger("click");
// });

// $("#cn22").click(function()
// {
//     $("#cn").trigger("click");
// });

// $("#cn").change(function()
// {
//     if($("#cn").is(":checked"))
//     {
//         $("#cn11").hide();
//         $("#cn22").show();
//         $("#cn").val("1");
//     }
//     else
//     {
//         $("#cn11").show();
//         $("#cn22").hide();
//         $("#cn").val("0");
//     }
    
// });
// //-------------------cat------------------------------------------------------
// $("#dog_ck11").click(function()
// {
//     $("#dog_c").trigger("click");
// });

// $("#dog_ck22").click(function()
// {
//     $("#dog_c").trigger("click");
// });

// $("#dog_c").change(function()
// {
//     if($("#dog_c").is(":checked"))
//     {
//         $("#dog_ck11").hide();
//         $("#dog_ck22").show();
//         $("#dog_c").val("1");
//     }
//     else
//     {
//         $("#dog_ck11").show();
//         $("#dog_ck22").hide();
//         $("#dog_c").val("0");
//     }
    
// });
// //----------------------Other---------------------------------------------------
// $("#other_bt11").click(function()
// {
//     $("#other_btk").trigger("click");
// });

// $("#other_bt22").click(function()
// {
//     $("#other_btk").trigger("click");
// });

// $("#other_btk").change(function()
// {
//     if($("#other_btk").is(":checked"))
//     {
//         $("#other_bt11").hide();
//         $("#other_bt22").show();
//         $("#other_btk").val("1");
//     }
//     else
//     {
//         $("#other_bt11").show();
//         $("#other_bt22").hide();
//         $("#other_btk").val("0");
//     }
    
// });
//in house pets------------ Cat-----------------------------------------------------------
// $("#cat_1").click(function()
// {
//     $("#cat").trigger("click");
// });

// $("#cat_2").click(function()
// {
//     $("#cat").trigger("click");
// });

// $("#cat").change(function()
// {
//     if($("#cat").is(":checked"))
//     {
//         $("#cat_1").hide();
//         $("#cat_2").show();
//         $("#cat").val("1");
//     }
//     else
//     {
//         $("#cat_1").show();
//         $("#cat_2").hide();
//         $("#cat").val("0");
//     }
    
// });
//-------------------Dog-----------------------------------------------------
// $("#dog_ck1").click(function()
// {
//     $("#dog_ck").trigger("click");
// });

// $("#dog_ck2").click(function()
// {
//     $("#dog_ck").trigger("click");
// });

// $("#dog_ck").change(function()
// {
//     if($("#dog_ck").is(":checked"))
//     {
//         $("#dog_ck1").hide();
//         $("#dog_ck2").show();
//         $("#dog_ck").val("1");
//     }
//     else
//     {
//         $("#dog_ck1").show();
//         $("#dog_ck2").hide();
//         $("#dog_ck").val("0");
//     }
    
// });
// //----------------------Others----------------------------------------------------
// $("#other_bt1").click(function()
// {
//     $("#other_bt").trigger("click");
// });

// $("#other_bt2").click(function()
// {
//     $("#other_bt").trigger("click");
// });

// $("#other_bt").change(function()
// {
//     if($("#other_bt").is(":checked"))
//     {
//         $("#other_bt1").hide();
//         $("#other_bt2").show();
//         $("#other_bt").val("1");
//     }
//     else
//     {
//         $("#other_bt1").show();
//         $("#other_bt2").hide();
//         $("#other_bt").val("0");
//     }
    
// });
//-------------------------------------------------------------------------
 // first aid kits//---------------------------------------------->

//         $("#first_aidkit_1").click(function()
//         {
//             $("#first_aidkit").trigger("click");
//         });
    
//         $("#first_aidkit_2").click(function()
//         {
//             $("#first_aidkit").trigger("click");
//         });
    
//         $("#first_aidkit").change(function()
//         {
//             if($("#first_aidkit").is(":checked"))
//             {
//                 $("#first_aidkit_1").hide();
//                 $("#first_aidkit_2").show();
//                 $("#first_aidkit").val("1");
//             }
//             else
//             {
//                 $("#first_aidkit_1").show();
//                 $("#first_aidkit_2").hide();
//                 $("#first_aidkit").val("0");
//             }
//         });
// // Senior_dog handling//------------------------------------------------>
//      $("#senior_dog_1").click(function()
//         {
//             $("#senior_dog").trigger("click");
//         });
    
//         $("#senior_dog_2").click(function()
//         {
//             $("#senior_dog").trigger("click");
//         });
    
//         $("#senior_dog").change(function()
//         {
//             if($("#senior_dog").is(":checked"))
//             {
//                 $("#senior_dog_1").hide();
//                 $("#senior_dog_2").show();
//                 $("#senior_dog").val("1");
//             }
//             else
//             {
//                 $("#senior_dog_1").show();
//                 $("#senior_dog_2").hide();
//                 $("#senior_dog").val("0");
//             }
//         });
// // oral medications////---------------------------------------------------->
//                     $("#medication_1").click(function()
//                     {
//                         $("#medication").trigger("click");
//                     });

//                     $("#medication_2").click(function()
//                     {
//                         $("#medication").trigger("click");
//                     });

//                     $("#medication").change(function()
//                     {
//                         if($("#medication").is(":checked"))
//                         {
//                             $("#medication_1").hide();
//                             $("#medication_2").show();
//                             $("#medication").val("1");
//                         }
//                         else
//                         {
//                             $("#medication_1").show();
//                             $("#medication_2").hide();
//                             $("#medication").val("0");
//                         }
//                     });
//     //instance booking//------------------------------------------>
//                         $("#booking_1").click(function()
//                         {
//                             $("#booking").trigger("click");
//                         });

//                         $("#booking_2").click(function()
//                         {
//                             $("#booking").trigger("click");
//                         });

//                         $("#booking").change(function()
//                         {
//                             if($("#booking").is(":checked"))
//                             {
//                                 $("#booking_1").hide();
//                                 $("#booking_2").show();
//                                 $("#booking").val("1");
//                             }
//                             else
//                             {
//                                 $("#booking_1").show();
//                                 $("#booking_2").hide();
//                                 $("#booking").val("0");
//                             }
//                         });
//     //Home visit mandatory------------------------------------------------>
//                                 $("#home_visit_1").click(function()
//                                 {
//                                     $("#home_visit").trigger("click");
//                                 });

//                                 $("#home_visit_2").click(function()
//                                 {
//                                     $("#home_visit").trigger("click");
//                                 });

//                                 $("#home_visit").change(function()
//                                 {
//                                     if($("#home_visit").is(":checked"))
//                                     {
//                                         $("#home_visit_1").hide();
//                                         $("#home_visit_2").show();
//                                         $("#home_visit").val("1");
//                                     }
//                                     else
//                                     {
//                                         $("#home_visit_1").show();
//                                         $("#home_visit_2").hide();
//                                         $("#home_visit").val("0");
//                                     }
//                                 });
// // pet_training------------------------------------------------------------------>
//                                     $("#pet_training_1").click(function()
//                                     {
//                                         $("#pet_training").trigger("click");
//                                     });

//                                     $("#pet_training_2").click(function()
//                                     {
//                                         $("#pet_training").trigger("click");
//                                     });

//                                     $("#pet_training").change(function()
//                                     {
//                                         if($("#pet_training").is(":checked"))
//                                         {
//                                             $("#pet_training_1").hide();
//                                             $("#pet_training_2").show();
//                                             $("#pet_training").val("1");
//                                         }
//                                         else
//                                         {
//                                             $("#pet_training_1").show();
//                                             $("#pet_training_2").hide();
//                                             $("#pet_training").val("0");
//                                         }
//                                     });
// // Females on heat------------------------------------------------------->
//                                         $("#females_on_1").click(function()
//                                         {
//                                             $("#females_on").trigger("click");
//                                         });

//                                         $("#females_on_2").click(function()
//                                         {
//                                             $("#females_on").trigger("click");
//                                         });

//                                         $("#females_on").change(function()
//                                         {
//                                             if($("#females_on").is(":checked"))
//                                             {
//                                                 $("#females_on_1").hide();
//                                                 $("#females_on_2").show();
//                                                 $("#females_on").val("1");
//                                             }
//                                             else
//                                             {
//                                                 $("#females_on_1").show();
//                                                 $("#females_on_2").hide();
//                                                 $("#females_on").val("0");
//                                             }
//                                         });
// // Females on heat------------------------------------------------------->
//                                                 $("#need_ticks_1").click(function()
//                                                 {
//                                                     $("#need_ticks").trigger("click");
//                                                 });

//                                                 $("#need_ticks_2").click(function()
//                                                 {
//                                                     $("#need_ticks").trigger("click");
//                                                 });

//                                                 $("#need_ticks").change(function()
//                                                 {
//                                                     if($("#need_ticks").is(":checked"))
//                                                     {
//                                                         $("#need_ticks_1").hide();
//                                                         $("#need_ticks_2").show();
//                                                         $("#need_ticks").val("1");
//                                                     }
//                                                     else
//                                                     {
//                                                         $("#need_ticks_1").show();
//                                                         $("#need_ticks_2").hide();
//                                                         $("#need_ticks").val("0");
//                                                     }
//                                                 });
// // Open Play ground Services------------------------------------------------>
//                                                 $("#open_play_1").click(function()
//                                                 {
//                                                     $("#open_play").trigger("click");
//                                                 });

//                                                 $("#open_play_2").click(function()
//                                                 {
//                                                     $("#open_play").trigger("click");
//                                                 });

//                                                 $("#open_play").change(function()
//                                                 {
//                                                     if($("#open_play").is(":checked"))
//                                                     {
//                                                         $("#open_play_1").hide();
//                                                         $("#open_play_2").show();
//                                                         $("#open_play").val("1");
//                                                     }
//                                                     else
//                                                     {
//                                                         $("#open_play_1").show();
//                                                         $("#open_play_2").hide();
//                                                         $("#open_play").val("0");
//                                                     }
//                                                 });

//small paws------------------------------------------------------------------------------->
                                                                                    
//                                         $("#dog_1").click(function()
//                                         {
//                                             $("#dog").trigger("click");
//                                         });

//                                         $("#dog_2").click(function()
//                                         {
//                                             $("#dog").trigger("click");
//                                         });

//                                         $("#dog").change(function()
//                                         {
//                                             if($("#dog").is(":checked"))
//                                             {
//                                                 $("#dog_1").hide();
//                                                 $("#dog_2").show();
//                                                 $("#dog").val("1");
//                                             }
//                                             else
//                                             {
//                                                 $("#dog_1").show();
//                                                 $("#dog_2").hide();
//                                                 $("#dog").val("0");
//                                             }
//                                         });
//     // medium paws---------------------------------------------------------->
//                                         $("#medium_paw_1").click(function()
//                                         {
//                                             $("#medium_paw").trigger("click");
//                                         });

//                                         $("#medium_paw_2").click(function()
//                                         {
//                                             $("#medium_paw").trigger("click");
//                                         });

//                                         $("#medium_paw").change(function()
//                                         {
//                                             if($("#medium_paw").is(":checked"))
//                                             {
//                                                 $("#medium_paw_1").hide();
//                                                 $("#medium_paw_2").show();
//                                                 $("#medium_paw").val("1");
//                                             }
//                                             else
//                                             {
//                                                 $("#medium_paw_1").show();
//                                                 $("#medium_paw_2").hide();
//                                                 $("#medium_paw").val("0");
//                                             }
//                                         });

// // large paws---------------------------------------------------------->
//                                             $("#large_paw_1").click(function()
//                                             {
//                                                 $("#large_paw").trigger("click");
//                                             });

//                                             $("#large_paw_2").click(function()
//                                             {
//                                                 $("#large_paw").trigger("click");
//                                             });

//                                             $("#large_paw").change(function()
//                                             {
//                                                 if($("#large_paw").is(":checked"))
//                                                 {
//                                                     $("#large_paw_1").hide();
//                                                     $("#large_paw_2").show();
//                                                     $("#large_paw").val("1");
//                                                 }
//                                                 else
//                                                 {
//                                                     $("#large_paw_1").show();
//                                                     $("#large_paw_2").hide();
//                                                     $("#large_paw").val("0");
//                                                 }
//                                             });

// // xtra_large paws---------------------------------------------------------->
//                                             $("#x_large_paw_1").click(function()
//                                             {
//                                                 $("#x_large_paw").trigger("click");
//                                             });

//                                             $("#x_large_paw_2").click(function()
//                                             {
//                                                 $("#x_large_paw").trigger("click");
//                                             });

//                                             $("#x_large_paw").change(function()
//                                             {
//                                                 if($("#x_large_paw").is(":checked"))
//                                                 {
//                                                     $("#x_large_paw_1").hide();
//                                                     $("#x_large_paw_2").show();
//                                                     $("#x_large_paw").val("1");
//                                                 }
//                                                 else
//                                                 {
//                                                     $("#x_large_paw_1").show();
//                                                     $("#x_large_paw_2").hide();
//                                                     $("#x_large_paw").val("0");
//                                                 }
//                                             });

// // small cats---------------------------------------------------------->
//                                         $("#cat_1").click(function()
//                                         {
//                                             $("#small_cat").trigger("click");
//                                         });

//                                         $("#cat_2").click(function()
//                                         {
//                                             $("#small_cat").trigger("click");
//                                         });

//                                         $("#small_cat").change(function()
//                                         {
//                                             if($("#small_cat").is(":checked"))
//                                             {
//                                                 $("#cat_1").hide();
//                                                 $("#cat_2").show();
//                                                 $("#small_cat").val("1");
//                                             }
//                                             else
//                                             {
//                                                 $("#cat_1").show();
//                                                 $("#cat_2").hide();
//                                                 $("#x_large_paw").val("0");
//                                             }
//                                         });
//  // medium-cats---------------------------------------------------------->
//                                                 $("#medium_cat_1").click(function()
//                                                 {
//                                                     $("#medium_cat").trigger("click");
//                                                 });

//                                                 $("#medium_cat_2").click(function()
//                                                 {
//                                                     $("#medium_cat").trigger("click");
//                                                 });

//                                                 $("#medium_cat").change(function()
//                                                 {
//                                                     if($("#medium_cat").is(":checked"))
//                                                     {
//                                                         $("#medium_cat_1").hide();
//                                                         $("#medium_cat_2").show();
//                                                         $("#medium_cat").val("1");
//                                                     }
//                                                     else
//                                                     {
//                                                         $("#medium_cat_1").show();
//                                                         $("#medium_cat_2").hide();
//                                                         $("#medium_cat").val("0");
//                                                     }
//                                                 });

// // grooming bath under----------------------------->

//                                                 $("#bath_1").click(function()
//                                                 {
//                                                     $("#bath").trigger("click");
//                                                 });

//                                                 $("#bath_2").click(function()
//                                                 {
//                                                     $("#bath").trigger("click");
//                                                 });

//                                                 $("#bath").change(function()
//                                                 {
//                                                     if($("#bath").is(":checked"))
//                                                     {
//                                                         $("#bath_1").hide();
//                                                         $("#bath_2").show();
//                                                         $("#bath").val("1");
//                                                     }
//                                                     else
//                                                     {
//                                                         $("#bath_1").show();
//                                                         $("#bath_2").hide();
//                                                         $("#bath").val("0");
//                                                     }
//                                                 });
// //-----hair_cut----------------------------------------->
//                                                     $("#hair_1").click(function()
//                                                     {
//                                                         $("#hair").trigger("click");
//                                                     });

//                                                     $("#hair_2").click(function()
//                                                     {
//                                                         $("#hair").trigger("click");
//                                                     });

//                                                     $("#hair").change(function()
//                                                     {
//                                                         if($("#hair").is(":checked"))
//                                                         {
//                                                             $("#hair_1").hide();
//                                                             $("#hair_2").show();
//                                                             $("#hair").val("1");
//                                                         }
//                                                         else
//                                                         {
//                                                             $("#hair_1").show();
//                                                             $("#hair_2").hide();
//                                                             $("#hair").val("0");
//                                                         }
//                                                     });

// //Nail_cut------------------------------------------------->
//                                                 $("#nail_1").click(function()
//                                                 {
//                                                     $("#nail").trigger("click");
//                                                 });

//                                                 $("#nail_2").click(function()
//                                                 {
//                                                     $("#nail").trigger("click");
//                                                 });

//                                                 $("#nail").change(function()
//                                                 {
//                                                     if($("#nail").is(":checked"))
//                                                     {
//                                                         $("#nail_1").hide();
//                                                         $("#nail_2").show();
//                                                         $("#nail").val("1");
//                                                     }
//                                                     else
//                                                     {
//                                                         $("#nail_1").show();
//                                                         $("#nail_2").hide();
//                                                         $("#nail").val("0");
//                                                     }
//                                                 });
// //style----------------------------------------------------------------------->
//                                                     $("#style_1").click(function()
//                                                     {
//                                                         $("#style").trigger("click");
//                                                     });

//                                                     $("#style_2").click(function()
//                                                     {
//                                                         $("#style").trigger("click");
//                                                     });

//                                                     $("#style").change(function()
//                                                     {
//                                                         if($("#style").is(":checked"))
//                                                         {
//                                                             $("#style_1").hide();
//                                                             $("#style_2").show();
//                                                             $("#style").val("1");
//                                                         }
//                                                         else
//                                                         {
//                                                             $("#style_1").show();
//                                                             $("#style_2").hide();
//                                                             $("#style").val("0");
//                                                         }
//                                                     });

// //spa services-------------------------------------------------------->
//                                                     $("#other_1").click(function()
//                                                     {
//                                                         $("#other").trigger("click");
//                                                     });

//                                                     $("#other_2").click(function()
//                                                     {
//                                                         $("#other").trigger("click");
//                                                     });

//                                                     $("#other").change(function()
//                                                     {
//                                                         if($("#other").is(":checked"))
//                                                         {
//                                                             $("#other_1").hide();
//                                                             $("#other_2").show();
//                                                             $("#other").val("1");
//                                                         }
//                                                         else
//                                                         {
//                                                             $("#other_1").show();
//                                                             $("#other_2").hide();
//                                                             $("#other").val("0");
//                                                         }
//                                                     });
