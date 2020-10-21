document.addEventListener('DOMContentLoaded', function () {

    let atras= document.querySelector(".atras");
    let adelante= document.querySelector(".adelante");
    let carrou= document.querySelector(".gallery");
    let presente= 1;
    let max= 9;
    let ElijahWood=document.querySelector('.ElijahWood');
    let OrlandoBloom=document.querySelector('.OrlandoBloom');
    let ViggoMortensen=document.querySelector('.ViggoMortensen');
    let JohnRhysDavies=document.querySelector('.JohnRhys-Davies');
    let IanMcKellen=document.querySelector('.IanMcKellen');
    let SeanBean=document.querySelector('.SeanBean');
    let WilliamBoyd=document.querySelector('.WilliamBoyd');
    let DominicMonaghan=document.querySelector('.DominicMonaghan');
    let SeanAstin=document.querySelector('.SeanAstin');
    let tarjeta=document.querySelector('.tarjetas');
    let hora = document.querySelector(".hora");
    let dia = document.querySelector(".dia");    
    let botonEmail=document.getElementById("botonEmail");
    let inputIndex=document.getElementById("inputIndex");
    comienza();
    setInterval(comienza, 1000);
    window.addEventListener('scroll', function () {
        tarjeta.style.backgroundColor=RGB();
        ElijahWood.classList.add("contactomagico");
        setInterval(eliminarClase1,1000);   
        OrlandoBloom.classList.add("contactomagico");
        setInterval(eliminarClase2,1000);    
        ViggoMortensen.classList.add("contactomagico");
        setInterval(eliminarClase3,1500); 
        JohnRhysDavies.classList.add("contactomagico");
        setInterval(eliminarClase4,1500); 
        IanMcKellen.classList.add("contactomagico");
        setInterval(eliminarClase5,1500); 
        SeanBean.classList.add("contactomagico");
        setInterval(eliminarClase6,1500); 
        WilliamBoyd.classList.add("contactomagico");
        setInterval(eliminarClase7,1500); 
        DominicMonaghan.classList.add("contactomagico");
        setInterval(eliminarClase8,1500); 
        SeanAstin.classList.add("contactomagico");
        setInterval(eliminarClase9,1500); 
            function eliminarClase1(){ 
                ElijahWood.classList.remove("contactomagico");
            }
            function eliminarClase2(){ 
                OrlandoBloom.classList.remove("contactomagico");
            }  
            function eliminarClase3(){ 
                ViggoMortensen.classList.remove("contactomagico");
            } 
            function eliminarClase4(){ 
                JohnRhysDavies.classList.remove("contactomagico");
            }  
            function eliminarClase5(){ 
                IanMcKellen.classList.remove("contactomagico");
            }  
            function eliminarClase6(){ 
                SeanBean.classList.remove("contactomagico");
            }  
            function eliminarClase7(){ 
                WilliamBoyd.classList.remove("contactomagico");
            }  
            function eliminarClase8(){ 
                DominicMonaghan.classList.remove("contactomagico");
            }  
            function eliminarClase9(){ 
                SeanAstin.classList.remove("contactomagico");
            }  
            function RGB(){
                let valor=0;
                valor=getRandomInt(1, 11);
                retornar(valor);
                function retornar(){
                    switch(valor){
                        case 1: return "aquamarine";break;
                        case 2: return "#A0A0A0";break;
                        case 3: return "#FFCCFF";break;
                        case 4: return "#CE5FF";break;
                        case 5: return "#404040" ;break;
                        case 6: return "#990000";break;
                        case 7: return "#FFCCCC";break;
                        case 8: return "#00FF80" ;break;
                        case 9: return "#FFCCE5";break;
                        case 10: return "#663300" ;break;
                        case 11: ;break;
                        case 12: ;break;
                        case 13: ;break;
                        case 14: ;break;
                        case 15: ;break;
                        case 16: ;break;
                        case 17: ;break;
                        case 18: ;break;
                        case 19: ;break;
                        case 20: ;break;
                        case 21: ;break;
                        case 22: ;break;
                        case 23: ;break;
                        case 24: ;break;
                        case 25: ;break;
                        case 26: ;break;
                        case 27: ;break;
                        case 28: ;break;
                        case 29: ;break;
                        case 30: ;break;
                        }
                    }
                function getRandomInt(min, max) {
                            min = Math.ceil(min);
                            max = Math.floor(max);
                            return Math.floor(Math.random() * (max - min) + min); 
                }
            return retornar(valor);
            }
    });
    function comienza(){
        let ahora=new Date();
        let fecha=new Date(2020,10,1,0,0,0);
        let s=Math.floor((fecha-ahora)/1000)%60;
        let m=Math.floor(((fecha-ahora)/60000)%60);
        let d=Math.floor((fecha-ahora)/(1000*60*60*24));
        let h=Math.floor(((fecha-ahora)%86400000)/3600000);
        hora.innerHTML=h+":"+m+":"+s;
        dia.innerHTML=d+"Dias";}  
    botonEmail.addEventListener("click", function() {
        inputIndex.value="";
    });
    adelante.addEventListener('click', function(){
        if(presente==0||presente>max){
            presente=1;
        }
        carrou.style.backgroundImage = "url(../css/images/gallery/"+presente+".jpg)";
        presente++;
    });
    atras.addEventListener('click', function(){
        if(presente==0||presente>max){
            presente=max;
        }
        carrou.style.backgroundImage="url(../css/images/gallery/"+presente+".jpg)";
        presente--;
    });
});