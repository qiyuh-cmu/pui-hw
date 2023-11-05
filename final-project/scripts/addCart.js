const button = document.querySelector('#add-to-cart');

function addNewRoll() {
  const roll = new Roll(rollType, selected_glazing, selected_packSize, basePrice);
  roll.imageFile = "../assets/products/"+ rolls[rollType].imageFile;
  roll.updateGlazingPrice();
  roll.updatePackPrice();
  roll.updatePrice();
  cart[cart.length] = roll;
  saveToLocalStorage();
}

button.addEventListener('click', addNewRoll);
