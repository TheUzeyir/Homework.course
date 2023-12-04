let btn=document.querySelector('.form_box_button')

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let nameInput=document.querySelector('.form_box_name-input')
    let surNameInput=document.querySelector('.form_box_surname-input')
    let password=document.querySelector('.form_box_password-input')
    


    let tr=document.createElement('tr')
    
    let td1=tr.appendChild(document.createElement('td'));
    let td2=tr.appendChild(document.createElement('td'))

    td1.textContent=nameInput.value
    td2.textContent=surNameInput.value

    document.getElementById('tbl').appendChild(tr);

    if (password.value==='') {
        alert('Please enter password 8 caracter!');
    }

    nameInput.value=""
    surNameInput.value=""
    password.value=""


})