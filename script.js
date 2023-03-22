var form=document.getElementById("formId");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);
function demo_function(){
var fname1=document.getElementById("fname1").innerHTML;
var fname=document.getElementById("fname").value;
console.log(fname1 + fname);
var lname1=document.getElementById("lname1").innerHTML;
var lname=document.getElementById("lname").value;
console.log(lname1 + lname);
var email1=document.getElementById("email1").innerHTML;
var email=document.getElementById("email").value;
console.log(email1 + email);
var mobile1=document.getElementById("mobile1").innerHTML;
var mobile=document.getElementById("mobile").value;
console.log(mobile1 + mobile);
var gender1=document.getElementById("gender").innerHTML;
function displayRadioValue() {
        var ele = document.getElementsByName('gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            console.log("Gender: "+ele[i].value);
        }
    }
    //console.log(gender1)
    displayRadioValue()
    var dob1=document.getElementById("dob1").innerHTML;
var dob=document.getElementById("dob").value;
console.log(dob1 + dob);
var address1=document.getElementById("address1").innerHTML;
var address=document.getElementById("address").value;
console.log(address1 + address);
var city1=document.getElementById("city1").innerHTML;
var city=document.getElementById("city").value;
console.log(city1 + city);
var pin1=document.getElementById("pin1").innerHTML;
var pin=document.getElementById("pin").value;
console.log(pin1 + pin);
var state1=document.getElementById("state1").innerHTML;
var state=document.getElementById("state").value;
console.log(state1 + state);
var qualification=document.getElementById("qualification1").innerHTML;
      function selOpt() {
         selEl = document.querySelector('#qualification');
         op = selEl.value;
         //document.querySelector('.op').textContent = op;
         console.log("Qualification: "+op);
      }
      selOpt()
      
      function printChecked() {
         var items = document.getElementsByName("sp");
         var selectedItems = "";
         for (var i = 0; i < items.length; i++) {
            if (items[i].type == "checkbox" && items[i].checked == true){
               selectedItems+=items[i].value+"";
            }
         }
         console.log("Specialization:" + selectedItems);
      }
      printChecked()
//alert(a)
}


/*
function validateForm() {
var returnval=true;
  let fnamei = document.forms["myForm"]["fname"].value;
  if (fnamei.length<2) {
    alert("length of fname is too small");
    returnval= false;
    }
    let lnamei = document.forms["myForm"]["lname"].value;
  if (lnamei.length<2) {
    alert("length of lname is too small");
    returnval= false;
    }
    let emaili = document.forms["myForm"]["myemail"].value;
  if (emaili.length>15) {
    alert("length of email is too large");
    returnval= false;
    }
    let mobilei = document.forms["myForm"]["mobile"].value;
  if (mobilei.length!=10) {
    alert("length of mobile should be equal to 10");
    returnval= false;
    }
    
    var radios = document.getElementsByName("gender");
    returnval = false;

    var i = 0;
    while (!returnval && i < radios.length) {
        if (radios[i].checked) returnval = true;
        i++;        
    }

    if (!returnval) alert("Must check gender option!");
    
    let datei = document.forms["myForm"]["dob"].value;
  if (datei.length==0) {
    alert("date of birth should be filled");
    returnval= false;
    }
   let addressi = document.forms["myForm"]["address"].value;
  if (addressi.length<10) {
    alert("write full address");
    returnval= false;
    }
   let cityi = document.forms["myForm"]["city"].value;
  if (cityi.length<3) {
    alert("enter valid city");
    returnval= false;
    }
   let pini = document.forms["myForm"]["pin"].value;
  if (pini.length<4) {
    alert("enter valid pin code");
    returnval= false;
    }
    let statei = document.forms["myForm"]["state"].value;
  if (statei.length<4) {
    alert("enter valid state");
    returnval= false;
    }
    let passwdi = document.forms["myForm"]["passwd"].value;
  if (statei.length<8) {
    alert("enter valid passwd");
    returnval= false;
    }
    
    
       
            // get the checkbox element from the DOM using the getElementId function
            let checkboxi=document.getElementsByName("sp");
            // get the text element to display the status of the checkbox
            //let text=document.getElementById("confirm");
            // use the checked property to check if the checkbox is checked
            if (!checkboxi[0].checked && !checkboxi[1].checked &&!checkboxi[2].checked &&!checkboxi[3].checked){ 

alert("Please Select Specialization"); 
returnval=false;
                
}
        
            

   
    
  return returnval;
}
*/
//console.log(a)

function seterror(i,error){
//console.log(id,error)
//document.getElementById(id)
document.getElementsByClassName('formerror')[i].innerHTML=error

}
/*
function seterrorlname(id,error){
//console.log(id,error)
document.getElementById(id)
document.getElementsByClassName('formerror')[0].innerHTML=error

}
*/

function validateForm(){
var returnval=true;

var name = document.forms['myForm']['fname'].value;
//console.log(name)
//return false;

if(name.length<3){
//console.log("hello")
seterror(0,"* length of fname is too short");
document.forms['myForm']['fname'].style.borderColor="red"
returnval=false;

}
if(name.length == 0){
seterror(0,"* length of fname can't be zero");
document.forms['myForm']['fname'].style.borderColor="red"
returnval=false;
}


var lnamei = document.forms['myForm']['lname'].value;
if(lnamei.length<3){
seterror(1,"* length of lname is too short");
document.forms['myForm']['lname'].style.borderColor="red"
returnval=false;

}
if(lnamei.length == 0){
seterror(1,"* length of lname can't be zero");
document.forms['myForm']['lname'].style.borderColor="red"
returnval=false;
}


var emaili = document.forms['myForm']['myemail'].value;
if(emaili.length>15){
seterror(2,"* length of email is too large");
document.forms['myForm']['myemail'].style.borderColor="red"
returnval=false;

}
if(emaili.length == 0){
seterror(2,"* length of email can't be zero");
document.forms['myForm']['myemail'].style.borderColor="red"
returnval=false;
}

var mobilei = document.forms['myForm']['mobile'].value;
if(mobilei.length!=10){
seterror(3,"* length of mobile should be equal to 10");
document.forms['myForm']['mobile'].style.borderColor="red"
returnval=false;

}
if(mobilei.length == 0){
seterror(3,"* length of mobile can't be zero");
document.forms['myForm']['mobile'].style.borderColor="red"
returnval=false;
}
var radios = document.getElementsByName("gender");
    returnval = false;

    var i = 0;
    while (!returnval && i < radios.length) {
        if (radios[i].checked) returnval = true;
        i++;        
    }

    if (!returnval){
     alert("Must check gender option!");
     }
var dobi = document.forms['myForm']['dob'].value;
if(dobi.length==0){
seterror(4,"* enter dob");
document.forms['myForm']['dob'].style.borderColor="red"
returnval=false;

}

var addressi = document.forms['myForm']['address'].value;
if(addressi.length==0){
seterror(5,"* enter address");
document.forms['myForm']['address'].style.borderColor="red"
returnval=false;

}
var cityi = document.forms['myForm']['city'].value;
if(cityi.length<3){
seterror(6,"* enter valid city");
document.forms['myForm']['city'].style.borderColor="red"
returnval=false;

}
if(cityi.length==0){
seterror(6,"* enter city");
document.forms['myForm']['city'].style.borderColor="red"
returnval=false;

}
var pini = document.forms['myForm']['pin'].value;
if(pini.length<3){
seterror(7,"* enter valid pin code");
document.forms['myForm']['pin'].style.borderColor="red"
returnval=false;

}
if(pini.length==0){
seterror(7,"* pin code cannot be blank");
returnval=false;

}
var statei = document.forms['myForm']['state'].value;
if(statei.length<3){
seterror(8,"* enter valid state");
document.forms['myForm']['state'].style.borderColor="red"
returnval=false;

}
if(statei.length==0){
seterror(8,"* state cannot be blank");
document.forms['myForm']['state'].style.borderColor="red"
returnval=false;

}
let checkboxi=document.getElementsByName("sp");
            // get the text element to display the status of the checkbox
            //let text=document.getElementById("confirm");
            // use the checked property to check if the checkbox is checked
            if (!checkboxi[0].checked && !checkboxi[1].checked &&!checkboxi[2].checked &&!checkboxi[3].checked){ 

alert("Please Select Specialization"); 
returnval=false;
                
}
var passwordi = document.forms['myForm']['passwd'].value;
if(passwordi.length<8){
seterror(11,"* enter valid state");
document.forms['myForm']['passwd'].style.borderColor="red"
returnval=false;

}
if(passwordi.length==0){
seterror(11,"* password cannot be blank");
document.forms['myForm']['passwd'].style.borderColor="red"
returnval=false;

}
return returnval;

}

/*
var name1 = document.forms['myForm']['lname'].value;
}
if(name1.length<3){
//console.log("hello")
seterror("lname","* length of lname is too short");
returnval=false;

}
if(name1.length == 0){
seterror("lname","* length of lname can't be zero");
returnval=false;

}
*/
/*var email = document.forms['myForm']['myemail'].value;

if(email.length<3){
//console.log("hello")
seterror("email1","* length of lname is too short");
returnval=false;

}
if(email.length == 0){
seterror("email1","* length of lname can't be zero");
returnval=false;

}
//return true;
return returnval;
}
*/
