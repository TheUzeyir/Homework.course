'use strict'

let mainInput=document.querySelector('.message_box_inputcard_input')
let mainInputIcon=document.querySelector('.message_box_inputcard_icon')
let ul=document.querySelector('.message_box_ul')


mainInputIcon.addEventListener('click',()=>{
    if (mainInput.value.trim()==='') {
        alert('Amil yazi yazmamisan coni');

        return;
    }


    let li=document.createElement("li")
    li.textContent=mainInput.value.trim('')
    
    let removeBTN=document.createElement('i')
    removeBTN.classList.add("fa-solid")
    removeBTN.classList.add("fa-times")

    let listBox=document.createElement('div')
    listBox.appendChild(li)
    listBox.appendChild(removeBTN)
    ul.appendChild(listBox)
    
    removeBTN.addEventListener('click',()=>{
        listBox.remove()
    })


    mainInput.value=""
})