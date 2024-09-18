const Circle = document.querySelector('#circle');

//event listener
Circle.addEventListener('mouseenter', () =>{
    if(!Circle.classList.contains('hover')){
        Circle.classList.add('hover');
    }
});

Circle.addEventListener('mouseleave', () =>{
    if(Circle.classList.contains('hover')){
        Circle.classList.remove('hover');
    }
});