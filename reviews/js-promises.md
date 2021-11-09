# Review 11/9/21: JavaScript Promises

## Promises

- Asynchronous, non-sequential in execution _completion_
- The constructor receives a callback function that can perform an action, then _resolve_ or _reject_ to change the resulting status
- Cleaner way to handle callbacks from asynchronous actions
- Callback functions can be written as arrow notation
- Create a promise by using the Promise class constructor

### States

1. Rejected
2. Fulfilled
3. Pending
4. Settled

```js
let promise = new Promise((resolve, reject) => {});
```

### Promise Consumption

```js
promise
  .then((resolvedValue) => {
    // executed after resolve
  })
  .catch((rejectedValue) => {
    // executed after reject
  })
  .finally(() => {
    // executed after resolve OR reject
  });
```

## Async/Await

- Newer syntax for a promise
- Add the `async` keyword before a function definition
- Can use the `await` keyword inside of an asynchronous function
- Still returns a promise

```js
async function promise() {
  return "resolved value";
}

promise().then().catch().finally();
```

## Fetch API

- Sends network requests across the web (through the browser)
- Often api resources require an api key
- Depending on the resource, you can add _query parameters_ to enhance your request
  - Ex: `https://url.com?search=value&limit=100`

```js
fetch("url", { mode: "cors" }).then().catch().finally();
```
