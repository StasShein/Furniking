export{
    countPrice,
    mainSumma,
    allPrice
}

let mainSumma = 0;

let number = 1;

const allPrice = document.querySelector('.all--price')

function showPrices(e){

    e.children[1].innerText = number

    e.children[3].innerText += '$'

    allPrice.innerText = `Total Price: ${mainSumma}$`
}

function countPrice(){

    const amountButton = Array.from(document.querySelectorAll('.cart__amount'))

    amountButton.forEach(e=>{

        const cost = e.children[3].innerText;
    
        let summa= 0 + +cost;
        
        mainSumma += +cost
        
        showPrices(e)
    
        e.children[0].addEventListener('click',()=>{
            if(number > 1){
    
                number -= 1
                e.children[3].innerText = summa -= +cost
    
                mainSumma -= +cost
    
                showPrices(e)
            }
        })
            
        
        e.children[2].addEventListener('click',()=>{
    
            number += 1
    
            mainSumma += +cost
            
            e.children[3].innerText = summa += +cost
    
            showPrices(e)
        }) 
    })  
    
    allPrice.innerText = `Total Price: ${mainSumma}$`
}
 
