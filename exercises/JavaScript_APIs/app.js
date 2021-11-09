console.log("Hello World!\n==========\n");

const CODEWARS_URL = "https://www.codewars.com/api/v1/users/";

let error = document.querySelector("#error");
let avgRank = document.querySelector("#avgRank");
let avgHonor = document.querySelector("#avgHonor");
let totalCompleted = document.querySelector("#totalCompleted");
let cardContainer = document.querySelector(".cardContainer");

let users = [
  "Bryantellius",
  "KeithPetr",
  "joshua-desu",
  "jtitak06",
  "CruzSanchez",
  "TannerVoss",
];
let allData = [];

users.forEach((username) => {
  fetch(CODEWARS_URL + username, { mode: "cors" })
    .then((res) => res.json())
    .then((data) => {
      let user = {
        username,
        rank: data.ranks.overall.rank,
        honor: data.honor,
        clan: data.clan,
        completed: data.codeChallenges.totalCompleted,
      };

      allData.push(user);

      let title = document.createElement("h3");
      title.textContent = user.username;
      let clan = document.createElement("p");
      clan.textContent = user.clan;
      let rank = document.createElement("p");
      rank.textContent = user.rank;
      let honor = document.createElement("p");
      honor.textContent = user.honor;

      let card = document.createElement("div");
      card.classList.add("card");
      card.append(title, clan, rank, honor);

      cardContainer.appendChild(card);

      if (allData.length == users.length) {
        totalCompleted.classList.add("alert", "alert-primary");
        avgHonor.classList.add("alert", "alert-primary");
        avgRank.classList.add("alert", "alert-primary");
        totalCompleted.textContent = allData.reduce(
          (sum, user) => sum + user.completed,
          0
        );
        avgHonor.textContent = -Math.floor(
          allData.reduce((sum, user) => sum + user.honor, 0) / allData.length
        );
        avgRank.textContent = Math.floor(
          allData.reduce((sum, user) => sum + user.rank, 0) / allData.length
        );
      }
    })
    .catch((err) => {
      console.error(err);
      error.textContent =
        error.message || "An unexpected error occurred with " + username;
      error.classList.remove("hide");
    });
});
