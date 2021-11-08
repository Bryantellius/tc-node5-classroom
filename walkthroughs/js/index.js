console.log("Before Promise");

async function waitForPrint() {
  let rand = Math.round(Math.random() * 100);
  if (rand % 2) {
    throw new Error("Value is odd");
  } else {
    return { val: rand, msg: "Value is even" };
  }
}

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rand = Math.round(Math.random() * 100);
//     if (rand % 2) {
//       reject(new Error("Value is odd"));
//     } else {
//       resolve({ val: rand, msg: "Value is even" });
//     }
//   }, 10);
// });

waitForPrint()
  .then((resolvedValue) => {
    // console.log(resolvedValue);
    console.log(`Promise fulfilled with ${resolvedValue.val}!`);
    return resolvedValue.msg;
  })
  .then((msg) => alert(msg))
  .catch((rejectedError) => console.error(rejectedError))
  .finally(() => {
    console.log("Finally");
  });

console.log("After Promise");
