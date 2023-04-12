export {
    sortRender
}

import { renderItems } from "./render.js"
import { 
    DATABASE,
    trendingBest,
    trendingNew,
    trendingTop,
} from "./DATABASE.js"
import { getCard } from "./getCard.js"


const trendingPlaceTop = document.querySelector('.trending__product__list--top')

const trendingPlaceNew = document.querySelector('.trending__product__list--new')

const trendingPlaceBest = document.querySelector('.trending__product__list--best')

const trendingList = document.querySelectorAll('.trending__list')


function sortRender(sortElement, typeBase, place){

    sortElement.forEach(element => {

        renderItems(
            eval(`${typeBase}${element.dataset.type}`), 
            eval(`${place}${element.dataset.type}`), 
            getCard
        )
        
        element.addEventListener('click', ()=>{
            sortElement.forEach(el => { el.classList.remove('sort--active');});
            
            element.classList.add('sort--active')

            trendingList.forEach(item => {item.style.display = 'none'})

            eval(`${place}${element.dataset.type}`).style.display = 'grid'
        })    
    })
}
