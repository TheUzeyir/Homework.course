'use strict'
let btn=document.querySelector('.form_box_button')
let nameInput=document.querySelector('.form_box_name-input')
let surNameInput=document.querySelector('.form_box_surname-input')
let email=document.querySelector('.form_box_email-input')
let password=document.querySelector('.form_box_password-input')    
let tr=document.createElement('tr')
let td1=tr.appendChild(document.createElement('td'));
let td2=tr.appendChild(document.createElement('td'));
document.getElementById('tbl').appendChild(tr);

let arr=[]
btn.addEventListener('click',(e)=>{

    e.preventDefault()
    td1.textContent+=nameInput.value
    td2.textContent+=surNameInput.value
    
    function Employee(name,surName,email,password){
        this.name=name
        this.surName=surName
        this.email=email
        this.password=password
    }


    let person=new Employee(nameInput.value,surNameInput.value,email.value,password.value)
    arr.push(person)
    console.log(arr)

    nameInput.value=''
    surNameInput.value=''
    email.value=''

    if (password.value.length<8) {
        alert('Please enter password 8 caracter!');
        td1.style.display="none"
        td2.style.display="none"
    }
    password.value=""
})