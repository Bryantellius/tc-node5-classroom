console.log("HELLO WORLD");

let message = document.querySelector("#message");
let response = document.querySelector("#response");
let form = document.querySelector("form");
let formBtn = document.querySelector("form > button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formBtn.disabled = true;

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=54f0MhTKuI2nxwD9nhEvN4ifNwephcpz&s=${message.value}`,
    {
      mode: "cors",
    }
  )
    .then((res) => res.json())
    .then((body) => {
      console.log(body);
      createMessage(body.data.images.original.url);
    })
    .catch((err) => {
      createMessage();
      console.error(err);
    });
});

function createMessage(url) {
  let div = document.createElement("div");
  if (url) {
    let img = document.createElement("img");
    img.src = url;
    div.appendChild(img);
  } else {
    div.textContent = `Couldn't load the data for '${message.value}'.`;
  }
  div.classList.add("toMessage");
  response.appendChild(div);
  div.scrollTo()
  formBtn.disabled = false;
  message.value = "";
  message.focus();
}
