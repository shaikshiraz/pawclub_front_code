
 var countText=0;
 var TextCount=0;
 var add=0;
 var add_Field=0;
 var Count=0
var count=0;
//24 service------------------------------------------------>
 $(document).ready(function()
 {
                    // $("#change_blk5").change(function(){

                    //     if($('#change_blk5').is(':checked'))
                    //     {
                    //         $("#blk5").show();
                    //         $("#change_blk5").val("1");
                    //     }
                    //     else{
                    //         $("#blk5").hide();
                    //         $("#change_blk5").val("0");
                    //     }
                    // });
// homestay block first_row additional textbox inhouse pet--------------------------------
$("#first_rowadaption").click( function() {
    if(countText<5)
    {
        $(".inhousekfc").append('<div class="col-md-12" id="inremove_row1'+countText+'">\
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
    
    $("#last_rowadaption").click( function() {
        if(add_Field<5)
        {
            $(".cat_adaption").append('<div class="col-md-12" id="inremove_row2'+add_Field+'">\
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
$("#Second_rowadaption").click( function() {
    if(TextCount<5)
    {
        $(".cat_kfc").append('<div class="col-md-12" id="inremove_row3'+TextCount+'">\
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