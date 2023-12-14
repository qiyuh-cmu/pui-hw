//show or hide the section under the tab based on users' selection

//if the user clicks on the intro tab
document.querySelector('#button-intro').addEventListener('click', () => {
  document.querySelector('#intro').removeAttribute("class", "hidden");
  document.querySelector('#design').setAttribute("class", "hidden");
  document.querySelector('#programming').setAttribute("class", "hidden");
  document.querySelector('#iteration').setAttribute("class", "hidden");
})

//if the user clicks on the design tab
document.querySelector('#button-design').addEventListener('click', () => {
  document.querySelector('#design').removeAttribute("class", "hidden");
  document.querySelector('#intro').setAttribute("class", "hidden");
  document.querySelector('#programming').setAttribute("class", "hidden");
  document.querySelector('#iteration').setAttribute("class", "hidden");
})

//if the user clicks on the programming tab
document.querySelector('#button-programming').addEventListener('click', () => {
  document.querySelector('#programming').removeAttribute("class", "hidden");
  document.querySelector('#intro').setAttribute("class", "hidden");
  document.querySelector('#design').setAttribute("class", "hidden");
  document.querySelector('#iteration').setAttribute("class", "hidden");
})

//if the user clicks on the iteration tab
document.querySelector('#button-iteration').addEventListener('click', () => {
  document.querySelector('#iteration').removeAttribute("class", "hidden");
  document.querySelector('#intro').setAttribute("class", "hidden");
  document.querySelector('#design').setAttribute("class", "hidden");
  document.querySelector('#programming').setAttribute("class", "hidden");
})