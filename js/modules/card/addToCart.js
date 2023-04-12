import { DATABASE } from "./DATABASE.js";
import { renderItems } from "./render.js";

export function addCartToLocalStorage(arr){
    
    localStorage.setItem('cart', JSON.stringify(arr))

    const set = localStorage.getItem('cart')

    if(JSON.parse(set) !== arr){
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(arr))
    }
}

function basketNotification(){

    const basketNotification = document.querySelector('#basket');

    basketNotification.dataset.length = JSON.parse(localStorage.getItem('cart')).length
}
try{
    basketNotification()
}catch{
    
}


export function createCartArr(){

    const buttonAdd = document.querySelectorAll('.item_buy')

    const cart = [];

    buttonAdd.forEach(button => {
    
        button.addEventListener('click', (e) => {
            button.classList.add('active')
            
            const product = DATABASE.filter(e => e.id === +button.dataset.id)
            if(!cart.includes(product[0])){
                cart.push(product[0])   
            }
               
            console.log(cart)

            addCartToLocalStorage(cart) 

            basketNotification()
        })  
        
    });
    return cart
}









