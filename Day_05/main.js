//exercise 1
//question 1

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
