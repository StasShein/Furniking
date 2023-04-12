export function getCardBasket(img, category, name, price, rating, type, oldPrice, id) {
    const card = document.createElement('div');
    card.classList.add('item__result');
    card.dataset.num = id
    card.innerHTML = 
        `<div class="basket__list__cart">
                
            <div class="cart__image">
                <img src="${img}" alt="img" >
            </div>

            <div class="cart__text">
                <h3> ${category} </h3> 

                <p> ${name}</p>

                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>

                <p class="cart__text--info">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </p>
            </div>

            <div class="cart__amount">

                <div class="cart__amount--minus">
                    <img src="./img/basket/left-slide.png" alt="img">
                </div>

                <div class="cart__amount--number">
                    
                </div>

                <div class="cart__amount--plus">
                    <img src="./img/basket/right-slide.png" alt="img">
                </div>

                <p class="cart__price">
                    ${price}
                </p>
            </div>

            <div class="cart__delete">
                <img data-id="${id}" class="button__delete" src="./img/basket/delete.png" alt="delete">
            </div>

        </div>`;

    return card;
}