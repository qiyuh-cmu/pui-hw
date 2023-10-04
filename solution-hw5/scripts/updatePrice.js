const basePrice = Number(document.querySelector('#calculated-price').innerText);
let glazingPrice = 0.00;
let packPrice = 1;
let calculated_price;
let glazingOptionsElement = document.querySelector('#glazingOptions');
let sizeOptionsElement = document.querySelector('#sizeOptions');
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

function calculatedPrice(basePrice,glazingPrice, packPrice){
  let price = ((basePrice + glazingPrice) * packPrice).toFixed(2);
  return  price;
}
function display_price(){
  calculated_price = calculatedPrice(basePrice,glazingPrice, packPrice);
  // console.log("(" + basePrice + " + " + glazingPrice + ")" + " * " + packPrice + " = " + price_element);
  let price_element = document.querySelector('#calculated-price');
  price_element.innerText = "$ "+ calculated_price.toString();
}


generateDropDown(all_glazing_options,glazingOptionsElement);

generateDropDown(packSize_options,sizeOptionsElement);

display_price();
