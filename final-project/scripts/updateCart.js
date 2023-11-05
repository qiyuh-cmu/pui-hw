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
  saveToLocalStorage();
  updateTotalPrice();
}

function updateTotalPrice(){
  const totalPriceElement = document.querySelector('#total-price');
  totalPriceElement.innerText = "$ " + calculatedTotalPrice();
}


function calculatedTotalPrice(){
  let totalPrice = 0.00;
  for (roll of cart){
    // console.log(totalPrice);
    // console.log(parseFloat(roll.calculatedPrice));
    totalPrice = ((parseFloat(totalPrice)+parseFloat(roll.calculatedPrice))).toFixed(2);
    // console.log(totalPrice);
    // console.log("-----");
  }
  return totalPrice;
}

if (cart != null) { //retrieveCart() is called in rollsData.js
  for (let index = 0; index < cart.length; index++) {
    createElement(cart[index]);
  }
}

updateTotalPrice();
