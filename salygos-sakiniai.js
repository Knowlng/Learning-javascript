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

document.querySelector('#button4').addEventListener('click', function(){

    let kampas1;
    let kampas2;
    let kampas3;
    let kampuSuma;

    kampas1 = parseFloat(document.querySelector('#kampas1').value) ;
    kampas2 = parseFloat(document.querySelector('#kampas2').value) ;
    kampas3 = parseFloat(document.querySelector('#kampas3').value) ;
    kampuSuma = kampas1+kampas2+kampas3;

    if(kampuSuma != 180) {
       
        document.querySelector('.trikampio-rezultatas').innerHTML = "ne, negalima";

    } else if(kampas1 == kampas2 && kampas2 == kampas3) {

        document.querySelector('.trikampio-rezultatas').innerHTML = "taip,galima trikampis lygiakraštis";

    } else if(kampas1==kampas2 || kampas2==kampas3 || kampas1==kampas3) {

        document.querySelector('.trikampio-rezultatas').innerHTML = "taip,galima trikampis lygiašonis";

    } else {
        document.querySelector('.trikampio-rezultatas').innerHTML ="taip,galima trikampis įvairiakraštis";
    }

});

document.querySelector('#button4').addEventListener('click', function(){

        let kampas1;
        let kampas2;
        let kampas3;
        let kampuSuma;
    
        kampas1 = parseFloat(document.querySelector('#kampas1').value) ;
        kampas2 = parseFloat(document.querySelector('#kampas2').value) ;
        kampas3 = parseFloat(document.querySelector('#kampas3').value) ;
        kampuSuma = kampas1+kampas2+kampas3;

    if(kampuSuma != 180) {

        document.querySelector('.trikampio-rezultatas1').innerHTML = "";

    } else if(kampas1==90 || kampas2==90 || kampas3==90) {

        document.querySelector('.trikampio-rezultatas1').innerHTML = "trikampis yra statusis";

    } else if (179 > kampas1 && kampas1 > 90 || 179 > kampas2 && kampas2 > 90 || 179 > kampas3 && kampas3 > 90) {

        document.querySelector('.trikampio-rezultatas1').innerHTML = "trikampis yra bukasis";

    } else {

        document.querySelector('.trikampio-rezultatas1').innerHTML = "trikampis yra smailusis";

    }
});

document.querySelector('#button5').addEventListener('click', function(){

    let krastine1;
    let krastine2;
    let krastine3;

    krastine1 = parseFloat(document.querySelector('#krastine1').value) ;
    krastine2 = parseFloat(document.querySelector('#krastine2').value) ;
    krastine3 = parseFloat(document.querySelector('#krastine3').value) ;

    if (krastine1==krastine2 && krastine2==krastine3) {

        document.querySelector('.krastine-rezultatas').innerHTML = "taip, įmanoma trikampis lygiakraštis";
    
    } else if(krastine1==krastine2 && 2*krastine1-1>=krastine3>=1 || krastine2==krastine3 && 2*krastine2-1>=krastine1>=1 || krastine3==krastine1 && 2*krastine3-1>=krastine2>=1 ) {

        document.querySelector('.krastine-rezultatas').innerHTML = "taip, įmanoma  trikampis lygiašonis";
    }
    else if (krastine1+krastine2 > krastine3 && krastine1+krastine3 > krastine2 && krastine2+krastine3 > krastine1) {

        document.querySelector('.krastine-rezultatas').innerHTML = "taip, įmanoma trikampis įvairiakraštis";

    } else {
        document.querySelector('.krastine-rezultatas').innerHTML = "ne, trikampį sudaryt neįmanoma";
    }
});


document.querySelector('#button5').addEventListener('click', function(){

    let krastine1;
    let krastine2;
    let krastine3;

    krastine1 = parseFloat(document.querySelector('#krastine1').value) ;
    krastine2 = parseFloat(document.querySelector('#krastine2').value) ;
    krastine3 = parseFloat(document.querySelector('#krastine3').value) ;

    if(krastine1 >= krastine2 && krastine1 >= krastine3) {

        if(krastine1*krastine1==krastine2*krastine2+krastine3*krastine3){

            document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";

        } else if (Math.cos((krastine2*krastine2+krastine3*krastine3)/2*krastine2*krastine3)>0 && -1>Math.cos((krastine2*krastine2+krastine3*krastine3)/2*krastine2*krastine3)) {

            document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra bukasis";

        } else {

        }

    }   else if (krastine2 >= krastine1 && krastine2 >= krastine3) {

        if(krastine2*krastine2==krastine1*krastine1+krastine3*krastine3) {

            document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";
        }
    }   else {

        if(krastine3*krastine3==krastine2*krastine2+krastine1*krastine1) {

            document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";
        }
    }
});
