import { renderItems } from "./modules/card/render.js";

import { getCardBasket } from "./modules/basket/getCardBasket.js";

import { deleteBasketItem } from "./modules/basket/deleteBasketItem.js";

import { countPrice } from "./modules/basket/countPrice.js";

import"./modules/basket/countPrice.js";

import "./modules/basket/deleteBasketItem.js";

import "./modules/payment.js"

import './modules/basket/openClosePayment.js'



const basketArr = JSON.parse(localStorage.getItem('cart'))

const basketList = document.querySelector('.basket__list')

if(JSON.parse(localStorage.getItem('cart')).length === 0){
    basketList.style.backgroundImage = 'url(../../img/basket/bg-cat.png)'
}


renderItems(basketArr, basketList, getCardBasket)

countPrice()

deleteBasketItem()












