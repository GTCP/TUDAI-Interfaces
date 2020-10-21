document.addEventListener("DOMContentLoaded", function(){    
    let input1=document.getElementById('input1');
    let input2=document.getElementById('input2');
    let input3=document.getElementById('input3');
    let input4=document.getElementById('input4');
    let input5=document.getElementById('input5');
    let contador=0;
    let formulario2=document.getElementById('formulario');
    let botonInput=document.getElementById("form-input").addEventListener("click", function() {
        formulario2.classList.add("contactomagico2");
        input1.value="";
        input2.value="";
        input3.value="";
        input4.value="";
        input5.value="";
        setInterval(eliminarClase,9000);      
        function eliminarClase(){ 
            formulario2.classList.remove("contactomagico2");
            }
    });
    let primerInput=document.querySelector(".Destinatario").addEventListener("click", function() {
        input1.classList.add("contactomagico");
        setInterval(eliminarClase,9000);     
        function eliminarClase(){ 
        input1.classList.remove("contactomagico");
        }
    });
    let segundoInput=document.querySelector(".Asunto").addEventListener("click", function() {
        input2.classList.add("contactomagico");
        setInterval(eliminarClase,9000);     
        function eliminarClase(){ 
        input2.classList.remove("contactomagico");
        }
    });
    let tercerInput=document.querySelector(".Email").addEventListener("click", function() {
        input3.classList.add("contactomagico");
        setInterval(eliminarClase,9000);     
        function eliminarClase(){ 
            input3.classList.remove("contactomagico");
            }
    });
    let cuartoInput=document.querySelector(".Nombre").addEventListener("click", function() {
        input4.classList.add("contactomagico");
        setInterval(eliminarClase,9000);     
        function eliminarClase(){ 
            input4.classList.remove("contactomagico");
            }
    });
    let quintoInput=document.querySelector(".Mensaje").addEventListener("click", function() {
        input5.classList.add("contactomagico");
        setInterval(eliminarClase,9000);     
        function eliminarClase(){ 
            input5.classList.remove("contactomagico");
            }
    });
    let menuhamburguesa=document.querySelector("#menu").addEventListener("click", function(){
        if(contador%2==0){
            document.querySelector(".ver").style.display="block";
        }
        else{
        document.querySelector(".ver").style.display="none";
        }    
        contador++;
    });
});