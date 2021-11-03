let digits = document.querySelectorAll(".digit");
let modal = document.querySelector(".modal");

function escExit(event) {
  console.log(event);
  if (event.keyCode == 27) {
    modal.style.display = "none";
    document.removeEventListener("keyup", escExit);
  }
}

setTimeout(function () {
  modal.style.display = "flex";
  document.addEventListener("keyup", escExit);
}, 3000);

for (let span of digits) {
  span.onclick = function () {
    span.textContent = prompt("Change me:", span.textContent);
  };
}

let input = document.querySelector("#message");
let title = document.querySelector("#title");

input.addEventListener("keyup", function (event) {
  title.textContent = event.target.value;
});

document
  .querySelector(".modal-btn:nth-child(2)")
  .addEventListener("click", function () {
    modal.style.display = "none";
    document.removeEventListener("keyup", escExit);
  });

modal.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.removeEventListener("keyup", escExit);
  }
});
