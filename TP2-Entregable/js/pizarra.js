class Pizarra{
    constructor(c){
        this.c=c;
        this.con=c.getContext("2d");
        this.fondo=new Image();
        this.urlFondo="../css/images/pizarra.png";
        this.monedas=new Array();
        for(let i=1;i<=this.columnas;i++){
            this.monedas[i]=[0,0,0,0,0,0]; 
        }
        this.filas=6;
        this.columnas=7; 
        this.ubicacionEje={x:0,y:0};
    }
    mostrar(){
        this.fondo.src=this.urlFondo;
        let subidaFondo=function(){
            this.ubicacionEje.x=(this.c.width/2)-(this.fondo.width/2);
            this.ubicacionEje.y=(this.c.height/2)-(this.fondo.height/2)+55;
            this.con.drawImage(this.fondo,this.ubicacionEje.x,this.ubicacionEje.y,this.fondo.width,this.fondo.height);
        }
        this.fondo.onload=subidaFondo.bind(this);
    }
}