export {
    DATABASE,
    trendingBest,
    trendingNew,
    trendingTop,
}

let DATABASE = [
    
    {  
        id: 9,
        img: './img/item_image/bench853.png',
        category: 'BENCH',
        name: 'Amalia Cowhide Bench',
        price: 130,
        oldPrice: 150,
        rating: 3.5,
        type: 'sale',
    },

    {  
        id: 10,
        img: './img/item_image/chair572.png',
        category: 'CHAIR',
        name: 'Acacia Wood Club Chairs',
        price: 100,
        oldPrice: 120,
        rating: 4.5,
        type: '30',
    },

    {  
        id: 11,
        img: './img/item_image/chair745.png',
        category: 'CHAIR',
        name: 'Minimal LCD chair',
        price: 180,
        oldPrice: 250,
        rating: 4.0,
        type: 'sale',
    },

    {  
        id: 12,
        img: './img/item_image/furniture365.png',
        category: 'FURNITURE',
        name: 'Delicia 3 Piece Living Room',
        price: 320,
        oldPrice:'',
        rating: 4.1,
        type: 'new',
    },

    {  
        id: 13,
        img: './img/item_image/sofa185.png',
        category: 'SOFA',
        name: 'Microfiber Sofa',
        price: 130,
        oldPrice: 150,
        rating: 4.1,
        type: '30',
    },

    {  
        id: 14,
        img: './img/item_image/sofa512.png',
        category: 'SOFA',
        name: 'Modern Sofa',
        price: 120,
        oldPrice:'',
        rating: 3.5,
        type: 'new',
    },

    {  
        id: 15,
        img: './img/item_image/storage152.png',
        category: 'STORAGE',
        name: 'Juno-Hinged Lid Storage',
        price: 180,
        oldPrice:'',
        rating: 4.8,
        type: 'new',
    },

    {  
        id: 16,
        img: './img/item_image/table361.png',
        category: 'TABLE',
        name: 'Wood Coffee Tables',
        price: 100,
        oldPrice: 120,
        rating: 4.8,
        type: 'sale',
    },

    {  
        place: 'trending',
        id: 1,
        img: './img/item_image/chair121.png',
        category: 'CHAIR',
        name: 'Minimal LCD chair',
        price: 180,
        oldPrice:'',
        rating: 4.5,
        type: 'new',
    },

    {  
        place: 'trending',
        id: 2,
        img: './img/item_image/chair332.png',
        category: 'CHAIR',
        name: 'Minimal iconic chair',
        price: 120,
        oldPrice: '',
        rating: 4.5,
        type: 'new',
    },

    {  
        place: 'trending',
        id: 3,
        img: './img/item_image/chair432.png',
        category: 'CHAIR',
        name: 'Dining chairs',
        price: 100,
        oldPrice: 120,
        rating: '',
        type: 'sale',
    },


    {  
        place: 'trending',
        id: 4,
        img: './img/item_image/chair946.png',
        category: 'CHAIR',
        name: 'Buskbo armchair',
        price: 130,
        oldPrice: 180,
        rating: 4.9,
        type: 'sale',
    },

    {  
        place: 'trending',
        id: 5,
        img: './img/item_image/chair010.png',
        category: 'CHAIR',
        name: 'Modern chairs',
        price: 100,
        oldPrice: 120,
        rating: 3.9,
        type: 'sale',
    },

    {  
        place: 'trending',
        id: 6,
        img: './img/item_image/chair825.png',
        category: 'CHAIR',
        name: 'Plastic dining chair',
        price: 130,
        oldPrice: 150,
        rating: 4.0,
        type: 'sale',
    },

    {  
        place: 'trending',
        id: 7,
        img: './img/item_image/chair156.png',
        category: 'CHAIR',
        name: 'Minimal Wood chair',
        price: 180,
        oldPrice: '',
        rating: 3.2,
        type: 'new',
    },

    {  
        place: 'trending',
        id: 8,
        img: './img/item_image/chair647.png',
        category: 'CHAIR',
        name: 'Elegant wood chair',
        price: 120,
        oldPrice:'',
        rating: 4.4,
        type: 'new',
    },
]

const trendingAll = DATABASE

const trendingTop = trendingAll.filter((element) => {return element.place === 'trending'})

const trendingNew = trendingAll.filter((element) => {return element.type === 'new'})

const trendingBest = trendingAll.filter((element) => {return element.rating > 4.0})

function controlLength(item){
    if(item.length > 8){
        item.length = 8
    }
}

controlLength(trendingTop)
controlLength(trendingBest)
controlLength(trendingNew)
