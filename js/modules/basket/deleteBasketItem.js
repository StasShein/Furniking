import { allPrice } from "./countPrice.js"

export function deleteBasketItem(){

    const deleteButton = document.querySelectorAll('.button__delete')

    let cart = JSON.parse(localStorage.getItem('cart'))

    deleteButton.forEach(e => {
    
        e.addEventListener('click', (el)=>{
    
            el.srcElement.parentElement.parentElement.parentElement.remove()
            
            cart.forEach(element => {
    
                if(+el.srcElement.dataset.id === +element.id){
    
                    cart = cart.filter(item => +item.id !== element.id)
                    localStorage.removeItem('cart')
                    localStorage.setItem('cart', JSON.stringify(cart))
    
                    location.reload()   
                }
            })
            
        })
    })

}


