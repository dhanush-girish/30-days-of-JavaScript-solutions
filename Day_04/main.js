//Exercise 1 
//Question 1 to 4

const age = prompt("Enter your age: ");
if (age >= 18) {
    console.log("You are old enough to drive.");
}
else {
    console.log(`You are left with ${18 - age} years to drive.`);
}

const my_age = 21;
your_age = prompt("Enter your age: ");  
if (your_age > my_age) {
    console.log(`You are ${your_age - my_age} years older than me.`);
}

let a = 4;
let b = 3;
if (a > b) {
    console.log(`${a} is greater than ${b}`);
}
else {
    console.log(`${a} is less than ${b}`);
}

let a1 = 4;
let b1 = 3;
const result = a1 > b1 
? `${a1} is greater than ${b1}` : `${a1} is not greater than ${b1}`;
console.log(result);

const number = prompt("Enter a number: ");
if (number % 2 == 0) {
    console.log(`${number} is an even number`);
}
else {
    console.log(`${number} is an odd number`);
}

//Exercise 2
//Question 1 to 3

const marks = prompt("Enter your marks: ");
if (marks >= 80 && marks <= 100) {
    console.log("You got A grade.");
}
else if (marks >= 70 && marks < 89) {
    console.log("You got B grade.");
}
else if (marks >= 60 && marks < 69) {
    console.log("You got C grade.");
}
else if (marks >= 50 && marks < 59) {
    console.log("You got D grade.");
}
else if (marks >= 0 && marks < 49) {
    console.log("You got F grade.");
}

const months = prompt("Enter the month: ");
switch (months) {
    case "january":
    case "december":
    case "february":
        console.log("The season is Winter.");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring.");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer.");
        break;
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn.");
        break;
    default:
        console.log("Please enter a valid month.");
}

const day = prompt("What is the day today? ").toLowerCase();
if (day === "saturday" || day === "sunday") {
    console.log("It is a weekend.");
}
else {
    console.log("It is a weekday.");
}

//Exercise 3
//Question 1 & 2

const month = prompt("Enter the month: ").toLowerCase();
if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    console.log(`${month} has 31 days.`);
}
else if (month === "april" || month === "june" || month === "september" || month === "november") {
    console.log(`${month} has 30 days.`);
}
else if (month === "february") {
    console.log(`${month} has 28 days.`);
}

const month2 = prompt("Enter the month: ").toLowerCase();
const year = prompt("Enter the year: ");
if (month2 === "january" || month2 === "march" || month2 === "may" || month2 === "july" || month2 === "august" || month2 === "october" || month2 === "december") {
    console.log(`${month2} has 31 days.`);
}
else if (month2 === "april" || month2 === "june" || month2 === "september" || month2 === "november") {
    console.log(`${month2} has 30 days.`);
}
else if (month2 === "february") {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${month2} has 29 days.(Leap Year)`);
    }
    else {
        console.log(`${month2} has 28 days.`);
    }
}