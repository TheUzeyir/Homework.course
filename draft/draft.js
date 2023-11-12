"use strict";

// alert('hello world');
//------------------------------------------------------------------

// prompt('hello world');
//------------------------------------------------------------------

// alert(3 +1+ 2);
//------------------------------------------------------------------

// prompt(3 +1+ 2);
//------------------------------------------------------------------

// alert("Hello");
// [1, 2].forEach(alert);
//------------------------------------------------------------------

// let message; 
// message = 'Hello!';
//------------------------------------------------------------------


// let user = 'John';
// let age = 25;
// let message = 'Hello';
// console.log(user, age, message )
//------------------------------------------------------------------


// let user = 'John';
// user = 25;
// user = 'Hello';
// console.log(user )          en axirincini secir  
//------------------------------------------------------------------


// let user = 'John',
//   age = 25,
//   message = 'Hello';
//   console.log(user, age, message )
//------------------------------------------------------------------



// let message;
// message="hello"
// message="world"

// alert(message)
// console.log(alert)
//2cisini secir  
//console.log-a verendede hecne olmur alert native cod-yazir
//------------------------------------------------------------------



// let hello,message;
// hello="Hello world"

// message=hello
// alert(message)
//------------------------------------------------------------------------ 
// let name, admin;
// name="john"
// admin=name;
// alert(admin)

//------------------------------------------------------------------


// let message = "This";
// let message = "That";
// error verecek cunki eyni adla isdifade etmisik, let sozu olmasa ikincide ise yarayacaq-birincide yox ikincide
//------------------------------------------------------------------


// num = 5;
// alert(num); 
// bu kod normalda islememelidi cunki deyer elan etmemisik ancaq "use strict modeni legv elesek iisleyecek"
//------------------------------------------------------------------


// const myBirthday = '18.04.1982';
// console.log(myBirthday)
//------------------------------------------------------------------

// const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001';
// let-den ferqli olaraq const-da deyeri ikinci defe deyisdirmek olmur
//------------------------------------------------------------------


// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// 
// ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00
//------------------------------------------------------------------

// alert( "not a number" / 2 ); NaN veir ardini oxumur
//------------------------------------------------------------------

// const arr=[];
// //push data sonuna elave edir
// arr.push("hello")  //nese elave edir

// arr.push({name:"azerbaijan"});
// arr.push("balaken");

// //evvele elave edir
// arr.unshift(7777)  //evvele elave edir
// arr.unshift('azer')  //evvele elave edir

// arr.pop() //axirincini silir

// arr.shift()  //evvelkini silir

// // arr.concat()  //iki elementi birlesdirir

// // let str=arr.toString() //  bunun ucun bir let-yaradib console.log=a elave etmek lazimdir


// console.log(arr)
// //------------------------------------------------------------------arr1ci hisse bitis

// const arr1=[1,12,123,1234,12345,123456,'str'];
// const arr2=[21,213,2134,21345,213456,2134567];

// let val1=arr1.slice(2,5) //neceden basdiyib neceye qeder kesim demekdir, bir reqem yazdiqda onnan evveli kesir---indeksleme 1den badiyir
// let val2=arr2.splice(1,4) //neceden basdiyib necedene kesim deyir, bir reqem yazanda onnan oyanani kesir---indeksleme 1den badiyir

// console.log(arr1,val1)
// console.log(arr2,val2)

// let val=arr1.indexOf(1234)  //hansi elementi axtaririq onu gosterir---indeksleme 0dan baslayir olmayan reqem yazdiqda -1 verir

// let val=arr1.lastIndexOf(123456)  //en sonuncu hardadi onun sayini gosterir--indeksleme o-dan basliyir

// let val=arr1.includes(123)  //element icinde varsa true verir yoxdusa false verir

// let val=arr1.forEach((item)=> console.log(item))  //dovr eliyir orginal arraya toxunur callback qebul eleyen itemdir

// let val=arr1.map((x)=>console.log(x)) //dovr eliyir orginal arraya toxunmur,con.log-daki x-a *2 veya basqa reqem yazsaq ona vurur eyni mesele
// toplama veya cixmadada eynidi, string yazdiqda NaN verir--sual undifined verir ---sual(mende str yazanda nan vermir ancaq mlmda verib) callback qebul eleyen itemdir

// let val=arr1.filter((item)=>item>25) //filter eliyir callback qebul eleyen itemdir  bir cox datani bize gosterir

// let val=arr1.find((item)=>item===1234) //axtarib tapir elementi,eger yoxdusa undifined verir  olk cixan datani bize gosterir

// string-in icinde dinamik data isdifade etmek olur yeni string-in icine yazdigimiz her sey yazi kimi qebul edir amma 
// bunu yazannan sora string kimi qebul  etmir bunun ucun tildadan isdifade olunur `soz ${dinamik deyer}`-tilda isaresi 

// let val=arr1.length  //uzunlugunu gosterir

// console.log(val)


// ----------------------------- metods

let metn="some young dream Country of America";

// let val=metn.toUpperCase(); //butun hamisini boyuk herfle yazir

// let val=metn.toLowerCase(); //hamisini balacayla yazir

// let val=metn.includes("dream");  //axtardigimiz metnin orda olub olmadigini gosterir bolean verir cavabda
// 
// let val=metn.indexOf("some") //axtardigimizin harda oldugunu gosterir ara bosluq sayiynan gosterir olmayandada -1deyir
//  herfi deyil sozu goturur indeksleme 0dan basliyir


// let val=metn.endsWith("America"); //sonunun neynen bitdiyine baxmaq ucun isdifade olunur sozu yaziriq bolean verir cavabda startwith eyni seydi

// let val=metn.trim()  //bas ve sondaki bosluqlari silir  basdakini ayrica silmek ucun trim.Start axirdakinda ise trim.End isdifade olunur
// 
// let val=metn.slice(17,25);  //kesmek demekdir hardan basdasin ve hara qeder kessin onu sorusur sozu deyil sozdeki herfi kesir menfi qebul 
// eliyir ve daha suretlidir
 
// let val=metn.substring(10,20); //kesmey demekdir sliceynen eynidi ancaq menfi qebul elemir

// let val=metn.concat(); //stringleri birlesdirir
 
// let val=metn.replace("some","azzar") //deyerdeki ilk yazdigimiz soznen ikinci yazdigimiz sozun yerini deyisir

let val=metn.split("  ")

// let val=metn.
// 
// let val=metn.
// 
// let val=metn.
// 
// let val=metn.
// 
// let val=metn.
// 
// let val=metn.


console.log(val)
// ----------------------------- // ----------------------------- // ----------------------------- // ----------------------------- 

// console.log(val)

// const persons = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '177s',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//   ];


//   let foundMass=persons.filter((item)=>Number(item.mass)>100)
//   console.log(foundMass)

//   let foundGender=persons.filter((item)=>item.gender==="male")
//   console.log(foundGender)


// let foundGender1=persons.every((gender)=>typeof gender==="male")
// console.log(foundGender1)

// const  filteredByEyecolor=persons.filter((item)=>item.eye_color==="blue");

// const longedData=filteredByEyecolor.map((i)=>`Adi-${i.name} cekisi-${i.height} cinsi-${i.gender}`)
// console.log(longedData)

// -----------------------------// ----------------------------- // ----------------------------- 

