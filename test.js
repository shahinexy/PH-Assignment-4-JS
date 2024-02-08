function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    }
    if (typeof ticketSale !== "number") {
        return "Pleace Enter A Valid Number.";
    }
    const totalTicketPrice = ticketSale * 120;
    const totalCost = 500 + 8 * 50;
    return totalTicketPrice - totalCost;
}

function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    const lastLetter = ["a", "y", "i", "e", "o", "u", "w"];
    const lowerCase = name.toLowerCase();
    const nameLastLetter = lowerCase[lowerCase.length - 1];
    if (lastLetter.includes(nameLastLetter)) {
        return "Good Name";
    }
    return "Bad Name";
}

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Please Enter A Valid Array";
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



function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
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
