document.addEventListener('DOMContentLoaded',function(){
    let c=document.getElementById("canvas-ejercicio");
    let partida=new Partida(c);
    partida.nueva_partida();
    c.addEventListener("mouseup",function(e){
        partida.pizarron_en_uso(e.layerX,e.layerY);
        c.removeEventListener("mousemove",movimiento,false);//SACAR
        partida.pizarra.mostrar();
        for(let x=0;x<partida.monedas.length;x++){
            partida.monedas[x].mostrar(0,0,true);
        }
    });
    c.addEventListener("mousedown",function(e){
        partida.caida_cursor(e);
        c.addEventListener("mousemove",movimiento,false);
    });
    let borradoAutomatico=document.getElementById("reiniciar-partida").addEventListener("click",function(){
        partida.nueva_partida();

    });
    let status=document.getElementById("status-partida").addEventListener("click",function(){
        partida.nueva_partida();
    });
    function movimiento(e){
        partida.movimiento_cursor(e);
    }
});