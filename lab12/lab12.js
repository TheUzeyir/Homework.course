let text1=document.querySelectorAll('.information_box_text1')
let text2=document.querySelectorAll('.information_box_text2')
let box=document.querySelectorAll('.information_box')


box.forEach((item)=>{
    item.addEventListener('click',()=> {
        console.log("clckd")
        item.classList.toggle("active")
    });
});
