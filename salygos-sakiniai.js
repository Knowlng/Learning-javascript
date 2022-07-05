"use strict";

document.querySelector('#button2').addEventListener('click', function(){

    let skaicius01;
    let skaicius02;

    skaicius01 = parseFloat(document.querySelector('#skaicius01').value) ;
    skaicius02 = parseFloat(document.querySelector('#skaicius02').value) ;

    if(skaicius01 > skaicius02) {
        //    galima naudoti .value kad pakeist inputo reiksme, vietoj placeholder
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

    //ar galima sudaryti trikampi
    if (krastine1+krastine2 > krastine3 && krastine1+krastine3 > krastine2 && krastine2+krastine3 > krastine1) {

        // ar pirma krastine didziausia
        if(krastine1 >= krastine2 && krastine1 >= krastine3) {
            // pitagoro teorema ar trikampis status
            if(krastine1*krastine1==krastine2*krastine2+krastine3*krastine3){

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";
            // cosinuso teorema ar trikampis bukas
            } else if ((krastine2*krastine2+krastine3*krastine3-krastine1*krastine1)/(2*krastine2*krastine3)<0 && -1<(krastine2*krastine2+krastine3*krastine3-krastine1*krastine1)/(2*krastine2*krastine3)) {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra bukasis";
                // jeigu niekas netinka, trikampis smailusis
            } else {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra smailusis";

            }
            // ar antra krastine didziausia
        }   else if (krastine2 >= krastine1 && krastine2 >= krastine3) {

            if(krastine2*krastine2==krastine1*krastine1+krastine3*krastine3) {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";

            } else if ((krastine1*krastine1+krastine3*krastine3-krastine2*krastine2)/(2*krastine1*krastine3)<0 && -1<(krastine1*krastine1+krastine3*krastine3-krastine2*krastine2)/(2*krastine1*krastine3))

            document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra bukasis";

            else {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra smailusis";

            }

        }   else {
            // ar trecia krastine didziausia
            if(krastine3*krastine3==krastine2*krastine2+krastine1*krastine1) {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra statusis";

            } else if ((krastine2*krastine2+krastine1*krastine1-krastine3*krastine3)/(2*krastine2*krastine1)<0 && -1<(krastine2*krastine2+krastine1*krastine1-krastine3*krastine3)/(2*krastine2*krastine1)) {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra bukasis";
        
            } else {

                document.querySelector('.krastine-rezultatas1').innerHTML = "trikampis yra smailusis";

            }
        }
    } else {
        // jeigu neimanonma
        document.querySelector('.krastine-rezultatas1').innerHTML = "";

    }
});


document.querySelector('#button6').addEventListener('click', function(){

    let x;
    let y;
    let z;
    let x2;
    let y2;
    let z2;

    let xats;
    let yats;
    let zats;
    let skaitiklis1;
    let vardiklis1;
    let skaitiklis2;
    let vardiklis2;

    x = parseFloat(document.querySelector('#x').value) ;
    y = parseFloat(document.querySelector('#y').value) ;
    z = parseFloat(document.querySelector('#z').value) ;
    x2 = parseFloat(document.querySelector('#x2').value) ;
    y2 = parseFloat(document.querySelector('#y2').value) ;
    z2 = parseFloat(document.querySelector('#z2').value) ;

    // pasiverciam i netaisiklingasisas
    skaitiklis1 = x * z + y;
    vardiklis1=z;
    skaitiklis2 = x2 * z2 + y2;
    vardiklis2=z2;
    
    // bendravardiklinimas
    skaitiklis1=skaitiklis1*vardiklis2;
    skaitiklis2=skaitiklis2*vardiklis1;

    vardiklis1=vardiklis1*vardiklis2;
    vardiklis2=vardiklis1;

    // sudetis
    let sudetasVardiklis, sudetasSkaitiklis;

    sudetasSkaitiklis=skaitiklis1+skaitiklis2;
    sudetasVardiklis=vardiklis2;


    // sveikos dalies iskyrimas
    let SveikojiDalis

    SveikojiDalis=parseInt(sudetasSkaitiklis/sudetasVardiklis);
    sudetasSkaitiklis=sudetasSkaitiklis - SveikojiDalis * sudetasVardiklis;

    if(sudetasSkaitiklis==0) {
        document.getElementsByName('x-ats')[0].placeholder = SveikojiDalis;
        document.getElementsByName('y-ats')[0].placeholder = "";
        document.getElementsByName('z-ats')[0].placeholder = "";
    } else {

        document.getElementsByName('x-ats')[0].placeholder = SveikojiDalis;
        document.getElementsByName('y-ats')[0].placeholder = sudetasSkaitiklis;
        document.getElementsByName('z-ats')[0].placeholder = sudetasVardiklis;
    }
});


