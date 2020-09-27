document.addEventListener('DOMContentLoaded', function () {
   // let  preguntas=false;
   // let primerParticipante;
   // let segundoParticipante;
  /*  if(!preguntas){
        let form=document.getElementById("input-formulario").addEventListener("click",function(e){
        preguntas=true;
        primerParticipante=document.getElementById("participante-1").value;
        segundoParticipante=document.getElementById("participante-2").value;
        console.log("PARTICIPANTE 1:"+primerParticipante);
        console.log("PARTICIPANTE 2:"+segundoParticipante);
        location.href="../html/index.html";
        });
    }
    */    
    let c=document.querySelector("#canvas");
   let con=c.getContext("2d");
   let partida = new Partida(c);
   partida.nueva_partida();
     
            let borradoAutomatico=document.getElementById("reiniciar-partida").addEventListener("click",function(){
                partida.nueva_partida();
                console.log("SE REINICIO");
            });
    //}
});

