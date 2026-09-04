//Exercise 1

//question 1 to 7
let firstName = "Dhanush";
let lastName = "Girish";
let country = "India";
let city = "Trivandrum";
let age = 21;
let isMarried = false;
let year = 2026;
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

console.log(typeof '10' === typeof 10);
console.log(parseInt('9.8') === 10);

console.log(1)
console.log("hello")
console.log(true)

console.log(0)
console.log("")
console.log(false)

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false
console.log("python".length != "jargon".length) //false

console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true
console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false)) //true
console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true
console.log(!('dragon'.includes('on') && 'python'.includes('on'))) //false

const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

//exercise 2

//question 1 to 15

const base = prompt("Enter base: ");
const height = prompt("Enter height: ");
const area = 0.5 * base * height;
console.log("The area of the triangle is", area);

const sideA = prompt("Enter side A: ");
const sideB = prompt("Enter side B: ");
const sideC = prompt("Enter side C: ");
const perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log("The perimeter of the triangle is", perimeter);

const length = prompt("Enter length: ");
const width = prompt("Enter width: ");
const areaRectangle = length * width;
const perimeterRectangle = 2 * (parseInt(length) + parseInt(width));
console.log("The area of the rectangle is", areaRectangle);
console.log("The perimeter of the rectangle is", perimeterRectangle);

const radius = prompt("Enter radius: ");
const areaCircle = Math.PI * radius * radius;
const circumference = 2 * Math.PI * radius;
console.log("The area of the circle is", areaCircle);
console.log("The circumference of the circle is", circumference);

const slope1 = 2;
const yIntercept = -2;
const xIntercept = -yIntercept / slope1;
console.log(`Slope is ${slope1}`);
console.log(`X-intercept is ${xIntercept}`);
console.log(`Y-intercept is ${yIntercept}`);

const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const slope2 = (y2 - y1) / (x2 - x1);
console.log(`The slope is ${slope2}`);

console.log("slope1 === slope2:", slope1 === slope2);

for (let x = -5; x <= 5; x++) {
    let y = (x ** 2) + (6 * x) + 9;
    console.log(`For x = ${x}, y = ${y}`);
    if (y === 0) {
        console.log(`=> Found the solution: y is 0 when x is ${x}`);
    }
}

const hours = prompt("Enter hours: ");
const ratePerHour = prompt("Enter rate per hour: ");
const weeklyEarnings = hours * ratePerHour;
console.log(`Your weekly earnings is ${weeklyEarnings}`);

const name = prompt("Enter your name: ");
if (name.length > 7) {
    console.log("Your name is long");
}
else {
    console.log("Your name is short");
}

const firstName2 = prompt("Enter your first name: ");
const lastName2 = prompt("Enter your last name: ");
if (firstName2.length > lastName2.length) {
    console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`);
}

let myAge = 21;
let yourAge = prompt("Enter your age: ");
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
}

const birthYear = prompt("Enter your birth year: ");
const currentYear = new Date().getFullYear();
const age2 = currentYear - birthYear;
if (age2 >= 18) {
    console.log(`You are ${age2}. You are old enough to drive.`);
}
else {
    console.log(`You are ${age2}. You will be allowed to drive after ${18 - age2} years.`);
}

const yearsLived = prompt("Enter number of years you have lived: ");
const secondsLived = yearsLived * 60 * 60 * 24 * 365;
console.log(`You have lived for ${secondsLived} seconds.`);

const now2 = new Date();
const year2 = now2.getFullYear();

let month = now2.getMonth() + 1;
month = month < 10 ? "0" + month : month;
let date = now2.getDate();
date = date < 10 ? "0" + date : date;
let hours2 = now2.getHours();
hours2 = hours2 < 10 ? "0" + hours2 : hours2;
let minutes = now2.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

console.log(`${year2}-${month}-${date} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year2} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year2} ${hours}:${minutes}`);

//exercise 3

//question 1
const now3 = new Date();
const year3 = now3.getFullYear();
let month3 = now3.getMonth() + 1; 
let date3 = now3.getDate();
let hours3 = now3.getHours();
let minutes3 = now3.getMinutes();

month3 = month3 < 10 ? "0" + month3 : month3;
date3 = date3 < 10 ? "0" + date3 : date3;
hours3 = hours3 < 10 ? "0" + hours3 : hours3;
minutes3 = minutes3 < 10 ? "0" + minutes3 : minutes3;
console.log(`${year3}-${month3}-${date3} ${hours3}:${minutes3}`);