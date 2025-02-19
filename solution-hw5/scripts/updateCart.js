console.log("The outputs in the console here are for testing purpose, if you don't want to see them please delete all console.log() lines in the updateCart.js file")
function addNewRoll(rollType, selected_glazing, selected_packSize, basePrice) {
  // Create a new Roll object. 
  const roll = new Roll(rollType, selected_glazing, selected_packSize, basePrice);
  roll.imageFile = "../assets/products/"+ rolls[rollType].imageFile;
  roll.updateGlazingPrice();
  roll.updatePackPrice();
  roll.updatePrice();
  // Add the Roll object to our cart array, which keeps track of all Rolls
  cart.push(roll);
}


//used sample code from class repository: https://github.com/interactive-structures/pui-materials/blob/main/in-lab-examples/puinote-lab05/puinote-end/js/app.js
function createElement(roll) {
  // make a clone of the roll template
  const template = document.querySelector('#checkout-template');
  const clone = template.content.cloneNode(true);
  
  // connect this clone to our roll.element
  roll.element = clone.querySelector('.checkout-flex');
  const btnDelete = roll.element.querySelector('#btn-delete');
  btnDelete.addEventListener('click', () => {
    deleteRoll(roll);
  });
  
  // add the roll clone to the DOM
  // find the roll parent and add ours as its child
  const rollListElement = document.querySelector('#checkout-list');
  rollListElement.prepend(roll.element);
  
  // populate the roll clone with the actual roll content
  updateElement(roll);
}

function updateElement(roll) {
  // get the HTML elements that need updating
  const rollImageElement = roll.element.querySelector('img.checkout');
  const rollTypeElement = roll.element.querySelector('#checkout-rollType');
  const rollGlazingElement = roll.element.querySelector('#checkout-rollGlazing');
  const packSizeElement = roll.element.querySelector('#checkout-packSize');
  const priceElement = roll.element.querySelector('.checkout-price');
  // copy our roll content over to the corresponding HTML elements
  rollImageElement.src = roll.imageFile;
  rollTypeElement.innerText = roll.rollType + " cinnamon roll";
  rollGlazingElement.innerText = "Glazing: "+roll.rollGlazing;
  packSizeElement.innerText = "Pack Size: "+roll.packSize;
  priceElement.innerText = "$ "+roll.calculatedPrice;
}

function deleteRoll(roll) {
  // remove the roll DOM object from the UI
  roll.element.remove();
  // remove the actual roll object from our set of rolls
  cart.splice(cart.indexOf(roll),1);
  updateTotalPrice();
  console.log(cart);
}

function updateTotalPrice(){
  const totalPriceElement = document.querySelector('#total-price');
  totalPriceElement.innerText = "$ " + calculatedTotalPrice();
}


function calculatedTotalPrice(){
  let totalPrice = 0.00;
  console.log("---for loop to calculate final price---");
  for (roll of cart){
    console.log(totalPrice+"+"+ (parseFloat(roll.calculatedPrice))) ;
    totalPrice = totalPrice+(parseFloat(roll.calculatedPrice));
  }
  console.log("total: "+ totalPrice);
  return totalPrice;
}

addNewRoll("Original", "Sugar milk", 1, 2.49);
addNewRoll("Walnut", "Vanilla milk", 12, 3.49);
addNewRoll("Raisin", "Sugar milk", 3, 2.99);
addNewRoll("Apple", "Original", 3, 3.49);

console.log(cart);

for (let index = 0; index < cart.length; index++) {
  createElement(cart[index]);
}
updateTotalPrice();
