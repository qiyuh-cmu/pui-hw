//https://github.com/interactive-structures/pui-materials/blob/main/in-lab-examples/puinote-lab05/puinote-end/js/app.js
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
  priceElement.innerText = "$ "+roll.calculated_price;
}

function deleteRoll(roll) {
  // remove the roll DOM object from the UI
  roll.element.remove();
  // remove the actual Notecard object from our set of notecards
  cart.delete(roll);
}

for (let index = 0; index < cart.length; index++) {
  console.log(cart[index]);
  createElement(cart[index]);
}