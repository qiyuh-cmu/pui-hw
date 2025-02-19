// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Sound classification using SpeechCommands18w and p5.js
This example uses a callback pattern to create the classifier
=== */

// Initialize a sound classifier method with SpeechCommands18w model. A callback needs to be passed.

let classifier;
// Options for the SpeechCommands18w model, the default probabilityThreshold is 0
const options = { probabilityThreshold: 0.7 };
// Two variable to hold the label and confidence of the result
let label;
let confidence;
let to_be_shown = null; //whether a speech is detected and to be shown on the screen
let input;
let analyzer;
let timer = 0; 
let interval = 5000 // 2 seconds
const btn = document.querySelector('.round');
let colorPicker;
let selectedColor = "#FFFF00";

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

function preload() {
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier('SpeechCommands18w', options);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  }
  // The results are in an array ordered by confidence.
  //results[0].label is the detected speech
  //nf(results[0].confidence, 0, 2) is the estimated accuracy of detection given by the model
  if(nf(results[0].confidence, 0, 2)>0.98 && (results[0].label=="one" || results[0].label=="two" || results[0].label=="three")){ // only let it detect three numbers to prevent accident errors
    let detected = nf(results[0].confidence, 0, 2);
    to_be_shown = results[0].label;
  }else {
    to_be_shown = null;
  }
}
