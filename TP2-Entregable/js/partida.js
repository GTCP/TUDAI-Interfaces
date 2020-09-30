class Partida {
    constructor(c) {
        this.c=c;
        this.con=this.c.getContext("2d");
        this.pizarra;
        this.monedas=[];
        this.participante=1;
        this.monedaEnUso;
    } 
    nueva_partida(){
        this.con.fillStyle="rgba(51,0,0,255)";
        this.con.fillRect(0,0,this.c.width,this.c.height);   
        this.monedaEnUso=null;
        this.pizarra=null;
        this.monedas=[];  
        this.pizarra=new Pizarra(this.c);
        this.pizarra.mostrar();
        this.crear_ubicar_lugar_monedas(); 
        this.con.fillStyle="rgba(51,0,0,255)";
        this.con.fillRect(0,0,this.c.width,this.c.height);  
    }
    crear_ubicar_lugar_monedas(){
        let monedas;
        let monedasTotales=6*7;
        let imagenPrimerParticipante="../css/images/dolar.png";
        let imagenSegundoParticipante="../css/images/euro.png";
        let x=25;
        let y=((x-5)/2)+5;
        for(monedas=0;monedas<monedasTotales;monedas+=2){
            let dolar=new Moneda(this.con,1,imagenPrimerParticipante);
            let euro=new Moneda(this.con,2,imagenSegundoParticipante);
            this.monedas.push(dolar);
            this.monedas.push(euro);
            dolar.mostrar(0,y);
            euro.mostrar(595,y);
        }
    }
    movimiento_cursor(e){
        this.monedaEnUso.mostrar(e.layerX-30,e.layerY-30);     
        this.con.fillRect(0,0,this.c.width,this.c.height);  
        this.pizarra.mostrar();
        for(let x=0;x<this.monedas.length;x++){
            this.monedas[x].mostrar(0,0,true);
        }    
}
    encontrar_moneda_en_uso(x,y){
        let contador=0;
        let listo=false;
        for(contador=0;contador<this.monedas.length;contador++){
             if(listo==false){
                 let moneda=this.monedas[contador];
                 if(((this.participante)==(moneda.obtener_numero_participante()))&&((moneda.esta_en_uso(x,y))&&(!moneda.obtener_utilizada()))){
                    this.monedaEnUso=moneda;
                    moneda.setear_enUso(true);
                    listo=true;
                    break;
                }
            }
        }
    }  
    caida_cursor(e){
        if(this.monedaEnUso!=null){
            this.monedaEnUso.setear_enUso(false);
            this.monedaEnUso=null;
        }
        this.encontrar_moneda_en_uso(e.layerX,e.layerY);
        this.monedaEnUso.mostrar(e.layerX-30,e.layerY-30);     
        this.con.fillRect(0,0,this.c.width,this.c.height);  
        this.pizarra.mostrar();
        for(let x=0;x<this.monedas.length;x++){
            this.monedas[x].mostrar(0,0,true);
        }    
    }  
    pizarron_en_uso(x,y){       
        if((this.pizarra.esta_en_uso(x,y))&&(this.monedaEnUso!=null)){
            if(this.pizarra.colocar_moneda(this.monedaEnUso,x)){ 
                if(this.pizarra.victoria()){ 
                    switch(this.participante){
                        case 1:this.participante=2;break;
                        case 2:this.participante=1;break;
                    }
                    let mensaje=confirm("Ganaste ¿Otra partida?");
                    if (mensaje){
                        this.nueva_partida();
                        this.pizarra=new Pizarra(this.c);
                    }
                    else{
                        alert("¡Gracias por participar en la beta,este video te ayudará a mejorar!");
                        window.location.href="https://www.youtube.com/watch?v=3R1Cx6uGjMw&ab_channel=KeithGalli";
                    }               
                }
                else{
                    this.monedaEnUso.setear_utilizada();
                    switch(this.participante){
                        case 1:this.participante=2;break;
                        case 2:this.participante=1;break;
                    }
                }
            }
        }
    }
}