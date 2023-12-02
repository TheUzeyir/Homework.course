let img_box=document.querySelector('.slide_img')
let left=document.querySelector('.icon_left')
let right=document.querySelector('.icon_right')

const arr=[
    'animals.jpg',
    'computer.jpg',
    'dogs.jpg',
    'human.jpg',
    'nature.jpg'
]

let i=0;

    left.addEventListener('click',()=>{
        if (i<arr.length) {
        i--;}

        else{
            i>0
        }

        return img_box.setAttribute('src','./img/'+arr[i])
    })
    right.addEventListener('click',()=>{
        if (i<arr.length-1) {i-1;
        i++}
        else{
            i=0
        }
        return img_box.setAttribute('src','./img/'+arr[i])
    }
    
    )


