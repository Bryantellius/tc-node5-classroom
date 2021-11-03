let form = document.querySelector("form");
let formBtn = document.querySelector("#formBtn");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let tbody = document.querySelector("tbody");
let alert = document.querySelector(".alert");
let alertBody = document.querySelector(".alert-msg");

function flashAlert(msg) {
  alert.style.backgroundColor = `lightgreen`;
  alert.style.display = "block";
  alertBody.textContent = msg;

  setTimeout(function () {
    alert.style.display = "none";
  }, 5000);
}

function randomRGB() {
  return Math.round(Math.random() * 255);
}

// When you click the button
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Take name and email values from the form
  // name.value
  // email.value

  // Add those values as data cells on a new table row
  let tdName = document.createElement("td");
  let tdEmail = document.createElement("td");

  tdName.textContent = name.value;
  tdEmail.textContent = email.value;

  let tr = document.createElement("tr");
  tr.append(tdName, tdEmail);

  tbody.appendChild(tr);

  flashAlert("Thanks for signing up!");

  name.value = "";
  email.value = "";
});
