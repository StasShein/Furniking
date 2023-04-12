import { 
    loginForm,
    loginHead,
    loginButton
} from "./loginOpenClose.js"

import { 
    user,
    submitButtonLogin,
    signOutButton,
    remember,
    CURRENT_USER
 } from "./signInOut.js"

export{
    loginInputsArea,
    loginArea,
    createUserProfile,
    iconAccount
}

const loginArea = document.querySelector('.info--login');

const loginInputsArea = document.querySelector('.inputs__login')

const iconAccount = document.querySelector('#account')

function createUserProfile(){
    
    if(localStorage.getItem('CURRENT_USER') !== null || sessionStorage.getItem('CURRENT_USER') !== null){
        loginForm.style.display = 'none';
        loginHead.innerText = `Hi, ${CURRENT_USER.nickname}`  
        loginButton.parentElement.style.display = 'none';
        loginInputsArea.innerHTML = `
        <img src="../../../img/login/avatar572.png">
        <h3>Hi, ${CURRENT_USER.nickname}</h3>
        `;
        submitButtonLogin.style.display = 'none';
        signOutButton.style.display = 'block';
        remember.parentElement.style.display = 'none';

        iconAccount.innerHTML = `<img src="./img/login/avatar572.png" alt="account"></img>`;
    }
}