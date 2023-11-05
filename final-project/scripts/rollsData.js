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
    glazingPrice;
    packSize;
    packPrice
    basePrice;
    imageFile;
    calculatedPrice;
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.rollType = rollType;
        this.rollGlazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
    updateGlazingPrice(){
        let found=false;
        if (this.rollGlazing == "Original"){
            this.glazingPrice=all_glazing_options[0]["price_adaptation"];
        }
        else {
            for (const glazing_option of all_glazing_options){
                if (glazing_option["name"] == this.rollGlazing){
                    this.glazingPrice=glazing_option["price_adaptation"];
                    found = true;
                }
            }
            if (found==false){
                alert("cannot find the glazing price of "+this.rollType);
            }
        }
    }

    updatePackPrice(){
        let found=false;
        for (const packSize_option of packSize_options){
            if (packSize_option["name"] == this.packSize){
                this.packPrice = packSize_option["price_adaptation"];
                found = true;
            }
        }
        if (found==false){
            alert("cannot find the glazing price of "+this.rollType);
        }
    }

    updatePrice(){
        this.calculatedPrice = ((this.basePrice + this.glazingPrice) * this.packPrice).toFixed(2);
        // console.log("(" + this.basePrice + " + " + this.glazingPrice + ")" + " * " + this.packPrice + " = " + this.calculatedPrice);
    }
}

//If no cart exists in the storage, create an empty cart array.
function retrieveCart() {
    //attempt to retrieve the cart from the local storage. 
    const rollArrayString = localStorage.getItem('cart');
    cart = JSON.parse(rollArrayString);
    console.log(JSON.parse(localStorage.getItem('cart')));
}

function saveToLocalStorage() {  
    const rollArrayString = JSON.stringify(cart);
    localStorage.setItem('cart', rollArrayString);
    console.log(JSON.parse(localStorage.getItem('cart')));
  }

// When the page loads, attempt to retrieve the cart from the local storage. If no cart exists in the storage, create an empty cart array.
if (localStorage.getItem('cart') != null) {
    retrieveCart();
}

