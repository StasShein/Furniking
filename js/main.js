import { 
    DATABASE,
    trendingTop,
    trendingBest,
    trendingNew
} from "./modules/card/DATABASE.js";

import { renderItems } from "./modules/card/render.js";

import { sortRender } from "./modules/card/sort_card.js";

import "./modules/card/addToCart.js";

import { createCartArr } from "./modules/card/addToCart.js";

import { nextSlide } from "./modules/testimonials.js";

import "./modules/login/login.js";

import { getCard } from "./modules/card/getCard.js";

import './modules/search.js';

import { cheachAddedItem } from "./modules/card/checkAddedItem.js";

const ourProducts = document.querySelector('.our__products__list');

renderItems(DATABASE, ourProducts, getCard);

const trendingSortElements = document.querySelectorAll('.trending__categories__sort');

sortRender(trendingSortElements, 'trending', 'trendingPlace');

const news = document.querySelectorAll('.blogs__articles__news');

news.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.toggle('increase_block')
    })
});

createCartArr();

setInterval(nextSlide, 5000);

cheachAddedItem();
