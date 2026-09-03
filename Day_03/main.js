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