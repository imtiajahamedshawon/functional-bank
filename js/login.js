document.getElementById('login-submit').addEventListener('click',function(){
    // get user Email

   const emailField = document.getElementById('user-email');
   const userEmail= emailField.value;
   console.log(userEmail);

//    get user password

  const passwordFiled = document.getElementById('user-password');
  const userPassword = passwordFiled.value;
  
    // check email and password

    if(userEmail == 'imtiaj@gmail.com' && userPassword == 'shawon'){
     window.location.href = 'banking.html'
    }
});
