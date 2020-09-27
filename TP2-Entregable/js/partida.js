class Partida{
    constructor(c){
        this.c=c;
        this.con=this.c.getContext("2d");
        this.primerParticipante;
        this.segundoParticipante;
        this.pizarra;
        this.monedas=[];
    }
    borrado_automatico(){
        this.con.fillStyle="rgba(51,0,0,255)";
        this.con.fillRect(0,0,this.c.width,this.c.height);
    }
    nueva_partida(){
        this.borrado_automatico();
        this.primerParticipante=new Participante("Participante 1",1);
        this.segundoParticipante=new Participante("Participante 2",2);
        this.pizarra=new Pizarra(this.c);
        this.pizarra.mostrar();
        this.crear_ubicar_monedas(); 
    }
    crear_ubicar_monedas(){
        let dolar;
        let euro;
        let monedas;
        let monedasTotales=6*7;//tamaño depizarra de la imagen
        let imagenPrimerParticipante="../css/images/dolar.png";
        let imagenSegundoParticipante="../css/images/euro.png";
        let x=25;
        let y=((x-5)/2)+5;
        for(monedas=0;monedas<monedasTotales;monedas+=2){
            dolar=new Moneda(this.con,imagenPrimerParticipante);
            euro=new Moneda(this.con,imagenSegundoParticipante);
            this.monedas.push(dolar);
            this.monedas.push(euro);
            dolar.mostrar(x+5,y);//ubicacion en canvas del dolar
            euro.mostrar(x+418,y);//ubicacion en canvas del euro
            x+=50;//controla que tan juntas estan en el eje
            if(monedas%((y/2)+0.5)==0){//controla que no esten todas juntas y cerca de las demas del otro participante
                x=0;
            }
        }
    }
} 