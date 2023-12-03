// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
let input;
let analyzer;
let timer = 0;
let interval = 5000 // 2 seconds
const btn = document.querySelector('.round');
let button_status = false;
let colorPicker;
let selectedColor = "#FFFF00";
let speech_recognized=null;
let volume;

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

function updateSpeech(){
  if (to_be_shown && volume>0.002){
    speech_recognized = to_be_shown;
    console.log(speech_recognized);
  }
  if (volume<0.004) {
    speech_recognized = null;
  }
  // console.log("volume:"+volume);
}

function updateFirst(event) {
  selectedColor = event.target.value;
}


function draw() {
  updateSpeech();
  // Get the overall volume (between 0 and 1.0)
  volume = input.getLevel()
  aug_volume = volume*1.5;
  // The louder the volume, the larger the rectangle.
  let threshold = 0.01;
  if (aug_volume > threshold) {
    noStroke();
    fill(selectedColor);
    let x = random(width);
    let y = random(height);
    let length;
    if (aug_volume>0.08){
      length = aug_volume * 800+200;
      // console.log("loud");
    }
    else if (aug_volume>0.03){
      length = (aug_volume * 400)*1.5;
      // console.log("mid");
    }
    else{
      length = aug_volume * 400;
      // console.log("low");
    }
    if (speech_recognized){
      let shown_speech = speech_recognized;
      textSize(length);
      text(shown_speech, x, y);
      setTimeout(() => {
        noStroke();
        fill('black');
        textSize(length);
        text(shown_speech, x, y);
      }, 1000);
    }
    else {
      rect(x, y, length, length);
      setTimeout(() => {
        noStroke();
        fill('black');
        rect(x, y, length, length);
      }, 1000);
    }
  }

  // Graph the overall potential volume, w/ a line at the threshold
  let y = map(aug_volume, 0, 1, height, 0);
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

