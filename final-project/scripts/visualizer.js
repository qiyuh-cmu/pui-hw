// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com


// window.addEventListener("load", startup, false);

let speech_recognized=null;
let volume;
let button_status = false;

btn.addEventListener('click', () => {
  userStartAudio();
  button_status = !button_status;
  if (button_status){
    document.querySelector("h1").setAttribute ("class", "hide");
    document.querySelector("p").style.color="white";
    document.querySelector("#color-picker-label").style.color="white";
  }
  else {
    document.querySelector("h1").removeAttribute ("class", "hide");
    document.querySelector("p").style.color="black";
    document.querySelector("#color-picker-label").style.color="black";
  }
  setup();
})



function updateSpeech(){
  volume = input.getLevel();
  console.log(volume);
  if (to_be_shown && speech_recognized==null && volume>0.004){
    speech_recognized = to_be_shown;
    console.log("!!!!!!detected: " + speech_recognized);
    drawText();
  }
  else if (volume<0.004) {
    speech_recognized = null;
    to_be_shown = null;
    console.log("xxxxxxxtoo low");
  }
  else {
      speech_recognized = null;
      to_be_shown = null;
      console.log("not detected");
    // console.log(speech_recognized);
  }
}


function draw() {
  speech_recognized = null;
  updateSpeech();
  let threshold = 0.01;
  if (!speech_recognized){
    // Get the overall volume (between 0 and 1.0)
    aug_volume = volume*1.5;
    // The louder the volume, the larger the rectangle.
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
      // if (speech_recognized){
      //   let shown_speech = speech_recognized;
      //   textSize(length);
      //   text(shown_speech, x, y);
      //   setTimeout(() => {
      //     noStroke();
      //     fill('black');
      //     textSize(length);
      //     text(shown_speech, x, y);
      //   }, 1000);
      // }
      // else {
        rect(x, y, length, length);
        setTimeout(() => {
          noStroke();
          fill('black');
          rect(x, y, length, length);
        }, 1000);
      // }
    }
  }99

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


function drawText(){
  for (let i=0; i<=5;i++){
    let x = random(width);
    let y = random(height);
    let aug_volume = volume*1.5;
    let length = (aug_volume *800)+200;
    let shown_speech = speech_recognized;
    fill(selectedColor);
    stroke('black');
    textSize(length);
    text(shown_speech, x, y);
    setTimeout(() => {
      noStroke();
      fill('black');
      textSize(length);
      text(shown_speech, x, y);
    }, 1000);
  }
}