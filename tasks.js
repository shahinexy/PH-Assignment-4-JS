// problem 1
function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  if (typeof ticketSale !== "number") {
    return "Pleace Enter a valid number.";
  }
  const totalTicketPrice = ticketSale * 120;
  const totalCost = 500 + 8 * 50;
  return totalTicketPrice - totalCost;
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-93));
console.log(calculateMoney(0));
console.log(calculateMoney("Shahin"));

console.log("====================");

// problem 2
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const lastLetter = ["a", "y", "i", "e", "o", "u", "w"];
  const lowerCase = name.toLowerCase();
  const nameLastLetter = lowerCase[lowerCase.length - 1];
  if (lastLetter.includes(nameLastLetter)) {
    return "Good name";
  }
  return "Bad name";
}
console.log(checkName("Salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));

console.log("===================");

// problem 3
function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Please Enter a valid array";
  }
  let numberArray = [];
  for (let element of array) {
    if (typeof element == "number") {
      numberArray.push(element);
    }
  }
  let newNumber = [];
  for (let element of numberArray) {
    if (element) {
      newNumber.push(element);
    }
  }
  return newNumber;
}
console.log(
  deleteInvalids([
    NaN,
    1,
    12,
    0,
    -1,
    undefined,
    { name: "shahin" },
    [2, 3],
    345,
  ])
);
console.log(
  deleteInvalids([
    1,
    null,
    undefined,
    18,
    -19,
    NaN,
    "12",
    [1, 2],
    { ob: "lala" },
  ])
);
console.log(deleteInvalids(["1", { num: 2 }, NaN]));
console.log(deleteInvalids({ num: [1, 2, 3] }));
console.log(deleteInvalids([1, 2, -3]));

console.log("=====================");

// problem 4
function password(obj) {
  if (Object.keys(obj).length !== 3) {
    return "invalid";
  }
  if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  const websiteName = obj.siteName;
  const firstIndex = websiteName[0].toUpperCase();
  const cuteWebsiteName = websiteName.slice(1);
  const siteName = firstIndex + cuteWebsiteName;
  const name = obj.name;
  const birthYear = obj.birthYear;
  return `${siteName}#${name}@${birthYear}`;
}
console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));

console.log("==================");

// problem 5
function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
    return "invalid input";
  }
  let totalMoney = 0;
  for (let element of arr) {
    if (element >= 3000) {
      const tax = element - element * (20 / 100);
      totalMoney += tax;
    } else {
      totalMoney += element;
    }
  }
  const savings = totalMoney - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [ 900 , 2700 , 3400]));
console.log(monthlySavings([ 900 , 2700 , 3400], '234'));
console.log(monthlySavings('2043812', ['5000']));
