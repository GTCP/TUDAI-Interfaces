"use strict";
ejercicio_1();
ejercicio_2();
ejercicio_3();
ejercicio_4();
ejercicio_5();
Ejercicio_6();
function ejercicio_1(){  
    let matriz=[];
    let rows=12;
    let cols=12;
    inicializar_matriz(rows,cols,matriz);
    imprimir_matriz(rows,cols,matriz);
    let valorMaximoDeTodaLaMatriz=valor_maximo_de_toda_la_matriz(rows,cols,matriz);
    let valorMaximoPorFilaPares=valor_maximo_por_fila_pares(rows,cols,matriz);
    let valorMinimoPorFilaImpares=valor_minimo_por_fila_Impares(rows,cols,matriz);
    imprimir_promedio(rows,cols,matriz);
    resultadoA.innerHTML="El mayor de toda la matriz es: "+valorMaximoDeTodaLaMatriz;
    resultadoB1.innerHTML="El valor maximo de las filas pares es: "+valorMaximoPorFilaPares;
    resultadoB2.innerHTML="El valor minimo de filas impares es :"+valorMinimoPorFilaImpares;   
    function imprimir_matriz(rows,cols,matriz){
        let tBody=document.getElementById("tBodyMatriz");
            for (let x=0;x<rows;x++) {
                let row=document.createElement("tr");
                let col;
                for (let y=0;y<cols;y++) {
                    col=document.createElement("td");
                    let datoCol=document.createTextNode(matriz[x][y]);
                    col.appendChild(datoCol);
                    row.appendChild(col);
                }
                tBody.appendChild(row);
            }
    }
    function imprimir_promedio(rows,cols,matriz){
        let promedio=promedio_de_cada_fila_en_arreglo(rows,cols,matriz);
             for(let x=0;x<promedio.length;x++){
             resultadoC.innerHTML += "<p>Promedio de la fila"+x+"es:"+promedio[x]+"</p>";
             }
    }
    function inicializar_matriz(rows,cols,matriz){
        for(let x=0;x<rows;x++){
            matriz[x]=[];
            for(let y=0;y<cols;y++){
                matriz[x][y]=(parseInt)(Math.random()*100);
                console.log("["+matriz[x][y]+"]");
            }
        }
        console.log("inicializar_matriz OFF");
    }  
    function valor_maximo_de_toda_la_matriz(rows,cols,matriz){
        let valorMaximo=0;
        for(let x=0;x<rows;x++){
            for(let y=0;y<cols;y++){
                if(matriz[x][y]>valorMaximo){
                    valorMaximo=matriz[x][y];
                }
            }
        }
        console.log("Valor maximo de toda la matriz: "+valorMaximo);
        console.log("valor_maximo_de_toda_la_matriz OFF");
        return valorMaximo;
    }
    function valor_maximo_por_fila_pares(rows,cols,matriz){
        let valorMaximo=0;
        for(let x=0;x<rows;x++){
            for(let y=0;y<cols;y++){
                if(x%2==0){
                    if(matriz[x][y]>valorMaximo){
                        valorMaximo=matriz[x][y];
                    }
                }
            }
        }
        console.log("Valor maximo por filas pares :"+valorMaximo);
        console.log("valor_maximo_por_fila_pares OFF");
        return valorMaximo;
    }
    function valor_minimo_por_fila_Impares(rows,cols,matriz){
        let valorMinimo=99;
        for(let x=0;x<rows;x++){
            for(let y=0;y<cols;y++){
                if(x%2!=0){
                    if(matriz[x][y]<valorMinimo){
                        valorMinimo=matriz[x][y];
                    }
                }
            }
        }
        console.log("Valor minimo por filas impares :"+valorMinimo);
        console.log("valor_minimo_por_fila_Impares OFF");
        return valorMinimo;
    }
    function promedio_de_cada_fila_en_arreglo(rows,cols,matriz){
        let promedioPorFila=0;
        let promedio=[];
            for(let x=0;x<rows;x++){
                for(let y=0;y<cols;y++){
                    promedioPorFila+=matriz[x][y];
                }
                promedioPorFila=promedioPorFila/cols;
                promedio[x]=promedioPorFila;
                promedioPorFila=0;
            }
        console.log("promedio_de_cada_fila_en_arreglo OFF");
        return promedio;
    }
    console.log("Ejercicio1 OFF");
}
function ejercicio_2(){
        let c=document.getElementById("canvas-ejercicio2");
        let con=c.getContext("2d");
        let width=c.width;
        let height=c.height;  
        con.fillStyle="rgb(255,0,0)";
        con.fillRect(0,0,width,height);  
        console.log("Ejercicio2 OFF");
}
function ejercicio_3(){
    let c=document.getElementById("canvas-ejercicio3");
    let con=c.getContext("2d");
    let height=c.height;
    let width=c.width;
    let imageData=con.createImageData(c.width,c.height);
    set_pixeles(imageData,0,0,255,255);
    
    function set_pixeles(image,r,g,b,a){
        for (let x=0;x<width;x++) {
            for (let y=0;y<height;y++) {
                let index=(x+y*width)*4;
                image.data[index+0]=r;
                image.data[index+1]=g;
                image.data[index+2]=b;
                image.data[index+3]=a; 
            }
        }
        con.putImageData(imageData,0,0);
    }   
    console.log("Ejercicio3 OFF");
}
function ejercicio_4(){
    let c=document.getElementById("canvas-ejercicio4");
    let con=c.getContext("2d");
    let height=c.height;
    let width=c.width;
    let imageData=con.createImageData(c.width,c.height);
    for(let x=0;x<width;x++){
        for(let y=0;y<height;y++){
            let color=(y/height)*255;
            set_pixeles(imageData,x,y,color);
        }
    }
    con.putImageData(imageData,0,0);
    function set_pixeles(image,x,y,color){
        let index=(x+y*image.width)*4;
        image.data[index+0]=color;
        image.data[index+1]=color;
        image.data[index+2]=color;
        image.data[index+3]=255;
    }
    console.log("Ejercicio4 OFF");
}
function ejercicio_5(){
    let c=document.getElementById("canvas-ejercicio5");
    let con=c.getContext("2d");
    let imageData=con.createImageData(c.width,c.height*2);
    let height=imageData.height;
    let width=imageData.width;
    let mitadAnchoTotal=width/2;
    let r=0;
    let g=0;
    let b=0;
    primera_mitad();
    segunda_mitad();
    function primera_mitad(){ 
        for(let x=0;x<=mitadAnchoTotal;x++){
            for(let y=0;y<=height;y++){
                r=(x/mitadAnchoTotal)*255;
                g=(x/mitadAnchoTotal)*255;
                set_pixeles(imageData,x,y,r,g,b,255);
            }
        }
    }
    function segunda_mitad(){
        for(let x=mitadAnchoTotal;x<width;x++){ 
            g=(1-((x-mitadAnchoTotal)/mitadAnchoTotal))*255;
            for(let y=0;y<height;y++){
                set_pixeles(imageData,x,y,r,g,0,255);
            }
        }
        con.putImageData(imageData,0,0);
    }
    function set_pixeles(imageData,x,y,r,g,b,a){
        let index=(x+y*imageData.width)*4;
        imageData.data[index+0]=r;
        imageData.data[index+1]=g;
        imageData.data[index+2]=b;
        imageData.data[index+3]=a;
    }
    console.log("Ejercicio5 OFF");
}
function Ejercicio_6(){
    let c=document.querySelector(".canvas-ejercicio6");
    let con=c.getContext('2d');
    let img=new Image();
    let imageData;
    img.crossOrigin="Anonymous";
    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
        $('#yourImage').attr('src', e.target.result);
    };
    img.src="http://4.bp.blogspot.com/-1QdTjGJEBWc/T3s--K-hskI/AAAAAAAAC-w/uk27W0ypb2c/s1600/EL-UNIVERSO-061.jpg";
    let botonFiltro=document.getElementById("filtro").addEventListener("click",function(){
        filtroGris(imageData);
        con.putImageData(imageData,0,0);
    });
    img.onload=function(){
        myDrawImage(this);
        imageData=con.getImageData(0,0,c.width,c.height);
        con.putImageData(imageData,0,0);
    }   
    function myDrawImage(img){
        c.width=img.naturalWidth;
        c.height=img.naturalHeight;
        con.drawImage(img,0,0);
    }
    function filtroGris(imageData){
        for (let x=0;x<c.width; x++){
            for(let y=0;y<c.height;y++){
                let r=rojo(imageData,x,y);
                let g=verde(imageData,x,y);
                let b=azul(imageData,x,y);
                let f=0.2126*r+0.7152*g+0.0722*b;
                set_pixeles(imageData,x,y,f,f,f);
            }
        }
        function rojo(imageData,x,y){
            return imageData.data[(x+y*imageData.width)*4+0];
        }
        function verde(imageData,x,y){
            return imageData.data[(x+y*imageData.width)*4+1];
        }
        function azul(imageData,x,y){
            return imageData.data[(x+y*imageData.width)*4+2];
        }
        function set_pixeles(imageData,x,y,r,g,b){
            let index=(x+y*imageData.width)*4;
            imageData.data[index+0]=r;
            imageData.data[index+1]=g;
            imageData.data[index+2]=b;
        }
        con.putImageData(imageData,0,0);
    }
}

