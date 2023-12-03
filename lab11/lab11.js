'use strict'

let mainInput=document.querySelector('.message_box_inputcard_input')
let mainInputIcon=document.querySelector('.message_box_inputcard_icon')
let ul=document.querySelector('.message_box_ul')


mainInputIcon.addEventListener('click',()=>{
    let li=document.createElement("li")
    ul.append(li)
    li.innerText=mainInput.value.trim()

    let removeBTN=document.createElement('i')
    removeBTN.classList.add('fa-solid')
    removeBTN.classList.add('fa-x')
    ul.appendChild(removeBTN)

    
            
    mainInput.value=""
})

