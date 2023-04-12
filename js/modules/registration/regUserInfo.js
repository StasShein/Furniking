export{
    user,
    regUserInfo,
    registrationInputsArea,
    registrationComplete
}

import { 
    validationRegistration,
    emailRegistration,
    passwordRegistration,
    nicknameRegistration 
} from './registrationValidation.js'


const registrationInputsArea = document.querySelector('.inputs__registration')

const registrationComplete = document.querySelector('.registration--complete')

const submitButtonRegistration = document.querySelector('.confirm--registration');

const inputsValue = document.querySelectorAll('input')

const userLocalStorage = JSON.parse(localStorage.getItem('User'));

const user = {}

function regUserInfo(){

    validationRegistration()

    if(emailRegistration.dataset.error === "" && 
    passwordRegistration.dataset.error === "" &&
    nicknameRegistration.dataset.error === ""){

        
        userLocalStorage.push(user)

        localStorage.setItem('User', JSON.stringify(userLocalStorage))
        inputsValue.forEach(e=>{
            e.value = ''
        })
        registrationInputsArea.style.display = 'none';
        registrationComplete.style.display = 'block';
    }
}

submitButtonRegistration.addEventListener('click', regUserInfo)