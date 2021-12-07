const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name");
  let candy = document.querySelector("#candy");

  let reqBody = {
    name: name.value,
    candy: candy.value,
  };

  console.log(reqBody);

  fetch("/pokemon", {
    method: "POST",
    body: JSON.stringify(reqBody),
    headers: { "content-type": "application/json" },
  }).then((res) => {
    let alert = document.querySelector(".alert");
    if (res.ok) {
      alert.textContent = "Thank you!";
      alert.classList.add("alert-success", "alert");
      name.value = "";
      candy.value = "";
    } else {
      alert.textContent = "Failed to add pokemon. Try again later.";
      alert.classList.add("alert-danger", "alert");
    }

    setTimeout(() => (alert.textContent = ""), 5000);
  });
});
