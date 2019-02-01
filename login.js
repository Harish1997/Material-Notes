
var log_user_txt=document.getElementById("login_username");
var log_user_pass=document.getElementById("login_pass");

var signup_usr_txt=document.getElementById("signup_username");
var signup_usr_pass=document.getElementById("signup_pass");

var loginbtn=document.getElementById("loginbutton");
var signupbtn=document.getElementById("signupbutton");


var login_label=document.getElementById("login_label");
var signup_label=document.getElementById("signup_label");


var loginbutton=document.getElementsByClassName("logintab")[0];
var signupbutton=document.getElementsByClassName("signuptab")[0];
var logindiv=document.getElementsByClassName("login")[0];
var signupdiv=document.getElementsByClassName("signup")[0];

loginbtn.addEventListener('click',function(){
    loginUser(log_user_txt.value,log_user_pass.value);
});
signupbtn.addEventListener('click',function(){
    registerUser(signup_usr_txt.value,signup_usr_pass.value);
});

function viewLogin(){
    hidden();
    logindiv.classList.remove('hide');
    signupbutton.classList.remove('changeme');
    signup_label.classList.remove('changemetxt');
    loginbutton.classList.add('changeme');
    login_label.classList.add('changemetxt');
}
function viewSignup(){
    hidden();
    signupdiv.classList.remove('hide');
    
    loginbutton.classList.remove('changeme');
    login_label.classList.remove('changemetxt');
    signupbutton.classList.add('changeme');
    signup_label.classList.add('changemetxt');
}
function hidden(){
    logindiv.classList.add('hide');
    signupdiv.classList.add('hide');
}

async function loginUser(username,password) {
    let url="http://192.168.100.162:3000/auth/login";
    let loginRequest=await fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "username":username,
            "password":password
        })
        }
    ); 
    let result = await loginRequest.json();
    console.log(result);
    if(result['isSuccess']){
        var token=result['responseBody']['token'];
        window.location="main.html";
        sessionStorage.setItem('token',token);
    }
    else{
        window.alert("Invalid credentials");
    }
}

async function registerUser(username,password) {
    let url="http://192.168.100.162:3000/auth/register";
    let registerRequest=await fetch(url,{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "username":username,
            "password":password
        })
        }
    );
    let result = await registerRequest.json();
    console.log(result);
    if(result['isSuccess']){
        var token=result['responseBody']['token'];
        window.location="main.html";
        sessionStorage.setItem('token',token);
    }
    else{
        window.alert("Invalid credentials");
    } 
}