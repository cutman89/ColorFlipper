//selectors
const cookiestorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`;
  },
};
var btn = document.querySelector(".btn");

var colors = document.querySelector(".colors");
const storageType = cookiestorage;
const consentPropertyName = "jdc_consent";
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);
//event
btn.addEventListener("click", changeColor);

//function
function changeColor(evt) {
  if (colors.innerHTML == "white") {
    colors.innerHTML = "green";
    document.body.style.backgroundColor = "green";
    localStorage.setItem("color", colors.innerHTML);
  } else if (colors.innerHTML == "green") {
    colors.innerHTML = "red";
    document.body.style.backgroundColor = "red";
    localStorage.setItem("color", colors.innerHTML);
  } else if (colors.innerHTML == "red") {
    colors.innerHTML = "blue";
    document.body.style.backgroundColor = "blue";
    localStorage.setItem("color", colors.innerHTML);
  } else {
    colors.innerHTML = "white";
    document.body.style.backgroundColor = "white";
    localStorage.setItem("color", colors.innerHTML);
  }
}
colors.innerHTML = localStorage.getItem("color");
document.body.style.backgroundColor = localStorage.getItem("color");
window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm("Agree to the terms and conditions of the site");
    if (consent) {
      saveToStorage();
    }
  }
};
