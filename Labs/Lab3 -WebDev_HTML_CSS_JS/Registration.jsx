function validateForm() {
    formValid = false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
    if ((formData.username.length==0) || 
           (formData.email.length==0)  ||
           (formData.password.length==0) ||
           (repPassword.length == 0)){
            alert("Please fill in all text fields.");
    } else if (!formData.email.match(mailformat)){
        alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (formData.password.length < 8){
        alert("Password is too short. Please select another password");
    } else if(formData.password !== repPassword) {
        alert("Passwords do not match. Please retry");
    } else if(!formData.buyer && !formData.seller){
        alert("Please check at least one checkbox to be a seller or a buyer.")
    } else if (!tosCheckBox){ 
        alert("Please agree to the Terms and Conditions, and Privacy Policy.")
    }else {
        formValid = true;
    }
}