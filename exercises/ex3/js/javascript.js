// innvoked function immidiatly call when <script> run
// variables method and function will write in camelCase, theres 'google guideline' to understand how to work with js roles

// //add object to the html dom
// let newObj = document.ceateElement("h1");
// newObj.className='msg';
// let formObj = document.getElementById("frm");
// formObj.appendChild(newObj);
// // or
// formObj.prepend(newObj);
var counter = 0;

function doSome() {
  let changeRectangle = document
    .getElementById("main-LO3")
    .getElementsByTagName("div")[2];
  let rectangleWidth;

  if (counter % 2 == 0) {
    rectangleWidth = window.getComputedStyle(changeRectangle).width;
    
    changeRectangle.setAttribute("style", `width:100%`);
  } else {
    changeRectangle.setAttribute("style", { rectangleWidth });
  }
  counter++;
}
function addRectangles() {
  let i = 0;
  while (i < 23) {
    let newRectangle = document.createElement("div");
    let randOpacity = Math.random();

    newRectangle.setAttribute("style", `opacity:${randOpacity};`);
    let mainLO3 = document.getElementById("main-LO3");
    mainLO3.appendChild(newRectangle);
    i++;
  }
}
