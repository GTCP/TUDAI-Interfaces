class Moneda{
    constructor(con,numeroParticipante,urlFondo) {
        this.fondo=new Image();
        this.con=con;
        this.urlFondo=urlFondo;
        this.ubicacionEje={x:0,y:0};
        this.ubicacionEjeC={x:0,y:0};
        this.numeroParticipante=numeroParticipante;
        this.tamaño=75;
        this.utilizada=false;
        this.radio=40;
        this.enUso=false;
    }
    mostrar(x,y,solo){
        if(solo){
            this.ubicacionEje.x=this.ubicacionEje.x;
            this.ubicacionEjeC.x=(this.tamaño/3)+this.ubicacionEje.x;
            this.ubicacionEje.y=this.ubicacionEje.y;
            this.ubicacionEjeC.y=(this.tamaño/3)+this.ubicacionEje.y;
            this.fondo.src=this.urlFondo;
        }
        else{
            this.ubicacionEje.x=x;
            this.ubicacionEjeC.x=(this.tamaño/3)+x;
            this.ubicacionEje.y=y;
            this.ubicacionEjeC.y=(this.tamaño/3)+y;
            this.fondo.src=this.urlFondo;
        }
        let subirFondo=function(){
            this.con.drawImage(this.fondo,this.ubicacionEje.x,this.ubicacionEje.y,this.tamaño,this.tamaño);
        }
        this.fondo.onload = subirFondo.bind(this);
        this.con.drawImage(this.fondo,this.ubicacionEje.x,this.ubicacionEje.y,this.tamaño,this.tamaño);  
        this.con.closePath();
    }
    esta_en_uso(x,y){
        if((Math.sqrt(Math.pow((this.ubicacionEjeC.x-x),2)+Math.pow((this.ubicacionEjeC.y-y),2))>(this.radio))){
            return false;
        }
        else {
            return true;
        }
    }
    obtener_utilizada(){
        return this.utilizada;
    }
    obtener_tamaño(){
        return this.tamaño;
    }
    setear_utilizada(){
        this.utilizada=true;
    }
    setear_enUso(valor){
        this.enUso=valor;
    }
    obtener_numero_participante(){
        return this.numeroParticipante;
    }
}