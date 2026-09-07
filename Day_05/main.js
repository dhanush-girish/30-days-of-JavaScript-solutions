//exercise 1
//question 1 to 23

const emptyArray = [];
console.log(emptyArray);

const array1 = [1, 2, 3, 4, 5];
console.log(array1);

console.log(array1.length);

console.log(array1[0]);
console.log(array1[2]);
console.log(array1[4]);

const mixedDataTypes = [10, "peri peri alfaham", true, null, undefined, { name: "Damu" }, [1, 2, 3]];
console.log(mixedDataTypes);

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies.join(", "));

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
itCompanies.forEach(company => console.log(company.toUpperCase()));//To print all the companies in uppercase in one line of code

const sentence = itCompanies.join(", ") + " are big IT companies.";
console.log(sentence);

if (itCompanies.includes("Amazon")) {
    console.log("Amazon is found in the array.");
} else {
    console.log("Amazon is not found in the array.");
}

const multiples_Os = [];
for (let company of itCompanies){
    const oMatches = company.match(/o/gi);

    if (oMatches && oMatches.length>1){
        multiples_Os.push(company);
    }
} 
console.log(multiples_Os)

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(3,4));
itCompanies.shift();
console.log(itCompanies);
itCompanies.splice(2,2);
console.log(itCompanies);
itCompanies.pop();
console.log(itCompanies);
itCompanies.length = 0;
console.log(itCompanies);

//exercise 2
//question 1 to 6

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
console.log(shoppingCart);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia');

webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass');
console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

//exercise 3
//question 1 to 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort());
const max_age = ages[ages.length - 1];
const min_age = ages[0];
console.log(`Min age: ${ages[0]}, Max age: ${max_age}`);

console.log(`Median age: ${ages.length % 2 === 0 ? (ages[ages.length/2 - 1] + ages[ages.length/2]) / 2 : ages[Math.floor(ages.length/2)]}`);

const average_age = ages.reduce((a, b) => a + b, 0) / ages.length;
console.log(`Average age: ${average_age}`);

const age_range = max_age - min_age;
console.log(`Age range: ${age_range}`);

console.log(`Min age equals average: ${min_age === average_age}`);
console.log(`Max age equals average: ${max_age === average_age}`);

const first_10_countries = countries.slice(0, 10);
console.log(first_10_countries);

console.log(countries.length);
if (countries.length % 2 === 0) {
    const middle1 = countries[countries.length / 2 - 1];
    const middle2 = countries[countries.length / 2];
    console.log(`Middle countries: ${middle1}, ${middle2}`);
} else {
    const middle = countries[Math.floor(countries.length / 2)];
    console.log(`Middle country: ${middle}`);
}

if (countries.length % 2 === 0) {
    const firsthalf = countries.slice(0, countries.length / 2);
    const secondhalf = countries.slice(countries.length / 2);
    console.log(`1st half: ${firsthalf}`);
    console.log(`2nd half: ${secondhalf}`);
    console.log(`1st half length: ${firsthalf.length}, 2nd half length: ${secondhalf.length}`);
}
else {
    countries.unshift("Dholakpur");
    const firsthalf = countries.slice(0, Math.floor(countries.length / 2));
    const secondhalf = countries.slice(Math.floor(countries.length / 2));
    console.log(`1st half: ${firsthalf}`);
    console.log(`2nd half: ${secondhalf}`);
    console.log(`1st half length: ${firsthalf.length}, 2nd half length: ${secondhalf.length}`);
}