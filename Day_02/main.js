//Exercises: Level 1
 
//question 1 to 25
let challenge = "30 Days Of JavaScript"
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 2))
console.log(challenge.substring(3, 21))
console.log(challenge.includes("Script"))
console.log(challenge.split())
console.log(challenge.split(' '))

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(company.split(','))

console.log(challenge.replace("JavaScript", "Python"))
console.log(challenge.charAt(15))
console.log(challenge.indexOf('J'))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/gi))

let string = "30 Days of"
console.log(string.concat(" JavaScript"))
console.log(challenge.repeat(2))

//exercises: Level 2
//question 1 to 12

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(typeof '10' === 10)

console.log(parseFloat('9.8') === 10)
console.log(Math.ceil(parseFloat('9.8')) === 10)

console.log('python'.includes('on') && 'jargon'.includes('on'))
console.log('I hope this course is not full of jargon'.includes('jargon'))

console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))

let string1 = "JavaScript"
console.log(string1[Math.floor(Math.random() * string1.length)])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

let phrase = "You cannot end a sentence with because because because is a conjunction"
console.log(phrase.indexOf('because'))
console.log(phrase.lastIndexOf('because'))
console.log(phrase.substring(31, 54))

//exercises: Level 3

//question 1 $ 2

let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence1.match(/love/gi))

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match(/because/gi))

//question 3 
const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence3.replace(/[%$@&#;]/g, '')) 

const updatedsentence = sentence3.replace(/[%$@&#;,.!?]/g, '').toLowerCase();
let wordsArray = updatedsentence.split(' ');
let wordcount = {};

for (let i of wordsArray) {
    if (wordcount[i]) {
        wordcount[i]++;
    } else {
        wordcount[i] = 1;
    }
}

let mostfrequent = '';
let maxCount = 0;

for (let word in wordcount) {
    if (wordcount[word] > maxCount) {
        mostfrequent = word;
        maxCount = wordcount[word];
    }
}

console.log(`The most frequent word is "${mostfrequent}" and it appears ${maxCount} times.`);

//question 4
const sentence4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const numbers = sentence4.match(/\d+/g).map(Number);
const totalIncome = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Total income: ${totalIncome} euro`);