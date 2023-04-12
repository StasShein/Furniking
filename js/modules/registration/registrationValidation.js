export{
    validationRegistration,
    emailRegistration,
    passwordRegistration,
    nicknameRegistration
}

import { user } from "./regUserInfo.js";



const emailInputRegistration = document.querySelector('.email__input--registration');

const passwordInputRegistration = document.querySelector('.password__input--registration');

const nicknameInputRegistration = document.querySelector('.nickname__input--registration');

const emailRegistration = document.querySelector('.email__registration')

const passwordRegistration = document.querySelector('.password__registration')

const nicknameRegistration = document.querySelector('.nickname__registration')

function validationRegistration(){

    emailRegistration.dataset.error = ""

    passwordRegistration.dataset.error = ""

    nicknameRegistration.dataset.error = ""


    if(emailInputRegistration.value.match('[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-z]{2,6}')){
        user.email = emailInputRegistration.value
    }else{
        emailRegistration.dataset.error =  'Not correct format'
    }

    
    if(emailInputRegistration.value === ''){
        emailRegistration.dataset.error =  'Dont be empty'
    }

    if(passwordInputRegistration.value.length > 8){
        user.password = passwordInputRegistration.value
    }else{
        passwordRegistration.dataset.error = 'Password should be more 8 symbols'
    }
    
    if(nicknameInputRegistration.value.length > 5 && nicknameInputRegistration.value.match(/[a-zA-Z]+/)){
        user.nickname = nicknameInputRegistration.value
    }else{
        nicknameRegistration.dataset.error = 'Nickname should be more 5 symbols and includes a-z A-Z'
    }
}
