const name=document.querySelector('.namecard_box_input')
const form=document.querySelector('form')
const buttonX=document.querySelector('.namecard_icon_box')
const buttonNo=document.querySelector('.namecard_box_btn_no')
const buttonYes=document.querySelector('.namecard_box_btn_yes')
const nameCard=document.querySelector('.namecard')
const homeBtn=document.querySelector('.home_btn')

form.addEventListener('change',(e)=>{
e.preventDefault();
console.log(e.target.value);
});

homeBtn.addEventListener("click",()=>{
    nameCard.classList.remove('active')
})

buttonX.addEventListener('click',()=>{
nameCard.classList.add('active')
})

buttonNo.addEventListener('click',()=>{
    nameCard.classList.add('active')
})

buttonYes.addEventListener('click',()=>{
    nameCard.classList.add('active')
})