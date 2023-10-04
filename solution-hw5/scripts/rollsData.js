let cart = [];

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

// a list of glazing object
let all_glazing_options = [
    {
        name: "Keep original",
        price_adaptation: 0.00,
    },
    {
        name: "Sugar milk",
        price_adaptation: 0.00,
    },
    {
        name: "Vanilla milk",
        price_adaptation: 0.50,
    }, 
    {
        name: "Double chocolate",
        price_adaptation: 1.50,
    },
];
  
// a list of packSize object
let packSize_options = [
    {
      name: "1",
      price_adaptation: 1,
    },
    {
      name: "3",
      price_adaptation: 3,
    },
    {
      name: "6",
      price_adaptation: 5,
    }, 
    {
      name: "12",
      price_adaptation: 10,
    },
];

class Roll {
    rollType;
    rollGlazing;
    packSize;
    basePrice;
    imageFile;
    calculated_price;
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.rollType = rollType;
        this.rollGlazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
}
