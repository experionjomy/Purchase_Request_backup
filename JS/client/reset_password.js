function resetPassword() {
    var oldPassword = document.getElementById("old_password").value;
    var newPassword = document.getElementById("new_password").value;
    var confirmPassword = document.getElementById("confirm_password").value;
    var username=localStorage.getItem('USERNAME');
    var token=localStorage.getItem('TOKEN');
    document.getElementById('welcome_username').innerHTML=username;
    if (newPassword != confirmPassword) {
        alert("Passwords does not match");
    } else {
        var httpObject1 = new XMLHttpRequest();
        httpObject1.onreadystatechange = function() {
            if (this.readyState == '4' && this.status == '200') {
                var result = this.responseText;
                result = JSON.parse(result);
                if (result.status == 200) {
                  alert("Password reset successfull");
                  location.reload(true);
                  
                }

            } else {
                console.log(result);

            }

        }
    }
    var key={'username':username,'token':token};
    key=JSON.stringify(key);
    httpObject1.open('PUT', 'http://192.168.1.230:8081/resetpassword/'+key, true);
    httpObject1.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    httpObject1.send('oldPassword=' + oldPassword + '&newPassword=' + newPassword + '&confirmPassword=' + confirmPassword);

    return false;

}


function logout(){
    if(confirm("Are you sure?"))
    {
    localStorage.clear();
    window.location="login.html";
    }
    else{
        return false;
    }
}

     function verify(){
  username=localStorage.getItem('USERNAME');
  console.log(username);
  if(username==null){

    document.location.href="login.html";
  }
}