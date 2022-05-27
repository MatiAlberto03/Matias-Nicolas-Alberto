let horas = 7;
let minutos = 0;
let segundos = 0;


function cargarSegundo(){
    let txtSegundos;
    
    
    if(segundos < 0){
        segundos = 59; 
    }
    else if(segundos < 10){
        txtSegundos = `${segundos}`;
    }else{
        txtSegundos = segundos;

    }
    const $seleccion = document.getElementById("segundos"); 
    $seleccion.innerHTML = txtSegundos
    segundos --;
}

cargarSegundo();


setInterval(cargarSegundo, 1000);

function cargarMinutos(segundos){
    txtMinutos;
}