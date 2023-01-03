function check(){
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(name == ""){
        alert("Username shouldn't be empty");
        return false;
    }
    if(mobile.length<10 || mobile.length>10){
        alert("Mobile number should be 10 digit");
        return false;
    }
    let atPos = email.indexOf('@');
    if(atPos<=0){
        alert("Email id not valid");
        return false;
    }
    if(password.length<6 || password.length>15){
        alert("Password length should be 6 to 15 characters");
        return false;
    }
}