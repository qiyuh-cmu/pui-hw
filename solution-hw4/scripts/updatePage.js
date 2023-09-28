const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');
const base_Price = rolls[rollType].basePrice;
const image_File = rolls[rollType].imageFile;

function updatePage(){
  // Update the header text
  const headerElement = document.querySelector('#header-text');
  headerElement.innerText = rollType +" Cinnamon Roll";

  // Update the image
  const imgElement = document.querySelector('#detail-img');
  imgElement.src = "../assets/products/" + image_File;

  // Update the basePrice
  const price = document.querySelector('#calculated-price');
  price.innerText = base_Price;
} 

updatePage();