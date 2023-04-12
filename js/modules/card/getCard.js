export function getCard(img, category, name, price, rating, type, oldPrice, id) {
    const card = document.createElement('div');
    card.classList.add('product__card', `after--${type}`);
    card.dataset.num = id
    card.innerHTML = 
        `<div class="item__image"> 
            <img src=${img} alt="img">
            <div class="item_button">
                <img class="item_wish" src='./img/card/heart.png' alt='wish'>
                <br>
                <div class="item_buy" data-id="${id}">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                </div>    
            </div>  
        </div>

        <p>
            ${category}
        </p>

        <p class="item__name text--s">
            ${name}
        </p>

        <p class="item__price text--xs">
            $ ${price} 
        </p>
        
        <p class="item__price--old text--xs"> 
            ${oldPrice}
        </p>

        <p class="rating"> 
            Rating: ${rating}
        </p>`;

    return card;
}