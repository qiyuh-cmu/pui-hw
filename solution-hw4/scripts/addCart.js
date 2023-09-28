let cart = [];
const button = document.querySelector('#add-to-cart');

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

function onClickAdd() {
  const roll = new Roll(rollType, selected_glazing, selected_packSize, basePrice);
  cart[cart.length] = roll;
  console.log(cart);
}

button.addEventListener('click', onClickAdd);
