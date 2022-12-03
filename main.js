let title = document.querySelector(".title");
let ul = document.querySelector("ul");
let btn = document.querySelector(".reload");

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};

window.addEventListener("online", function () {
  online();
});
window.addEventListener("offline", function () {
  offline();
});

function online() {
  title.innerHTML = "Online Now";
  ul.classList.add("hide");
  btn.classList.add("hide");
  title.style.color = "green";
}
function offline() {
  title.innerHTML = "Online Now";
  title.style.color = '#666'
  ul.classList.remove("hide");
  btn.classList.remove("hide");
}

btn.onclick = function () {
  window.location.reload();
}