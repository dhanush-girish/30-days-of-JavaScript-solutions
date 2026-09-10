//exercise 1

//question 1 to 3
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let i = 0;
while (i<=10) {
    console.log(i);
    i++;
}

let x= 0;
do{
    console.log(x);
    x++;
} while (x<=10);


for (i=10; i>= 0; i--){
    console.log(i);
}

let y = 10;
while (y>=0){
    console.log(y);
    y--;
}

let z=10;
do{
    console.log(z);
    z--;
} while (z>=0);

let n = 5
for (let i=0; i<=n ;i++){
    console.log(i);
}

//question 4 to 6
let hash= '#'
for(i=0; i<=7;i++){
    console.log(hash)
    hash +='#'
}

for(i=0;i<=10;i++){
    console.log(`${i} * ${i} = ${i*i}`)
}

console.log("i i^2 i^3");
for(i=0;i<=10;i++){
    console.log(`${i}  ${i**2}  ${i**3}`)
}

//question 7 to 12
for(let i=0;i<=100;i++){
    if(i%2===0){
    console.log(`${i}`)
    }
}

for(let i=0;i<=100;i++){
    if(i%2!==0){
    console.log(`${i}`)
    }
}

//q9 pending

let sum=0;
for(let i=0; i<=100;i++){
    sum+=i;
}
 console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);

let sum_even=0;
let sum_odd=0;
for(let i=0; i<=100;i++){
    if(i%2===0){
        sum_even+=i;
    }else{
        sum_odd+=i;
    }
}
 console.log(`The sum of all evens from 0 to 100 is ${sum_even}.. And the sum of all odds from 0 to 100 is ${sum_odd}.`);

let sum_array=[];
let even_sum=0;
let odd_sum=0;
for(let i=0; i<=100;i++){
    if(i%2===0){
        even_sum+=i;
    }else{
        odd_sum+=i;
    }
}
sum_array.push(even_sum,odd_sum);
console.log(sum_array);

//question 13 to 15
const random_numbers= [];
for(let i=0 ; i<6 ; i++){
    const randomNum = Math.floor(Math.random()*100 );
    random_numbers.push(randomNum)
}
console.log(random_numbers);

