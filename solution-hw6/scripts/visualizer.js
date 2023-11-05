// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com
let input;
let analyzer;
let timer = 0;
let interval = 5000 // 2 seconds

const btn = document.querySelector('#logo');
  btn.addEventListener('click', () => {
    setup();
  })

function setup() {
  console.log("button clicked")
  bg = createCanvas(710, 200);
  background(255);

  // Create an Audio input
  input = new p5.AudioIn();
  
  input.start();

}

function draw() {
  // Get the overall volume (between 0 and 1.0)
  let volume = input.getLevel();

  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  let threshold = 0.01;
  if (volume > threshold) {
    noStroke();
    fill(0, 100);
    let x = random(40, width);
    let y = random(height);
    rect(x, y, volume * 50, volume * 50);
    setTimeout(() => {
      noStroke();
      fill('white');
      rect(x, y, volume * 50, volume * 50);
    }, 2000);
    // if (millis() - timer > interval) {
    //   timer=millis();
    //   console.log('do something');
    //   fill('white');
    // }
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

