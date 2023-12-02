// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
let input;
let analyzer;
let timer = 0;
let interval = 5000 // 2 seconds
const btn = document.querySelector('.round');
let button_status = false;
let patternColor = "yellow";

btn.addEventListener('click', () => {
  userStartAudio();
  button_status = !button_status;
  setup();
})

function setup() {
    console.log("button clicked");
    createCanvas(windowWidth, windowHeight);
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
    // canvas = document.querySelector("canvas");
    // canvas.width = document.body.clientWidth; //document.width is obsolete
    // canvas.height = document.body.clientHeight; //document.height is obsolete
    // canvasW = canvas.width;
    // canvasH = canvas.height;
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

function draw() {
  patternColor = selectedColor;
  // Get the overall volume (between 0 and 1.0)
  // console.log(to_be_shown);
  let volume = input.getLevel()*1.5;
  console.log(volume);
  console.log(patternColor);
  // for (let i = 0; i< spectrum.length; i++){
  //   if (spectrum[i]!=0){
  //     console.log(spectrum[i]);
  //   }
  // }
  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  let threshold = 0.01;
  if (volume > threshold) {
    noStroke();
    fill(patternColor);
    let x = random(width);
    let y = random(height);
    let length;
    if (volume>0.08){
      length = volume * 800+200;
      console.log("!!!!!")
    }
    else if (volume>0.03){
      length = (volume * 400)*1.5;
    }
    else{
      length = volume * 200;
    }
    console.log("length")
    console.log(volume,length)
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

