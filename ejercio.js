document.getElementById("btn1").onclick = () => ejecutar(1);
document.getElementById("btn2").onclick = () => ejecutar(2);
document.getElementById("btn3").onclick = () => ejecutar(3);
document.getElementById("btn4").onclick = () => ejecutar(4);

function listarNumeros(){
    for(let i = 0; i <= 3; i++){
        console.log(i);
    }
}

function listarNumerosReversa(){
    for(let i = 3; i >= 0; i--){
        console.log(i);
    }
}

function listarPares(){
    for(let i = 0; i <= 10; i+=2){
        console.log(i);
    }
}

function listarImpares(){
    for(let i = 1; i <= 7; i+=2){
        console.log(i);
    }
}

function ejecutar(numeor){
    if(numeor == 1){
        listarNumeros();
    }else if(numeor == 2){
        listarNumerosReversa();
    }else if(numeor == 3){
        listarPares();
    }else if(numeor == 4){
        listarImpares();
    }
}