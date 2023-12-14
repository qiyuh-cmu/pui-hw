
document.querySelector('#button-intro').addEventListener('click', () => {
    document.querySelector('#intro').removeAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#programming').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");
  })
  document.querySelector('#button-design').addEventListener('click', () => {
    document.querySelector('#design').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#programming').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");

  })
  document.querySelector('#button-programming').addEventListener('click', () => {
    document.querySelector('#programming').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");
  })
  document.querySelector('#button-iteration').addEventListener('click', () => {
    document.querySelector('#iteration').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#programming').setAttribute ("class", "hidden");
  })
  
// carousel

// document.getElementById("button1").addEventListener('click', () => {
//     showSlide(1);
//     document.getElementById("1button1").classList.add("currentdot")
//     document.getElementById("1button2").classList.remove("currentdot")
//     document.getElementById("1button3").classList.remove("currentdot")
//     document.getElementById("1button4").classList.remove("currentdot")
//     document.getElementById("1button5").classList.remove("currentdot")
// });

// document.getElementById("1button2").addEventListener('click', () => {
//     showSlide(2);
//     document.getElementById("1button1").classList.remove("currentdot")
//     document.getElementById("1button2").classList.add("currentdot")
//     document.getElementById("1button3").classList.remove("currentdot")
//     document.getElementById("1button4").classList.remove("currentdot")
//     document.getElementById("1button5").classList.remove("currentdot")
// });

// document.getElementById("1button3").addEventListener('click', () => {
//     showSlide(3);
//     document.getElementById("1button1").classList.remove("currentdot")
//     document.getElementById("1button2").classList.remove("currentdot")
//     document.getElementById("1button3").classList.add("currentdot")
//     document.getElementById("1button4").classList.remove("currentdot")
//     document.getElementById("1button5").classList.remove("currentdot")
// });

// document.getElementById("1button4").addEventListener('click', () => {
//     showSlide(4);
//     document.getElementById("1button1").classList.remove("currentdot")
//     document.getElementById("1button2").classList.remove("currentdot")
//     document.getElementById("1button3").classList.remove("currentdot")
//     document.getElementById("1button4").classList.add("currentdot")
//     document.getElementById("1button5").classList.remove("currentdot")
// });

// document.getElementById("1button5").addEventListener('click', () => {
//     showSlide(5);
//     document.getElementById("1button1").classList.remove("currentdot")
//     document.getElementById("1button2").classList.remove("currentdot")
//     document.getElementById("1button3").classList.remove("currentdot")
//     document.getElementById("1button4").classList.remove("currentdot")
//     document.getElementById("1button5").classList.add("currentdot")
// });

// document.getElementById("next-image").addEventListener('click', () => {
//   nextSlide();
// });

// document.getElementById("prev-image").addEventListener('click', () => {
//   prevSlide();
// });

// // const SLIDES = $(".slides > .slide");
// // const DOTS = document.getElementByClassName("imgbutton");

// function nextSlide() {
//   console.log("asd");
//   const slideWidth = document.querySelector(".slide").clientWidth;
//   document.querySelector(".slides").scrollLeft += slideWidth;
// }

// function prevSlide() {
//   const slideWidth = document.querySelector(".slide").clientWidth;
//   document.querySelector(".slides").scrollLeft -= slideWidth;
// }

