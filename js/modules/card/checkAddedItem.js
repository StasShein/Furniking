export function cheachAddedItem(){
    const buttonBuy = document.querySelectorAll('.item_buy')

    buttonBuy.forEach(e=>{
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
    
        cartLocalStorage.forEach(el=>{
            if(+e.dataset.id === el.id){
                e.classList.add('active')
                e.style.backgroundImage = 'url(../../../img/card/done.png)'
            }
        })
    })   
}

