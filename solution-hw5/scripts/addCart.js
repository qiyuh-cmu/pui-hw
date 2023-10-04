const button = document.querySelector('#add-to-cart');

function addNewRoll() {
  // Create a new Roll object. 
  const roll = new Roll(rollType, selected_glazing, selected_packSize, basePrice);
  roll.calculated_price = calculated_price;
  roll.imageFile = "../assets/products/"+ rolls[rollType].imageFile;
  console.log(roll);
  // Add the Roll object to our cart array, which keeps track of all Rolls
  cart.push(roll);
  return cart;
}

button.addEventListener('click', addNewRoll());
