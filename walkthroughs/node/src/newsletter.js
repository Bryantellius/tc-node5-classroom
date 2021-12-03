const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");

  let reqBody = {
    name: name.value,
    email: email.value,
  };

  fetch("/newsletter", { method: "POST", body: JSON.stringify(reqBody) }).then(
    (res) => {
      let alert = document.querySelector(".alert");
      if (res.ok) {
        alert.textContent = "Thank you!";
        alert.classList.add(".bg-success");
      } else {
        alert.textContent = "Failed to add you to the list. Try again later.";
        alert.classList.add(".bg-danger");
      }

      setTimeout(() => (alert.textContent = ""), 5000);
    }
  );
});
