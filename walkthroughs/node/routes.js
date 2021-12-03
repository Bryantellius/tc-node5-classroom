const routes = {
  "/GET": {
    statusCode: 200,
    body: () => `<div><h1>Home</h1></div>`,
    type: "text/html",
  },
  "/aboutGET": {
    statusCode: 200,
    type: "application/json",
    body: () =>
      JSON.stringify({
        name: "Ben Bryant",
        city: "Birmingham",
        state: "Alabama",
      }),
  },
  "/newsletterPOST": {
    statusCode: 200,
    type: "application/json",
    body: (reqBody) => {
      return JSON.stringify({
        msg: `${reqBody.name || "Newcomer"}, thanks for signing up!`,
      });
    },
  },
  "/echoPOST": {
    statusCode: 200,
    type: "application/json",
    body: (reqBody) => {
      return JSON.stringify({
        serverMessage: "From the server :>",
        ...reqBody,
      });
    },
  },
  "*": {
    statusCode: 404,
    type: "text/html",
    body: () => `<div><h1>Not Found. <a href='/'>Try here.</a></h1></div>`,
  },
};

module.exports = routes;
