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
    newRectangle.innerHTML ="<a></a>"
    let randOpacity = Math.random();

    newRectangle.setAttribute("style", `opacity:${randOpacity};`);
    let mainLO3 = document.getElementById("main-LO3");
    mainLO3.appendChild(newRectangle);
    i++;
  }
}
