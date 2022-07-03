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


// document.querySelector('#button6').addEventListener('click', function(){

//     let x;
//     let y;
//     let z;
//     let x2;
//     let y2;
//     let z2;

//     let skaitiklis;
//     let skaitiklis2;
//     let skaitiklis3;
//     let xats;
//     let yats;
//     let zats;

//     x = parseFloat(document.querySelector('#x').value) ;
//     y = parseFloat(document.querySelector('#y').value) ;
//     z = parseFloat(document.querySelector('#z').value) ;
//     x2 = parseFloat(document.querySelector('#x2').value) ;
//     y2 = parseFloat(document.querySelector('#y2').value) ;
//     z2 = parseFloat(document.querySelector('#z2').value) ;


//     if (z==0 || z2==0) {
//         // vardiklis nelygys nuliui
//         document.getElementsByName('x-ats')[0].placeholder = "trupmena neegziztuoja";
//         document.getElementsByName('y-ats')[0].placeholder = "trupmena neegziztuoja";
//         document.getElementsByName('z-ats')[0].placeholder = "trupmena neegziztuoja";
//         // issikeliam minusus
//     } else if{




//     } else if (z!=z2) {

//         (x*z+y)*z2==skaitiklis;
//         (x2*z2+y2)*z==skaitiklis2;
//         z*z2==zats;

//         skaitiklis+skaitiklis2==skaitiklis3;
//         skaitiklis3 % zats==yats;
//         xats==Math.trunc(skaitiklis3/zats);




//     } else {

//     }


// });



// document.querySelector('#button6').addEventListener('click', function(){

//     let x;
//     let y;
//     let z;
//     let x2;
//     let y2;
//     let z2;

//     let skaitiklis;
//     let skaitiklis2;
//     let skaitiklis3;
//     let xats;
//     let yats;
//     let zats;

//     let ats;

//     x = parseFloat(document.querySelector('#x').value) ;
//     y = parseFloat(document.querySelector('#y').value) ;
//     z = parseFloat(document.querySelector('#z').value) ;
//     x2 = parseFloat(document.querySelector('#x2').value) ;
//     y2 = parseFloat(document.querySelector('#y2').value) ;
//     z2 = parseFloat(document.querySelector('#z2').value) ;



//     if (z==0 || z2==0) {
//         // vardiklis nelygys nuliui
//         document.getElementsByName('x-ats')[0].placeholder = "trupmena neegziztuoja";
//         document.getElementsByName('y-ats')[0].placeholder = "trupmena neegziztuoja";
//         document.getElementsByName('z-ats')[0].placeholder = "trupmena neegziztuoja";
//     } else if(x>0 && x2<0) {
//         x=x*-1;
//         skaitiklis=(x*z+y)*-1;
//         vardiklis=z;
//         ats=math.fraction(skaitiklis/vardiklis);


//     } else

//     skaitiklis=(x*z+y)*z2;
//     skaitiklis2=(x2*z2+y2)*z;
//     zats=z*z2;

//     skaitiklis3=skaitiklis+skaitiklis2;
//     yats=skaitiklis3 % zats;
//     xats=Math.trunc(skaitiklis3/zats);



//     console.log(xats);
//     console.log(yats);
//     console.log(zats);

// });


// document.querySelector('#button6').addEventListener('click', function(){

//     let x;
//     let y;
//     let z;
//     let x2;
//     let y2;
//     let z2;
//     let xats;
//     let yats;
//     let zats;

//     x = parseFloat(document.querySelector('#x').value) ;
//     y = parseFloat(document.querySelector('#y').value) ;
//     z = parseFloat(document.querySelector('#z').value) ;
//     x2 = parseFloat(document.querySelector('#x2').value) ;
//     y2 = parseFloat(document.querySelector('#y2').value) ;
//     z2 = parseFloat(document.querySelector('#z2').value) ;

//     if(z==0 || z2==0) {
//         // ar trupmena egzistuoja
//         document.getElementsByName('x-ats')[0].placeholder = "trupmena neegzistuoja";
//         document.getElementsByName('y-ats')[0].placeholder = "trupmena neegzistuoja";
//         document.getElementsByName('z-ats')[0].placeholder = "trupmena neegzistuoja";
//     } else if() {

       
//         }
//     }



// });

