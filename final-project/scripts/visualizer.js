// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com

let speech_recognized = null;
let volume;
let button_status = false;
let button_clicked = false;

//if the button is clicked, change the color of background and some texts to maintain contrast and readability
btn.addEventListener('click', () => {
  userStartAudio();
  button_status = !button_status;
  button_clicked = true;
  if (button_status) {
    document.querySelector("h1").setAttribute("class", "hide-keep-space");
    document.querySelector("p").style.color = "white";
    document.querySelector("#reflection-signal").style.color = "white";
    document.querySelector("#color-picker-label").style.color = "white";
  }
  else {
    background("white");
    document.querySelector("h1").removeAttribute("class", "hide-keep-space");
    document.querySelector("p").style.color = "black";
    document.querySelector("#reflection-signal").style.color = "black";
    document.querySelector("#color-picker-label").style.color = "black";
  }
  setup();
})

//take the result from the sound classification 
function updateSpeech() {
  volume = input.getLevel();

  // if it is recognized, draw the text in the background
  if (to_be_shown && speech_recognized == null && volume > 0.004) {
    speech_recognized = to_be_shown;
    drawText();
  }

  // if the sound if too low or not detected, do not run drawText(), only run draw() to draw normal shapes
  else {
    speech_recognized = null;
    to_be_shown = null;
  }
}


//draw circles based on the volume of the sound
function draw() {
  speech_recognized = null;
  updateSpeech();
  let threshold = 0.01;
  if ((!speech_recognized && !button_clicked) || (!speech_recognized && button_status)) {
    // Get the overall volume (between 0 and 1.0)
    //augment the value for higher contrast in sizes between different volumes
    aug_volume = volume * 1.51;
    // The louder the volume, the larger the circle is.
    if (aug_volume > threshold) {
      noStroke();
      fill(selectedColor);
      let x = random(width);
      let y = random(height);
      let length;

      //breakpoint of the volume
      //manipulate the volume to enhance the contrast in sizes among various volumes.
      if (aug_volume > 0.3) { //loud
        length = aug_volume * 800 + 200;
      }
      else if (aug_volume > 0.15) { //medium volume
        length = (aug_volume * 400) * 1.5;
      }
      else { //low volume
        length = aug_volume * 400;
      }
      circle(x, y, length, length);
      setTimeout(() => {
        stroke('black');
        fill('black');
        circle(x, y, length, length);
      }, 1000);
    }
  } 

  // Graph the overall potential volume, w/ a line at the threshold
  let y = map(aug_volume, 0, 1, height, 0);
  let ythreshold = map(threshold, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height - 10);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold - 10, 19, ythreshold - 10);
  // console.log(millis() - timer);
}

//if a speech is detected, draw the text instead
function drawText() {
  if (!button_clicked || button_status){
    let x = random(width);
    let y = random(height);
    let aug_volume = volume * 1.2;
    let length = (aug_volume * 800) + 200;
    let shown_speech = speech_recognized;
    fill(selectedColor);
    stroke('black');
    textSize(length);
    text(shown_speech, x, y);
    setTimeout(() => {
      stroke('black');
      fill('black');
      textSize(length);
      text(shown_speech, x, y);
    }, 1000);
  }
}