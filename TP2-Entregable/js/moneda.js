class Moneda{
    constructor(con,urlFondo) {
        this.con=con;
        this.urlFondo=urlFondo;
        this.fondo= new Image();
        this.ubicacionEje={x:0,y:0};
    }
    mostrar(x,y){ 
        this.ubicacionEje.x=x;
        this.ubicacionEje.y=y;
        this.con.beginPath();
        this.fondo.src=this.urlFondo;
        let subirFondo=function(){
            this.con.drawImage(this.fondo,this.ubicacionEje.x,this.ubicacionEje.y,73,73);
        }
        this.fondo.onload=subirFondo.bind(this);
        this.con.closePath();
    }
}