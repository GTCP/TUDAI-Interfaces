document.addEventListener('DOMContentLoaded', function () {
    let c=document.querySelector("#canvas");
    let con=c.getContext("2d");
    let partida = new Partida(c);
    let borradoAutomatico=document.getElementById("reiniciar-partida").addEventListener("click",function(){
        con.clearRect(0,0,c.width,c.height);
        con.fillStyle="rgba(51,0,0,255)";
        con.fillRect(0,0,c.width, c.height);
        partida.nueva_partida();
    });
    partida.nueva_partida();
});