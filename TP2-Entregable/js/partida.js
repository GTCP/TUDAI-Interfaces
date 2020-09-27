class Partida {
    constructor(c) {
            this.c=c;
            this.con=this.c.getContext("2d");
            this.participante=1;
        }
    
    borrado_automatico(){
        this.con.fillStyle="rgba(51,0,0,255)";
        this.con.fillRect(0,0,this.c.width,this.c.height);
    }
    mostrar_pizarra() {
        if(this.pizarra===null){
            this.pizarra=new Pizarra(this.c);
        }
        this.pizarra.mostrar();
    }
    nueva_partida(){
        this.pizarra=null;
        this.borrado_automatico();
        this.mostrar_pizarra();
    }
}