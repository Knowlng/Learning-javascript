"use strict";

document.querySelector('#button2').addEventListener('click', function(){

    let skaicius01;
    let skaicius02;

    skaicius01 = parseFloat(document.querySelector('#skaicius01').value) ;
    skaicius02 = parseFloat(document.querySelector('#skaicius02').value) ;

    if(skaicius01 > skaicius02) {
       
        document.getElementsByName('rezultatas02')[0].placeholder = skaicius01;

    }   else if (skaicius01 == skaicius02) {

        document.getElementsByName('rezultatas02')[0].placeholder = "reiksmes lygios"

    }   else {
        document.getElementsByName('rezultatas02')[0].placeholder = skaicius02;
    } 

});

document.querySelector('#button3').addEventListener('click', function(){

    let skaicius001;
    let skaicius002;
    let skaicius003;

    skaicius001 = parseFloat(document.querySelector('#skaicius001').value) ;
    skaicius002 = parseFloat(document.querySelector('#skaicius002').value) ;
    skaicius003 = parseFloat(document.querySelector('#skaicius003').value) ;

    if(skaicius001 >= skaicius002 && skaicius001 >= skaicius003) {
       
        document.getElementsByName('rezultatas003')[0].placeholder = skaicius001;

    }   else if (skaicius002 >= skaicius001 && skaicius002 >= skaicius003) {

        document.getElementsByName('rezultatas003')[0].placeholder = skaicius002;

    }   else {

        document.getElementsByName('rezultatas003')[0].placeholder = skaicius003;

    }
});