
document.querySelector('#button-intro').addEventListener('click', () => {
    document.querySelector('#intro').removeAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#program').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");
  })
  document.querySelector('#button-design').addEventListener('click', () => {
    document.querySelector('#design').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#program').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");
    console.log("JavaScript loaded!!!");

  })
  document.querySelector('#button-programming').addEventListener('click', () => {
    document.querySelector('#program').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#iteration').setAttribute ("class", "hidden");
  })
  document.querySelector('#button-iteration').addEventListener('click', () => {
    document.querySelector('#iteration').removeAttribute ("class", "hidden");
    document.querySelector('#intro').setAttribute ("class", "hidden");
    document.querySelector('#design').setAttribute ("class", "hidden");
    document.querySelector('#program').setAttribute ("class", "hidden");
  })
  