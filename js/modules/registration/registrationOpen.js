export{
    registrationButton,
    registrationArea
}

import { loginArea } from "../login/createUserProfile.js"
import { loginButton} from "../login/loginOpenClose.js"
import { registrationInputsArea, registrationComplete } from "./regUserInfo.js"


const registrationArea = document.querySelector('.info--registration')

const registrationButton = document.querySelector('.registration')

registrationButton.addEventListener('click', ()=>{
    loginArea.style.display = 'none';
    registrationArea.style.display = 'block';
    registrationInputsArea.style.display = 'block';
    registrationComplete.style.display = 'none'
    loginButton.style.backgroundColor = '#C2C2C2';
    registrationButton.style.backgroundColor = 'white'
})