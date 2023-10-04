const button = document.querySelector('#add-to-cart');

function onClickAdd() {
  const roll = new Roll(rollType, selected_glazing, selected_packSize, basePrice);
  cart[cart.length] = roll;
  console.log(cart);
}

button.addEventListener('click', onClickAdd);
