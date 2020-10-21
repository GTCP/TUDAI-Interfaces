document.addEventListener("DOMContentLoaded", function(){
    let=contadorevento1=0;
    let menuEvento=document.querySelector("#evento").addEventListener("click", function(){
        if(contadorevento1%2==0){
            document.querySelector(".verEvento").style.display="block";
        }
        else{
        document.querySelector(".verEvento").style.display="none";
        }    
        contadorevento1++;
    });
    let=contadorevento2=0;
    let menuEvento2=document.querySelector("#evento2").addEventListener("click", function(){
        if(contadorevento2%2==0){
            document.querySelector(".verEvento2").style.display="block";
        }
        else{
        document.querySelector(".verEvento2").style.display="none";
        }    
        contadorevento2++;
    });
    let=contadorevento3=0;
    let menuEvento3=document.querySelector("#evento3").addEventListener("click", function(){
        if(contadorevento3%2==0){
            document.querySelector(".verEvento3").style.display="block";
        }
        else{
        document.querySelector(".verEvento3").style.display="none";
        }    
        contadorevento3++;
    });
});