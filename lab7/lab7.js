    // let country = prompt("Please enter your country");
    // switch (country) {
    //     case 'Azerbaijan':
    //         alert( 'Baku' );
    //         break;

    //     case 'coni':
    //         alert( 'Ruslan' );
    //         break;

    //     case 'Amerika':
    //         alert( 'New-York' );
    //         break;

    //     case 'Turkey':
    //         alert( 'Ankara' );
    //         break;

    //     default:
    //         alert('not have countyr capital')
    //         break;
    // }

    // let saniye=prompt("Enter a second");{

    // }
         
    //   let saniye = parseInt(prompt("Saniyeni daxil edin:"));
    //   let deqiqe = Math.floor(saniye/60);
    //   let lastSecond= saniye%60;
    //   alert(deqiqe + "deqiqe" +" "+ lastSecond + "saniyeye bərabərdir.");

    // function faktorialHesablama(n){
    //     if(n===1){
    //         return 1;
    //     }
    //     else{
    //         return n * faktorialHesablama(n-1);
    //     }
    // }

    // let say=parseInt(prompt("reqem daxil ele"));
    // let faktorial=faktorialHesablama(say);

    // alert(faktorial)

let  getNumber=parseInt(prompt("reqem daxil ele"));
let faktorial=1;

for(let i=1; i<=getNumber; i++){
    faktorial= faktorial*i
}
alert(faktorial)


