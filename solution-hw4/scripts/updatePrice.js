const basePrice = Number(document.querySelector('#calculated-price').innerText);
let glazingPrice = 0.00;
let packPrice = 1;
let totalPrice;
let glazingOptionsElement = document.querySelector('#glazingOptions');
let sizeOptionsElement = document.querySelector('#sizeOptions');

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

let selected_glazing = all_glazing_options[0].name;
let selected_packSize = packSize_options[0].name;


function generateDropDown(object, element){
  for (let i = 0; i < object.length; i += 1){
    let option = document.createElement('option');
    option.text = object[i].name;
    option.value = i;
    element.add(option);
  }
}

function glazingChange(element) {
  // get value of selected glazing option
  const index = parseInt(element.value);
  selected_glazing = all_glazing_options[index].name;
  glazingPrice = all_glazing_options[index].price_adaptation;
  display_price();
}

function sizeChange(element) {
  // get value of selected glazing option
  const index = parseInt(element.value);
  selected_packSize = packSize_options[index].name;
  packPrice = packSize_options[index].price_adaptation;
  display_price();
}

function display_price(){
  totalPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  // console.log("(" + basePrice + " + " + glazingPrice + ")" + " * " + packPrice + " = " + totalPrice);
  let total_price = document.querySelector('#calculated-price');
  total_price.innerText = "$ "+ totalPrice.toString();
}


generateDropDown(all_glazing_options,glazingOptionsElement);

generateDropDown(packSize_options,sizeOptionsElement);

display_price();
