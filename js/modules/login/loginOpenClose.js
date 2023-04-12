export {
    openLogWindow,
    loginForm,
    loginHead,
    loginButton,
}

const loginForm = document.querySelector('.login__area')

const loginHead = document.querySelector('.header__block__login')



const loginButton = document.querySelector('.login')

function openLogWindow(open, close){

    open.addEventListener('click', ()=>{
        loginForm.style.display = 'block'    
    })
    
    close.addEventListener('click', ()=>{
        loginForm.style.display = 'none'
    })
}

