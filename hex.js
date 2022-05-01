//selectors

var btnHex = document.querySelector(".btn");

var hexColors = document.querySelector(".hexcolors");
//event

btnHex.addEventListener("click", changeColorHex);
//function

function changeColorHex(evt) {
  if (hexColors.innerHTML == "#FFFFFF") {
    hexColors.innerHTML = "#00FF00";
    document.body.style.backgroundColor = "#00FF00";
  } else if (hexColors.innerHTML == "#00FF00") {
    hexColors.innerHTML = "#FF0000";
    document.body.style.backgroundColor = "#FF0000";
  } else if (hexColors.innerHTML == "#FF0000") {
    hexColors.innerHTML = "#0000FF";
    document.body.style.backgroundColor = "#0000FF";
  } else if (hexColors.innerHTML == "#0000FF") {
    hexColors.innerHTML = "#FFFF00";
    document.body.style.backgroundColor = "#FFFF00";
  } else {
    hexColors.innerHTML = "#FFFFFF";
    document.body.style.backgroundColor = "#FFFFFF";
  }
}
