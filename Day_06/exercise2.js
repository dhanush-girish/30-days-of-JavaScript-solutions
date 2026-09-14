//Exercises: Level 2

//question 1 
const charactors2="abcdefghijklmnopqrstuvwxyz0123456789";
let randomid2= '';
let idlength = 25;
for(let i=0; i<idlength; i++){
    let randomindex2 = (Math.floor(Math.random()*charactors2.length))
    randomid2 += charactors2[randomindex2];
}
console.log(randomid2)

const charactors3 ="0123456789ABCDEF";
let randomid3= '';
for(let i=0; i<=7;i++){
    let randomindex3 = (Math.floor(Math.random()*charactors3.length))
    randomid3 += charactors3[randomindex3];
} 
console.log(randomid3)