"use strict";



document.querySelector('#sudeti').addEventListener('click', function(){

    let skaicius1;
    let skaicius2;
    let rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    rezultatas=skaicius1+skaicius2;

    document.querySelector('.rezultatas1').innerHTML = rezultatas;

});

document.querySelector('#atimti').addEventListener('click', function(){

    let skaicius1;
    let skaicius2;
    let rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    rezultatas=skaicius1-skaicius2;

    document.querySelector('.rezultatas1').innerHTML = rezultatas;

});

document.querySelector('#padauginti').addEventListener('click', function(){

    let skaicius1;
    let skaicius2;
    let rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    rezultatas=skaicius1*skaicius2;

    document.querySelector('.rezultatas1').innerHTML = rezultatas;

});

document.querySelector('#padalinti').addEventListener('click', function(){

    let skaicius1;
    let skaicius2;
    let rezultatas;

    skaicius1 = parseFloat(document.querySelector('#skaicius1').value);
    skaicius2 = parseFloat(document.querySelector('#skaicius2').value);

    rezultatas=skaicius1/skaicius2;

    document.querySelector('.rezultatas1').innerHTML = rezultatas;

});