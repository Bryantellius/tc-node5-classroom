// Code Review
// Label Features
// Describe Functionality

// function declaration with 'solution' identifier with a single parameter called 'list'

// (array) => string
function solution(list) {
  // variable declaration 'res' assigned an empty array value
  let res = [];
  // variable declaration 'curr' assigned an empty array value
  let curr = [];

  list.forEach((num, idx, arr) => {
    // num is the iterated over value
    // idx is the index num in the list
    // arr is list

    // adding num to the end of curr array
    curr.push(num);

    // if conditional checks if num is not equal to the next value minus 1
    // is the next number not one more than the current number
    // if non-sequential, push curr into res, reset curr to an empty array value
    if (num !== arr[idx + 1] - 1) {
      res.push(curr);
      curr = [];
    }
  });

  // returns a string
  return (
    res
      .map((numArr) => {
        // if conditional checks to see if numArr has more than 2 values
        if (numArr.length > 2) {
          // returning a string of numArr's first value, a hyphen, and numArr's last value
          return `${numArr[0]}-${numArr[numArr.length - 1]}`;
        } else return numArr;
      })
      // reduce returns a single value from an array, starting with a default empty array value
      // concat combines two arrays
      // acc and val are both array values
      .reduce((acc, val) => acc.concat(val), [])
      // join converts an array into a string
      .join(",")
  );
}
