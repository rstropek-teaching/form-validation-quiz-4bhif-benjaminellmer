//Check if firstname is empty and show and Hide the firstNameMendatory Field
var nofirstName = true;
var nolastName = true;
var noEmail = false;
checkErrors();

$('#firstName').keyup(function(){
    let input = $(this);
    let firstname = input.val();
    
     if (firstname) {
        $("#firstNameMandatory").hide();
        nofirstName = false;
        checkErrors();
     }
    else {
        $("#firstNameMandatory").show();
        nofirstName = true;
        checkErrors();
    }
});
//Check if lastname is empty and show and Hide the lastNameMendatory Field
$('#lastName').keyup(function(){
    let input = $(this);
    let lastname = input.val();
    
     if (lastname) {
        $("#lastNameMandatory").hide();
       nolastName = false;
        checkErrors();
     }
    else {
        $("#lastNameMandatory").show();
        nolastName = true;
        checkErrors();
    }
});
//Check if email is empty and if receive newletter is checked 
//if it is checked and email is empty show the emailMandatory Field
$("#emailMandatory").hide();
$('#email').keyup(function(){
    let input = $(this);
    let email = input.val();
    let newsletterBox = $('#newsletter').is(':checked');
    
     if (newsletterBox && !email) {
        $("#emailMandatory").show();
     }
    else {
        $("#emailMandatory").hide();
        noEmail = false;
        checkErrors();
    }
});

$('#newsletter').change(function(){
    let newsletterBox = $('#newsletter').is(':checked');
    let email = $('#email');

    if (newsletterBox && !email.val()) {
        $("#emailMandatory").show();
        noEmail = true;
        checkErrors();
     }
    else {
        $("#emailMandatory").hide();
    }
});

$('#otherMediaChannel').hide();
$('#mediaChannelSelect').change(function(){
    let ChannelSelect = $("#mediaChannelSelect").val();
    if(ChannelSelect === 'Other'){
        $('#otherMediaChannel').show();
    }else{
        $('#otherMediaChannel').hide();
    }
});

function checkErrors(){
    console.log(nofirstName);
    console.log(noEmail);
    console.log(nolastName);
    if(!nofirstName && !nolastName && !noEmail){
        $('button.btn').show();
        console.log("Everything fine");
    }else{
        $('button.btn').hide();
        console.log("Not Everything fine");
    }
}