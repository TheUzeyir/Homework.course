// let hour=document.querySelector('.clock_time_hour')
// let min=document.querySelector('.clock_time_min')
// let san=document.querySelector('.clock_time_san')


// setInterval(function time(){
    
//     let nowTime = new Date();
//     let nowHour = nowTime.getHours();
//     let nowMin = nowTime.getMinutes();
//     let nowSan = nowTime.getSeconds();
//     hour.innerText=nowHour
//     min.innerText=nowMin
//    san.innerText=nowSan
// }, 1000)

//------------------------------------------------------------------------------------------------------------

let  input=document.querySelector('.game-input')
let btn=document.querySelector('.game_btn')
let guess_text=document.querySelector('.game_guess-text')
let guess_result=document.querySelector('.game_guess-result')
let try_element=document.querySelector('.game_guess-text_try')
let guess_arr=document.querySelector('.game_guess_array')

let randomNumber = Math.floor(Math.random() * 100) + 1;

let number=0
let arr=[]

btn.addEventListener('click',()=>{
    btn.innerText='Guess'
    if (input.value>100 || input.value<=0) {
        alert('Please enter a number 1 and 100')
    }

    else{
        arr.push(input.value)
        
        if (input.value==randomNumber) {
            guess_result.innerText='Congratulations'
            btn.disabled=true;
        } 
    
        else if (input.value>randomNumber) {
            guess_result.innerText='Guess low number'
        }
    
        else if (input.value<randomNumber) {
            guess_result.innerText='Guess high number'
        }
        
        number++
        try_element.innerText=number
        guess_arr.innerText=`Your Guess Number${arr}`

        if(number>=3){
            alert("you lost")
            btn.disabled=true
        }
    }

})
// https://github.com/TheUzeyir/Homework.course/tree/main/lab14