import { openLogWindow, loginButton, loginHead } from "./loginOpenClose.js";

import './signInOut.js';

import { iconAccount, loginArea } from "./createUserProfile.js";

import { registrationButton, registrationArea } from "../registration/registrationOpen.js";

const closeButton = document.querySelector('.close')

openLogWindow(loginHead, closeButton);

openLogWindow(iconAccount, closeButton)

loginButton.addEventListener('click', ()=>{
    loginArea.style.display = 'block';
    registrationArea.style.display = 'none'
    loginButton.style.backgroundColor = 'white';
    registrationButton.style.backgroundColor = '#C2C2C2'
})



