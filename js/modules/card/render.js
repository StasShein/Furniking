import { getCard } from "./getCard.js";

export const renderItems = (database, container, funcName) => {
    const elements = database.map(({ img, category, name, price, rating, type, oldPrice, id }) => {
        
        return funcName(img, category, name, price, rating, type, oldPrice, id);
    });
    container.replaceChildren(...elements);   
}
    



