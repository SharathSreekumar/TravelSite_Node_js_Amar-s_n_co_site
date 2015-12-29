function verify(){//verify(email,password,confirm-password)
	var x = document.forms["formCreate"]["user-email"].value;
	var y = document.forms["formCreate"]["user-pw"].value;
	var z = document.forms["formCreate"]["user-pw-repeat"].value;
    
    if (x == null || x == "" || y == null || y == "" || z == null || z == "") {
        alert("Please complete the form");
        return false;
    }else if (y!=z){
    	alert("Password Incorrect!");
    	return false;
    }
}

function verifyLogin() {
	var user = document.forms["formLogin"]["user-email"].value;
	var pass = document.forms["formLogin"]["user-pw"].value;

	if(user==null || user=="" || pass==null || pass==""){
		alert("Please enter UserId and Password");
        return false;	
	}
}