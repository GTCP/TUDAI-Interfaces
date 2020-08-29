"use strict";
ejercicio_1();
ejercicio_2();
ejercicio_3();

function ejercicio_1(){  
    let rows=100;
    let cols=100;
    let matriz = [];
    inicializar_matriz(rows,cols,matriz);
   // let valorMaximoDeTodaLaMatriz=valor_maximo_de_toda_la_matriz(rows,cols,matriz);
   // let valorMaximoPorFilaPares=valor_maximo_por_fila_pares(rows,cols,matriz);
   // let valorMinimoPorFilaImpares=valor_minimo_por_fila_Impares(rows,cols,matriz);
   // promedio_de_cada_fila_en_arreglo(rows,cols,matriz);

    console.log("Ejercicio1 OFF");

}
function inicializar_matriz(rows,cols,matriz){
    for(let i =0;i< rows; i++){
        matriz[i] = [];
        for(let j=0; j < cols ; j++){
            matriz[i][j]= (parseInt)(Math.random()*100);
            console.log("["+matriz[i][j]+"]");
        }
    }
    console.log("inicializar_matriz OFF");
}  
function valor_maximo_de_toda_la_matriz(rows,cols,matriz){
    let valorMaximo=0;
    for(let i =0;i< rows; i++){
        for(let j=0; j < cols ; j++){
            if(matriz[i][j]>valorMaximo){
                valorMaximo=matriz[i][j];
            }
        }
    }
    console.log("Valor maximo de toda la matriz: "+valorMaximo);
    console.log("valor_maximo_de_toda_la_matriz OFF");
    return valorMaximo;
}
function valor_maximo_por_fila_pares(rows,cols,matriz){
    let valorMaximo=0;
    for(let i =0;i< rows; i++){
        for(let j=0; j < cols ; j++){
            if(i%2==0){
                if(matriz[i][j]>valorMaximo){
                    valorMaximo=matriz[i][j];
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
    for(let i =0;i< rows; i++){
        for(let j=0; j < cols ; j++){
            if(i%2!=0){
                if(matriz[i][j]<valorMinimo){
                    valorMinimo=matriz[i][j];
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
    let promedio = [];
        for(let i =0;i< rows; i++){
            for(let j=0; j < cols ; j++){
                promedioPorFila+=matriz[i][j];
            }
            promedioPorFila=promedioPorFila/cols;
            promedio[i]=promedioPorFila;
            promedioPorFila=0;
        }
        //Ver arreglo
       // for(let i=0;i<promedio.length;i++){
       //     console.log(promedio[i]);
       // }

    console.log("promedio_de_cada_fila_en_arreglo OFF");
    return promedio;
}

function ejercicio_2(){
        let c = document.getElementById("canvas-ejercicio2");
        let con = c.getContext("2d");
        let width= c.width;
        let height= c.height;  
        con.fillStyle = "rgb(255,0,0)";
        con.fillRect(0, 0, width, height);  

        console.log("Ejercicio2 OFF");
       
}
function ejercicio_3(){

    let c = document.getElementById("canvas-ejercicio3");
    let con = c.getContext("2d");
    let height = c.height;
    let width = c.width;
    let imageData = con.createImageData(c.width, c.height);
    set_pixeles(imageData, 0, 0, 255, 255);
    
    function set_pixeles(image, r, g, b, a){
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                let index = (i+j*width)*4;
                image.data[index+0] = r;
                image.data[index+1] = g;
                image.data[index+2] = b;
                image.data[index+3] = a; 
            }
        }
        con.putImageData(imageData, 0, 0 );
    }   
    console.log("Ejercicio3 OFF");
}
function ejercicio_4(){
    console.log("Ejercicio4 OFF");
}