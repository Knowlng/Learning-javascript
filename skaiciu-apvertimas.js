"use strict";

let skaicius1=1;
let skaicius2=2;
let skaicius3=3;
let skaicius4=4;
let suma;
let sandauga;
let laikinaskintamasis;
let maxnumber= Number.MAX_VALUE;

suma=skaicius1 + skaicius2 + skaicius3 + skaicius4;
sandauga = skaicius1 * skaicius2 * skaicius3 * skaicius4;

console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);
console.log(skaicius4);
console.log(suma);
console.log(sandauga);
console.log(maxnumber);


document.querySelector('.alert-button').addEventListener('click', function(){

    skaicius1=10;
    skaicius2=20;
    laikinaskintamasis=skaicius1;
    skaicius1=skaicius2;
    skaicius2=laikinaskintamasis;

    skaicius3=300;
    skaicius4=400;

    skaicius3=skaicius3 + skaicius4;
    skaicius4=skaicius3 - skaicius4;
    skaicius3=skaicius3 - skaicius4;

    alert(` 
      Skaicius 1: ${skaicius1} \n 
      Skaicius 2: ${skaicius2} \n 
      Skaicius 3: ${skaicius3} \n
      Skaicius 4: ${skaicius4} `);
})

let skaicius5=5;
let skaicius6=6;

skaicius5 = (skaicius5 ^ skaicius6);
skaicius6 = (skaicius5 ^ skaicius6);
skaicius5 = (skaicius5 ^ skaicius6);

 document.querySelector('#rezultatas').innerHTML = (` Skaicius5 = ${skaicius5} \n Skaicius 6 = ${skaicius6} `);