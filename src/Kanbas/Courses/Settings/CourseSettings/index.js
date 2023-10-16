import "../../CourseNavigation/index.css"
import '@fortawesome/fontawesome-free/css/all.min.css'


function CourseSettings() {
 return (
   
    <div class="flex-fill">
      <div class="row" style={{paddingLeft: '20px'}}>
        <div style={{padding: '5px'}}><h3>Course Name </h3>
        </div>
      </div>
 




  <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
      <div class="col-md-3" style={{paddingLeft: '20px'}}>
        <label>Image:</label>
       </div>
      <div class="col-md-4">
        <div style={{height: '200px', border: '1px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button type="button" class="student-view-1 ">Choose Image</button>
        </div>

      </div>
    </div>




    <div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
      <div class="col-md-3" style={{paddingLeft: '20px'}}>
        <label>Name:</label>
                              </div>
      <div class="col-md-5">
        <label>CS4550 12631 Web Development SEC 01 Fall 2023 [BOS-1-TR]</label>
      </div>
    </div>




    <div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
      <div class="col-md-3" style={{paddingLeft: '20px'}}>
        <label>Course Code:</label>
       </div>
      <div class="col-md-5">
        <label>CS4550.12631.201410</label>
      </div>
    </div>




    <div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
      <div class="col-md-3" style={{paddingLeft: '20px'}}>
        <label>Blueprint Course:</label>
      </div>
      <div class="col-md-5">
        <label>No</label>
      </div>
    </div>




    <div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}}>
      
      <div class="col-md-3" style={{paddingLeft: '20px'}}>
        <label>Course Template:</label>
      </div>
      <div class="col-md-5">
        <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Enable course as a Course Template </label>
      </div>
    </div>




<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Time Zone:</label>
  </div>
  <div class="col-md-5">
    <select class="form-control ">
      <option value="option1">Eastern Time(US & Canada)(-5:00/-4:00)</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select>      
  </div>
</div>





<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>SIS ID:</label>
  </div>
  <div class="col-md-5">
    <label>CS4550.12631.201410</label>
  </div>
</div>




<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Subaccount:</label>
   </div>
  <div class="col-md-5">
    <label style={{color: 'red'}}>CS Undergrad</label>
  </div>
</div>




<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Term:</label>
  </div>
  <div class="col-md-5">
    <label>202410_1 Fall 2023 Semester Full Term</label>
  </div>
</div>





<div class="row"  style={{paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Participation:</label>
  </div>
    <div class="col-md-5">
      <select class="form-control ">
      <option value="option1">Term</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select> 
      <div class="row" style={{paddingTop: '5px'}}>

            <label>Course participation is limited to term start and end dates.</label>

      </div>
      <div class="row" style={{paddingTop: '5px'}}>

        <h5>Start</h5>

  </div>
      <div class="row">
      <div class="col-sm" style={{paddingRight: '20px'}}>
      <input type="date"
           id="text-fields-due"
            value="2021-01-01" />
           
      </div>
      </div>

      <div class="row" style={{paddingTop: '5px'}}>

        <h5>End</h5>

  </div>
      <div class="row">
      <div class="col-sm" style={{paddingRight: '20px'}}>
      <input type="date"
           id="text-fields-due"
            value="2021-01-01" />
      </div>

</div>
<div class="row" style={{paddingTop: '5px'}}>
<div>
  <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Restrict students from viewing course before term start date </label>
</div>
</div>
<div class="row"style={{paddingTop: '5px'}}>
  <div>
    <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Restrict students from viewing course after term end date </label>
  </div>
  </div>
  
</div>

</div>



<div class="row" style={{paddingTop: '10px'}} >
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Default due time:</label>
  </div>
    <div class="col-md-5">
      <select class="form-control ">
      <option value="option1">Account default (11:59pm)</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select> 
      <div class="row" style={{paddingTop: '5px'}}>
            <label>This influences the user interface for setting due dates.It does not change the time due for any existing assignments</label>
      </div>
</div>
</div>



<div class="row" style={{paddingTop: '10px'}} >
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Language:</label>
  </div>
    <div class="col-md-5">
      <select class="form-control ">
      <option value="option1">Not set (user-configurable,defaults to English(Unit))</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select> 
      <div class="row" style={{paddingTop: '5px'}}>
            <label>This will override any userr/system language preferences.This is only recommended for foreign language courses</label>
      </div>
</div>
</div>


<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}}>
      
  <div class="col-md-3"style={{paddingLeft: '20px'}}>
    <label>File Storage:</label>
                          </div>
  <div class="col-md-5">
    <label>10000 megabytes</label>
  </div>
</div>


<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Large Course:</label>
  </div>
  <div class="col-md-5">
    <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Launch SpeedGrader Filtered by Student Group </label>
  </div>
</div>




<div class="row"  style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Grading Scheme:</label>
  </div>
  <div class="col-md-5">
    <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Enable course grading scheme </label>
  </div>
</div>

 

<div class="row" style={{paddingTop: '10px'}} >
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Licenese</label></div>
    <div class="col-md-5">
      <select class="form-control ">
      <option value="option1">Private(Copyrighted)</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select> 
    </div>
    <div class="col-md-1" >
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
     
      alignSelf: 'center',
      alignContent: 'center',
      alignItems:'center'}}><i class="fa fa-question" style={{justifyContent: 'flex-end',color: 'red',alignSelf: 'center',fontSize: '20'}}></i></div></div>
      
</div>



<div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>File Copyright:</label>
  </div>
  <div class="col-md-9">
      <div><input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">
        Copyright and license information must be provided for files before they are published</label>
</div>
</div>




<div class="row" style={{paddingTop: '10px'}}>
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Visibility:</label></div>
    <div class="col-md-9" >
      <label>If you need to make your course public please contact your administrator/support </label>

    <div class="row">
      <div class="col-md-5">
        <select class="form-control ">
        <option value="option1">Course</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        </select> 
      </div>
        <div class="col-md-1" >
          <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
     
      alignSelf: 'center',
      alignContent: 'center',
      alignItems:'center'}}><i class="fa fa-question" style={{justifyContent: 'flex-end',color: 'red',alignSelf: 'center',fontSize: '20'}}></i></div></div>
          <div class="row"  style={{paddingTop: '5px'}}>
            <div>
              <input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Include this course in the public course index</label>
            </div>
            </div>
</div>
    </div>




<div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Formate:</label>
  </div>
  <div class="col-md-5">
    <select class="form-control ">
      <option value="option1">On-Campus</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      </select>      
  </div>
</div>

</div>



<div class="row" style={{alignItems: 'center' ,paddingTop: '10px'}}>
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Mastery Path:</label>
  </div>
  <div class="col-md-9">
      <div><input class ="form-check-input" type="checkbox" id="textEntry" /> <label class="form-check-label">Enable individual learning paths for students based on assessment</label>
</div>
</div>




<div class="row" style={{paddingTop: '10px'}} >
      
  <div class="col-md-3" style={{paddingLeft: '20px'}}>
    <label>Description:</label></div>
    <div class="col-md-7">
    <div class="row">
      <div> <textarea class="form-control float-end h-10">This is the first assignment to build kanbas</textarea>
    </div>
    </div>
 
<div class="row" style={{paddingBottom: '20px',paddingTop: '10px'}}>
  <div>
     <label style={{color: 'red'}}> more option </label>
  </div>
  </div>
    
</div>
</div>

 
{/* <hr marginInlineStart: "0px"/>   */}
<hr/>

<div class="container" style={{alignItems: 'center'}}>

<div class="center-frame">

</div>

<div class="container-fluid" style={{alignItems: 'center'}}>
<button type="button" class="student-view-1 float-end  " style={{backgroundColor: 'red', color: 'white', marginLeft: '20px'}}>Update Course Details</button>
</div>
</div>
</div>


</div>



</div>
 
 )
}
export default CourseSettings;