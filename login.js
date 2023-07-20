// console.log(document.getElementById('login-btn'));
document.getElementById('login-btn').addEventListener('click', function(){
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    // console.log(email, password);
    const emailValue = email.value;
    const passwordValue = password.value;
    // console.log(emailValue, passwordValue);
     
    if(emailValue == 'admin@gmail.com' && passwordValue == 'admin'){
        console.log("You are real user");
        window.location.href = 'dashboard.html';
    }else{
        console.log("You are false");
        alert('You are a hacker.')
    }
})