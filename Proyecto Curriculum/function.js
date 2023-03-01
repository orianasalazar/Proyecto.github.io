document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.backgroundColor='pink';
});

document.getElementById('boton_color2').addEventListener('click', function(){
    document.body.style.backgroundColor='antiquewhite';
});

document.getElementById('boton_color3').addEventListener('click', function(){
    document.getElementById('boton_color').style.display='none'
})

document.getElementById('boton_color3').addEventListener('click', function(){
    document.getElementById('boton_color2').style.display='none'
})

