        
// ------------------24 services-------------------------------------------------
$(document).ready(function()
{
$("#24_service_kennel_1").click(function()
{
   $("#24_service_kennel_2").trigger("click");
});

$("#24_service_kennel_2").click(function()
{
   $("#24_service_kennel").trigger("click");
});

$("#24_service_kennel").change(function()
{
   if($("#24_service_kennel").is(":checked"))
   {
       $("#24_service_kennel_1").hide();
       $("#24_service_kennel_2").show();
       $("#24_service_kennel").val("1");
   }
   else
   {
       $("#24_service_kennel_1").show();
       $("#24_service_kennel_2").hide();
       $("#24_service_kennel").val("0");
   }
   
});
// Ac accomaz-------------------------------------------------------------------------
               $("#ac_defalut_1kennel").click(function()
               {
                   $("#ac_accomodationkennel").trigger("click");
               });
           
               $("#ac_defalut_2kennel").click(function()
               {
                   $("#ac_accomodationkennel").trigger("click");
               });
           
               $("#ac_accomodationkennel").change(function()
               {
                   if($("#ac_accomodationkennel").is(":checked"))
                   {
                       $("#ac_defalut_1kennel").hide();
                       $("#ac_defalut_2kennel").show();
                       $("#ac_accomodationkennel").val("1");
                       
                   }
                   else
                   {
                       $("#ac_defalut_1kennel").show();
                       $("#ac_defalut_2kennel").hide();
                       $("#ac_accomodationkennel").val("0");
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
                   $v = $('#ac_defalut_2kennel').is(':hidden');
                   if($v == false){
           
                   }
                   else{
                       $("#test").blur();
                   }
               });
// first aid kits//---------------------------------------------->

       $("#first_aidkit_1kennel").click(function()
       {
           $("#first_aidkitkennel").trigger("click");
       });
   
       $("#first_aidkit_2kennel").click(function()
       {
           $("#first_aidkitkennel").trigger("click");
       });
   
       $("#first_aidkitkennel").change(function()
       {
           if($("#first_aidkitkennel").is(":checked"))
           {
               $("#first_aidkit_1kennel").hide();
               $("#first_aidkit_2kennel").show();
               $("#first_aidkitkennel").val("1");
           }
           else
           {
               $("#first_aidkit_1kennel").show();
               $("#first_aidkit_2kennel").hide();
               $("#first_aidkitkennel").val("0");
           }
       });
// Senior_dog handling//------------------------------------------------>
    $("#senior_dog_1kennel").click(function()
       {
           $("#senior_dogkennel").trigger("click");
       });
   
       $("#senior_dog_2kennel").click(function()
       {
           $("#senior_dogkennel").trigger("click");
       });
   
       $("#senior_dogkennel").change(function()
       {
           if($("#senior_dogkennel").is(":checked"))
           {
               $("#senior_dog_1kennel").hide();
               $("#senior_dog_2kennel").show();
               $("#senior_dogkennel").val("1");
           }
           else
           {
               $("#senior_dog_1kennel").show();
               $("#senior_dog_2kennel").hide();
               $("#senior_dogkennel").val("0");
           }
       });
// oral medications////---------------------------------------------------->
                   $("#medication_1kennel").click(function()
                   {
                       $("#medicationkennel").trigger("click");
                   });

                   $("#medication_2kennel").click(function()
                   {
                       $("#medicationkennel").trigger("click");
                   });

                   $("#medicationkennel").change(function()
                   {
                       if($("#medicationkennel").is(":checked"))
                       {
                           $("#medication_1kennel").hide();
                           $("#medication_2kennel").show();
                           $("#medicationkennel").val("1");
                       }
                       else
                       {
                           $("#medication_1kennel").show();
                           $("#medication_2kennel").hide();
                           $("#medicationkennel").val("0");
                       }
                   });
   //instance booking//------------------------------------------>
                       $("#booking_1kennel").click(function()
                       {
                           $("#bookingkennel").trigger("click");
                       });

                       $("#booking_2kennel").click(function()
                       {
                           $("#bookingkennel").trigger("click");
                       });

                       $("#bookingkennel").change(function()
                       {
                           if($("#bookingkennel").is(":checked"))
                           {
                               $("#booking_1kennel").hide();
                               $("#booking_2kennel").show();
                               $("#bookingkennel").val("1");
                           }
                           else
                           {
                               $("#booking_1kennel").show();
                               $("#booking_2kennel").hide();
                               $("#bookingkennel").val("0");
                           }
                       });
   //Home visit mandatory------------------------------------------------>
                               $("#home_visit_1kennel").click(function()
                               {
                                   $("#home_visitkennel").trigger("click");
                               });

                               $("#home_visit_2kennel").click(function()
                               {
                                   $("#home_visitkennel").trigger("click");
                               });

                               $("#home_visitkennel").change(function()
                               {
                                   if($("#home_visitkennel").is(":checked"))
                                   {
                                       $("#home_visit_1kennel").hide();
                                       $("#home_visit_2kennel").show();
                                       $("#home_visitkennel").val("1");
                                   }
                                   else
                                   {
                                       $("#home_visit_1kennel").show();
                                       $("#home_visit_2kennel").hide();
                                       $("#home_visitkennel").val("0");
                                   }
                               });
// pet_training------------------------------------------------------------------>
                                   $("#pet_training_1kennel").click(function()
                                   {
                                       $("#pet_trainingkennel").trigger("click");
                                   });

                                   $("#pet_training_2kennel").click(function()
                                   {
                                       $("#pet_trainingkennel").trigger("click");
                                   });

                                   $("#pet_trainingkennel").change(function()
                                   {
                                       if($("#pet_trainingkennel").is(":checked"))
                                       {
                                           $("#pet_training_1kennel").hide();
                                           $("#pet_training_2kennel").show();
                                           $("#pet_trainingkennel").val("1");
                                       }
                                       else
                                       {
                                           $("#pet_training_1kennel").show();
                                           $("#pet_training_2kennel").hide();
                                           $("#pet_trainingkennel").val("0");
                                       }
                                   });
// Females on heat------------------------------------------------------->
                                       $("#females_on_1kennel").click(function()
                                       {
                                           $("#females_onkennel").trigger("click");
                                       });

                                       $("#females_on_2kennel").click(function()
                                       {
                                           $("#females_onkennel").trigger("click");
                                       });

                                       $("#females_onkennel").change(function()
                                       {
                                           if($("#females_onkennel").is(":checked"))
                                           {
                                               $("#females_on_1kennel").hide();
                                               $("#females_on_2kennel").show();
                                               $("#females_onkennel").val("1");
                                           }
                                           else
                                           {
                                               $("#females_on_1kennel").show();
                                               $("#females_on_2kennel").hide();
                                               $("#females_onkennel").val("0");
                                           }
                                       });
// Females on heat------------------------------------------------------->
                                               $("#need_ticks_1kennel").click(function()
                                               {
                                                   $("#need_tickskennel").trigger("click");
                                               });

                                               $("#need_ticks_2kennel").click(function()
                                               {
                                                   $("#need_tickskennel").trigger("click");
                                               });

                                               $("#need_tickskennel").change(function()
                                               {
                                                   if($("#need_tickskennel").is(":checked"))
                                                   {
                                                       $("#need_ticks_1kennel").hide();
                                                       $("#need_ticks_2kennel").show();
                                                       $("#need_tickskennel").val("1");
                                                   }
                                                   else
                                                   {
                                                       $("#need_ticks_1kennel").show();
                                                       $("#need_ticks_2kennel").hide();
                                                       $("#need_tickskennel").val("0");
                                                   }
                                               });
// open play area-----------------------------------------------------
               $("#open_play_1kennel").click(function()
               {
                   $("#open_playkennel").trigger("click");
               });

               $("#open_play_2kennel").click(function()
               {
                   $("#open_playkennel").trigger("click");
               });

               $("#open_playkennel").change(function()
               {
                   if($("#open_playkennel").is(":checked"))
                   {
                       $("#open_play_1kennel").hide();
                       $("#open_play_2kennel").show();
                       $("#open_playkennel").val("1");
                   }
                   else
                   {
                       $("#open_play_1kennel").show();
                       $("#open_play_2kennel").hide();
                       $("#open_playkennel").val("0");
                   }
               });
// kennel---------------------------------------------------
$("#24_service_11").click(function()
{
   $("#service").trigger("click");
});

$("#24_service_22").click(function()
{
   $("#service").trigger("click");
});

$("#service").change(function()
{
   if($("#service").is(":checked"))
   {
       $("#24_service_11").hide();
       $("#24_service_22").show();
       $("#service").val("1");
   }
   else
   {
       $("#24_service_11").show();
       $("#24_service_22").hide();
       $("#service").val("0");
   }
   
});
// --------------------------------
$("#females_on_11").click(function()
{
   $("#females").trigger("click");
});

$("#females_on_22").click(function()
{
   $("#females").trigger("click");
});

$("#females").change(function()
{
   if($("#females").is(":checked"))
   {
       $("#females_on_11").hide();
       $("#females_on_22").show();
       $("#females").val("1");
   }
   else
   {
       $("#females_on_11").show();
       $("#females_on_22").hide();
       $("#females").val("0");
   }
});
//----------------------------------------------

$("#first_aidkit_11").click(function()
{
   $("#firstaidkit").trigger("click");
});

$("#first_aidkit_22").click(function()
{
   $("#firstaidkit").trigger("click");
});

$("#firstaidkit").change(function()
{
   if($("#firstaidkit").is(":checked"))
   {
       $("#first_aidkit_11").hide();
       $("#first_aidkit_22").show();
       $("#firstaidkit").val("1");
   }
   else
   {
       $("#first_aidkit_11").show();
       $("#first_aidkit_22").hide();
       $("#firstaidkit").val("0");
   }
});
// Senior_dog handling//------------------------------------------------>
$("#senior_dog_11").click(function()
{
   $("#senior").trigger("click");
});

$("#senior_dog_22").click(function()
{
   $("#senior").trigger("click");
});

$("#senior").change(function()
{
   if($("#senior").is(":checked"))
   {
       $("#senior_dog_11").hide();
       $("#senior_dog_22").show();
       $("#senior").val("1");
   }
   else
   {
       $("#senior_dog_11").show();
       $("#senior_dog_22").hide();
       $("#senior").val("0");
   }
});

});