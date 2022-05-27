let horas = 7;
let minutos = 0;
let segundos = 0;
cargarSegundo();


 function cargarSegundo(){
     let txtSegundos;

     if(segundos < 0){
         segundos = 59;
     }

     if(segundos < 10){
         txtSegundos = `${segundos}`;
     }else{
         txtSegundos = segundos;

     }
     document.getElementById("segundos").innerHTML = txtSegundos;
     segundos --;   
}
     

 function cargarMinutos(segundos){
    txtMinutos;

   if(segundos == -1 && minutos !==0){
       setTimeout(() =>{
           minutos--;
       },500)

   }else if(segundos == -1 && minutos !==0){
       setTimeout(() => {
           minutos = 59;
       },500)
   }

   if(minutos < 10){
        txtMinutos = `${minutos}`;
    }else{
         txtMinutos = minutos;
    }   
    document.getElementById("minutos").innerHTML = txtMinutos;
}
