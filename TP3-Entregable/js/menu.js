document.addEventListener("DOMContentLoaded", function(){
    let contadorhAMBURG=0;
    let menuhamburguesa=document.querySelector("#menu").addEventListener("click", function(){
        if(contadorhAMBURG%2==0){
            document.querySelector(".ver").style.display="block";
        }
        else{
        document.querySelector(".ver").style.display="none";
        }    
        contadorhAMBURG++;
    });
});