function count(start, limit, stepType) {
  let step = 1;
  let adjustedStart = start;

  if (stepType == "evens" || stepType == "odds") {
    step = 2;

    if (
      (start % 2 == 0 && stepType == "odds") ||
      (start % 2 == 1 && stepType == "evens")
    ) {
      adjustedStart++;
    }
  }

  for (let i = adjustedStart; i <= limit; i += step) {
    console.log(i);
  }
}

// count(1, 100, "odds");
// count(1, 100, "evens");
// count(1, 100);

function checkAge(age, name = "Stranger") {
  if (!age || !parseInt(age)) {
    console.log("You didn't give an age to check!");
  } else {
    let driveAge = 16;

    if (age >= driveAge) {
      console.log(`${name}, you are old enough to drive!`);
    } else {
      console.log(`Sorry ${name}, you cannot drive yet.`);
    }
  }
}

checkAge(12, "Jeremy");
checkAge(16);
checkAge("Ben");
