function increasOpacity() {
  let changeRectangle = document
    .getElementById("main-LO3")
    .getElementsByTagName("div")[2];

  changeRectangle.style.opacity = changeRectangle.style.opacity * 1.1;

  if (changeRectangle.style.opacity >= 1) {
    let addRestart = document.getElementById("left-header");
    if (addRestart.lastChild.id != 'restartImg') {
      let restart = document.createElement("div");
      restart.id="restartImg";
      restart.setAttribute("onclick", `restartFunc()`);
      let div = document.getElementById("left-header");
      div.appendChild(restart);
    }
  }
}

function restartFunc() {
  let restartRectangle = document
    .getElementById("main-LO3")
    .getElementsByTagName("div")[2];
  let x = document.getElementById("left-header");
  let toRemove = x.lastChild;
  x.removeChild(toRemove);
  restartRectangle.setAttribute("style", `opacity:${Math.random()};`);
}

function addRectangles() {
  let mainLO3 = document.getElementById("main-LO3");
  let i = 0;
  while (i < 43) {
    let newRectangle = document.createElement("div");
    newRectangle.classList.add("dynamic-Rectangle");
    newRectangle.classList.add("black");
    let randOpacity = Math.random();
    if (randOpacity < 0.1) randOpacity = 0.1;
    newRectangle.setAttribute("style", `opacity:${randOpacity};`);
    newRectangle.setAttribute("onclick", `changeBackground(this)`);
    mainLO3.appendChild(newRectangle);
    i++;
  }
}

function changeBackground(element) {
  if (element.classList[1] === "black") {
    element.classList.remove("black");
    element.classList.add("pink");
  } else {
    element.classList.remove("pink");
    element.classList.add("black");
  }
}
