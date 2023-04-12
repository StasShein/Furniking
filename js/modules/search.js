import { DATABASE } from "./card/DATABASE.js";

import { renderItems } from "./card/render.js";

const searchInput = document.querySelector('.top__bar__sections__search');

const searchResult = document.querySelector('.top__bar__sections__search--result');

let result;

searchInput.addEventListener('input', () => {

    searchResult.style.display = 'block'

    result = DATABASE.filter((element) => element.name.toLowerCase().includes(searchInput.value.toLowerCase()))

    renderItems(result, searchResult, getCardSearch)

})

searchInput.addEventListener('blur', ()=>{
    searchResult.style.display = 'none'
})


function getCardSearch(img, category, name, price, rating, type, oldPrice, id) {
    const card = document.createElement('div');
    card.classList.add('item__result');
    card.dataset.num = id
    card.innerHTML = 
        `<div class="item__result">
            <img src="../../img/item_image/${img}" alt="img">
            <p>${category}</p>
            <p>${name}</p>
            <p>$${price}</p>
        </div>`;

    return card;
}