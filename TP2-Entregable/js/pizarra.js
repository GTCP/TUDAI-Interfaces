class Pizarra{
    constructor(c){
        this.c=c;
        this.con=c.getContext('2d');
        this.monedas=new Array();
        this.fondo=new Image();
        this.urlFondo="../css/images/pizarra.png";
        this.ultimaUbicacionEje={x:0,y:0};
        this.ubicacion={x:0,y:0};
        this.filas=6;
        this.columnas=7; 
        this.ultimoParticipante=null;
        for(let x=1;x<=this.columnas;x++){
            this.monedas[x]=[null,null,null,null,null,null]; 
        }
    }
    colocar_moneda(moneda,x){
        this.ultimaUbicacionEje.x=this.buscar_columna(x);
        let ubicacion=0;
        while(ubicacion<this.filas){
            if(this.monedas[this.ultimaUbicacionEje.x][ubicacion]==null){
                this.ultimaUbicacionEje.y=1+ubicacion;
                let x=0;let y=0;
                if(this.ultimaUbicacionEje.x!=1){
                    x=this.ubicacion.x+5*2+7+(this.ultimaUbicacionEje.x-1)*(18+moneda.obtener_tamaño());
                }else{
                    x=this.ubicacion.x+10+7;
                }
                if(this.ultimaUbicacionEje.y!=1){
                    y=this.ubicacion.y+this.fondo.height-moneda.obtener_tamaño()-19-+(this.ultimaUbicacionEje.y-1)*(17+moneda.obtener_tamaño());;
                }else{
                    y=this.ubicacion.y+this.fondo.height-moneda.obtener_tamaño()-19; 
                }
                moneda.mostrar(x,y);
                this.monedas[this.ultimaUbicacionEje.x].splice(ubicacion,1,moneda);
                this.ultimoParticipante=moneda.obtener_numero_participante();
                
                return true;
            }
            ubicacion++;
        }
        return false;
    }
    buscar_columna(x){
        let ubicacion=1;
        let encontro=false;
        if ((x>10+this.ubicacion.x)&&(x<this.fondo.width-10+this.ubicacion.x)){
            while((!encontro)&(ubicacion<=this.columnas)){
                if((this.ubicacion.x+30-20)+(17*5*ubicacion)>x){
                    encontro=true;
                    return ubicacion;
                }else{
                    ubicacion++;
                }
            }
        }
    }
    mostrar(){    
            this.fondo.src=this.urlFondo;
            let subirFondo=function(){
                this.ubicacion.x=(this.c.width/2)-(this.fondo.width/2);
                this.ubicacion.y=(this.c.height)-(this.fondo.height);
                this.con.drawImage(this.fondo,this.ubicacion.x,this.ubicacion.y,this.fondo.width,this.fondo.height);
            }
            this.fondo.onload = subirFondo.bind(this);
            this.con.drawImage(this.fondo, this.ubicacion.x,this.ubicacion.y,this.fondo.width,this.fondo.height); 
            this.con.closePath();
    }
    esta_en_uso(x,y){
        if (y>this.ubicacion.y||x>5*10+this.ubicacion.x
            ||y<this.ubicacion.y+this.fondo.height
            ||x<this.ubicacion.x+(this.fondo.width+18-37)){
                return true;
            } else {
                return false;
        }
    }
   victoria(){
    let victoria=false;
    let max=3;
    let ubicacion=0;
    let contador=0;
        if(!victoria){//verifica columna
            for(ubicacion; ubicacion+1<this.monedas[this.ultimaUbicacionEje.x].length;ubicacion++){
                if((this.monedas[this.ultimaUbicacionEje.x][ubicacion]!=null&&this.monedas[this.ultimaUbicacionEje.x][ubicacion+1]!=null)&&(this.monedas[this.ultimaUbicacionEje.x][ubicacion].obtener_numero_participante()===this.monedas[this.ultimaUbicacionEje.x][ubicacion+1].obtener_numero_participante())){
                    contador++;
                    if(contador===max){
                        victoria=true;
                        ubicacion=0;
                        contador=0;
                        return true;
                    }
                }
                else{
                    contador=0;
                }
            }
            console.log(victoria);
        }
        if(!victoria){//verifica fila
             contador=0;
             ubicacion=0;
             for(ubicacion=1;ubicacion<this.columnas;ubicacion++){
                if((this.monedas[ubicacion][this.ultimaUbicacionEje.y-1]!=null&&(this.monedas[(ubicacion+1)][this.ultimaUbicacionEje.y-1]!=null))&&(this.monedas[ubicacion][this.ultimaUbicacionEje.y-1].obtener_numero_participante())===this.monedas[(ubicacion+1)][this.ultimaUbicacionEje.y-1].obtener_numero_participante()){
                        contador++;
                        if(contador===max){
                            victoria=true;
                            ubicacion=0;
                            contador=0;
                            return true;
                        }
                }
                else{
                    contador=0;
                }
            }
        }
        //verifica diagonales 
    return victoria;    
    }
}