// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
let input;
let analyzer;
let timer = 0;
let interval = 5000 // 2 seconds
const btn = document.querySelector('.round');
let button_status = false;
let colorPicker;
let selectedColor = "yellow";

// window.addEventListener("load", startup, false);

btn.addEventListener('click', () => {
  userStartAudio();
  button_status = !button_status;
  setup();
})

function setup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = selectedColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.select();
  createCanvas(windowWidth, windowHeight);
  if (!button_status){
    background("white");
  }else{
    background("black");
  }
  // Create an Audio input
  input = new p5.AudioIn();
  input.start();
  classifier.classify(gotResult);
}

function updateFirst(event) {
  selectedColor = event.target.value;
}


function draw() {
  // Get the overall volume (between 0 and 1.0)
  let volume = input.getLevel()*1.5;
  // The louder the volume, the larger the rectangle.
  let threshold = 0.01;
  if (volume > threshold) {
    noStroke();
    fill(selectedColor);
    let x = random(width);
    let y = random(height);
    let length;
    if (volume>0.08){
      length = volume * 800+200;
      console.log("loud")
    }
    else if (volume>0.03){
      length = (volume * 400)*1.5;
      console.log("mid")
    }
    else{
      length = volume * 200;
      console.log("low")
    }
    rect(x, y, length, length);
    setTimeout(() => {
      noStroke();
      fill('black');
      rect(x, y, length, length);
    }, 1000);
  }

  // Graph the overall potential volume, w/ a line at the threshold
  let y = map(volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
  // console.log(millis() - timer);

}

