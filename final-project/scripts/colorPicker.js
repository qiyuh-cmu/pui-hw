let colorPicker;
const defaultColor = "#0000ff";
let selectedColor;

window.addEventListener("load", startup, false);

//handles the activation and deactivation of the toggle button
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", update, false);
  colorPicker.select();
}

function update(event) {
  selectedColor = event.target.value;
}