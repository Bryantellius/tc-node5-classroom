let digits = document.getElementsByClassName("digit");
let modal = document.getElementsByClassName("modal")[0];

setTimeout(function () {
  modal.style.display = "flex";
}, 5000);

for (let span of digits) {
  span.onclick = function () {
    span.textContent = prompt("Change me:", span.textContent);
  };
}

let input = document.getElementById("message");
let title = document.getElementById("title");

input.addEventListener("keyup", function (event) {
  title.textContent = event.target.value;
});

document
  .getElementsByClassName("modal-btn")[1]
  .addEventListener("click", function () {
    modal.style.display = "none";
  });
