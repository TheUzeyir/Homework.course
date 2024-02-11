// let nextDom=document.getElementById('next');
// let prevDom=document.getElementById('prev');
// let carouselDom=document.querySelector('.carousel')
// let listItemDOm=document.querySelector('.carousel .list')
// let thumbailDOm=document.querySelector('.carousel .thumbnail')

// nextDom.onclick=function(){
//     showSlider('next')
// }
// prevDom.onclick

// let timeRunning=3000;
// let timeAutoNext=7000;
// let runTimeOut;
// let runAutoRun=setTimeout(()=>{
//     nextDom.click();
// },timeAutoNext);

// function showSlider(type){
//     let itemSlider=document.querySelectorAll('.carousel .list .item')
//     let itemThumbail=document.querySelectorAll('.carousel .thumbnail .item')

//     if(type==='next'){
//         listItemDOm.appendChild(itemSlider[0])
//         thumbailDOm.appendChild(itemThumbail[0])
//         carouselDom.classList.add('next')
//     }
//     else{
//         let positionLastItem=itemSlider.length-1;
//         listItemDOm.prepend(itemSlider[positionLastItem]);
//         thumbailDOm.prepend(itemThumbail[positionLastItem]);
//         carouselDom.classList.add('prev');
//     }

//     clearTimeout(runTimeOut);
//     runTimeOut=setTimeout(()=>{
//         carouselDom.classList.remove('next')   
//         carouselDom.classList.remove('prev')   
//     },timeRunning)

//     clearTimeout(runAutoRun);
//     runAutoRun=setTimeout(()=>{
//         nextDom.click();
//     },timeAutoNext)
// }



