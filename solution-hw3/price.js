const basePrice = 2.49;
let glazingPrice = 0.00;
let packPrice = 1;
let totalPrice;

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
    name: "Vinilla milk",
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

let glazingOptionsElement = document.querySelector('#glazingOptions');
updateDropDown(all_glazing_options,glazingOptionsElement);

let sizeOptionsElement = document.querySelector('#sizeOptions');
updateDropDown(packSize_options,sizeOptionsElement);

display_price();

function updateDropDown(object, element){
  for (let i = 0; i < object.length; i += 1){
    var option = document.createElement('option');
    option.text = object[i].name;
    option.value = i;
    element.add(option);
  }
}

function glazingChange(element) {
  // get value of selected glazing option
  let index = parseInt(element.value);
  let selected_glazing = all_glazing_options[index];
  glazingPrice = selected_glazing.price_adaptation;
  display_price();
}

function sizeChange(element) {
  // get value of selected glazing option
  let index = parseInt(element.value);
  let selected_packSize = packSize_options[index];
  packPrice = selected_packSize.price_adaptation;
  display_price();
}

function display_price(){
  totalPrice = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  // console.log("(" + basePrice + " + " + glazingPrice + ")" + " * " + packPrice + " = " + totalPrice);
  let total_price = document.querySelector('#total_price');
  console.log(total_price);
  total_price.innerText = "$ "+ totalPrice.toString();
}