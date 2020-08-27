"use strict";

let rows=100;
let cols=100;

let matriz = [];
inicializar_matriz();
let valorMaximoDeTodaLaMatriz=valor_maximo_de_toda_la_matriz();
let valorMaximoPorFilaPares=valor_maximo_por_fila_pares();
let valorMinimoPorFilaImpares=valor_minimo_por_fila_Impares();
promedio_de_cada_fila_en_arreglo();


function inicializar_matriz(){
    for(let i =0;i< rows; i++){
        matriz[i] = [];
        for(let j=0; j < cols ; j++){
            matriz[i][j]= (parseInt)(Math.random()*100);
            console.log("["+matriz[i][j]+"]");
        }
    }
    console.log("inicializar_matriz OFF");
}  
function valor_maximo_de_toda_la_matriz(){
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
function valor_maximo_por_fila_pares(){
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
function valor_minimo_por_fila_Impares(){
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
function promedio_de_cada_fila_en_arreglo(){
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

