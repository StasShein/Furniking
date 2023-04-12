export{
    emailInputLogin,
    passwordInputLogin,
    submitButtonLogin,
    signOutButton,
    user,
    remember,
    CURRENT_USER
}

import { 
    loginForm,
} from "./loginOpenClose.js"

import { createUserProfile } from "./createUserProfile.js";

const emailInputLogin = document.querySelector('.email__input--login');

const passwordInputLogin = document.querySelector('.password__input--login');

const submitButtonLogin = document.querySelector('.confirm--login');

const CURRENT_USER = {};

const remember = document.querySelector('#check-remember');

const user = JSON.parse(localStorage.getItem('User'));

const signOutButton = document.querySelector('.sign--out')

function checkUserInfo(){

    user.forEach(e=> {
        if(emailInputLogin.value === e.email && passwordInputLogin.value === e.password){

            CURRENT_USER.email = emailInputLogin.value;
            CURRENT_USER.password = passwordInputLogin.value;
            CURRENT_USER.nickname = e.nickname;

            rememberUser()

            loginForm.style.display = 'none'   
        }else{
            submitButtonLogin.dataset.error = 'Smth went wrong. Check your writen info and try Again'
        }
    });
    
}
function rememberUser(){
    if(remember.checked){
        localStorage.setItem('CURRENT_USER', JSON.stringify(CURRENT_USER))
    }else{
        sessionStorage.setItem('CURRENT_USER', JSON.stringify(CURRENT_USER))
    } 
}

function signOut(){
    localStorage.removeItem('CURRENT_USER')
    sessionStorage.removeItem('CURRENT_USER')
    location.reload()
}

createUserProfile();

submitButtonLogin.addEventListener('click', ()=>{
    checkUserInfo();
    createUserProfile(); 
})

signOutButton.addEventListener('click', signOut)




