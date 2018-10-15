var breed_count           = 1;
var breed_remove_count    = "";
var countText_2 = 0;
var countText_1 = 0;
var countText = 2;
 var countText_4 =   0;
 var countText_5 =   0;
 var countText_6 =   0;
   $(document).ready(function() {

$("#cat_first").click( function() {
    if(countText_4 <5)
    {
        $(".cat_inhouse").append('<div class="col-md-12" id="remove_row3'+countText_4+'">\
        <div class="form-row">\
          <div class="col-md-2 col-lg-3">\
            <div class="">\
          <select id="breed_4" class="form-control" required>\
            <option value="">Type of pets</option>\
          <option>Small</option>\
           <option>Medium</option>\
           <option>Large</option>\
           </select>\
            </div>\
          </div>\
          <div class="col-md-2 col-lg-3">\
              <div class="">\
            <input type="text" placeholder="Number of pets" class="form-control" id="breed_gender_'+breed_count+'">\</div>\
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
                <a onclick="remove_breed3('+countText_4+')" class="btn-danger btn-sm">-</a>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>'); 
    } 
          countText_4++;
          return false
       });
       //------------------------------------------------------------------------

       $("#cat_first2").click( function() {
        if(countText_5 <5)
        {
            $(".cat_xyz").append('<div class="col-md-12" id="remove_row4'+countText_5+'">\
            <div class="form-row">\
              <div class="col-md-2 col-lg-3">\
                <div class="">\
                <select id="breed_4" class="form-control" required>\
                <option value="">Type of pets</option>\
              <option>Small</option>\
               <option>Medium</option>\
               <option>Large</option>\
               </select>\
                </div>\
              </div>\
              <div class="col-md-2 col-lg-3">\
                  <div class="">\
                <input type="text" placeholder="Number of pets" class="form-control" id="breed_gender_'+breed_count+'">\</div>\
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
                    <a onclick="remove_breed4('+countText_5+')" class="btn-danger btn-sm">-</a>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            </div>\
          </div>'); 
        } 
              countText_5++;
              return false
           });
           //--------------------------------------------------others----------------------

           $("#cat_first3").click( function() {
            if(countText_6 <5)
            {
                $(".cat_kbc").append('<div class="col-md-12" id="remove_row5'+countText_6+'">\
                <div class="form-row">\
                  <div class="col-md-2 col-lg-3">\
                    <div class="">\
                    <select id="breed_4" class="form-control" required>\
                    <option value="">Type of pets</option>\
                  <option>Small</option>\
                   <option>Medium</option>\
                   <option>Large</option>\
                   </select>\
                    </div>\
                  </div>\
                  <div class="col-md-2 col-lg-3">\
                      <div class="">\
                    <input type="text" placeholder="Number of pets" class="form-control" id="breed_gender_'+breed_count+'">\</div>\
                    </div>\
                    <div class="col-md-2 col-lg-2">\
                        <div class="form-group">\
                         <input type="text" class="form-control" placeholder="Breed">\
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
                        <a onclick="remove_breed5('+countText_6+')" class="btn-danger btn-sm">-</a>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              </div>'); 
            } 
                  countText_6++;
            return false

               });
               $("#change_1").change(function(){
               
                if($('#change_1').is(':checked'))
                {
                    $("#found").show();
                    $("#change_1").val("1");
                }
                else{
                    $("#found").hide();
                    $("#change_1").val("0");
                }
            });
            });

            function remove_row(countVal){
                $('#remove_row'+countVal).remove();
                //         alert();
                }
                function remove_breed1 (countVal){
                    $('#remove_row1'+countVal).remove();
                    //         alert();
                 }
                    function remove_breed2 (countVal){
                        $('#remove_row2'+countVal).remove();
                        //         alert();
                 }   
                 function remove_breed4 (countVal){
                     $('#remove_row4'+countVal).remove();
                 }
                 function remove_breed3 (countVal){
                    $('#remove_row3'+countVal).remove();
                }
                function remove_breed5 (countVal){
                    $('#remove_row5'+countVal).remove();
                }