
let inp = document.querySelector('.inputt');
let but = document.querySelector('.butt');
let todolist = document.querySelector('.listt');

but.addEventListener('click', ()=>{
    let inputVal = inp.value;
    if(inputVal== '')
        {alert('Value is not added!')
}else{
    let addedlist = `<li>${inputVal}</li>`;
    todolist.innerHTML += addedlist;
    inp.value = '';
}

})



