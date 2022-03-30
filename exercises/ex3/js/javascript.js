// innvoked function immidiatly call when <script> run
// variables method and function will write in camelCase, theres 'google guideline' to understand how to work with js roles

// //add object to the html dom
// let newObj = document.ceateElement("h1");
// newObj.className='msg';
// let formObj = document.getElementById("frm");
// formObj.appendChild(newObj);
// // or
// formObj.prepend(newObj);

function addRectangle() {
  let newRectangle = document.createElement("div");
  let randOpacity = Math.random();
  console.log(randOpacity);
  newRectangle.setAttribute("style", `opacity:${randOpacity};`);
  let mainLO3 = document.getElementById("main-LO3");
  mainLO3.appendChild(newRectangle);
  console.log("addRectangle test");
}
