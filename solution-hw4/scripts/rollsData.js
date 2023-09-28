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

let cart;
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const name = rollType + " Cinnamon Roll";
const base_Price = rolls[rollType].basePrice;
const image_File = rolls[rollType].imageFile;
console.log(name);
console.log(base_Price);
console.log(image_File);

// Update the header text
const headerElement = document.querySelector('#header-text');
headerElement.innerText = name;

// Update the image
const imgElement = document.querySelector('#detail-img');
imgElement.src = "../assets/products/" + image_File;

// Update the basePrice
const price = document.querySelector('#calculated-price');
price.innerText = base_Price;