"use strict";
Entregable();
function Entregable(){
    let c=document.querySelector(".canvas-ejercicio");
    let con=c.getContext('2d');
    let img=new Image();
    let imageData;
    let imagen= document.getElementById("download");
    img.crossOrigin="Anonymous";
    img.src="http://4.bp.blogspot.com/-1QdTjGJEBWc/T3s--K-hskI/AAAAAAAAC-w/uk27W0ypb2c/s1600/EL-UNIVERSO-061.jpg";

    descargar_imagen

    //let IMAGEN= document.getElementsByClassName("uploadedfile");
    //IMAGEN[0].addEventListener('click' , showComment , false ) ; 
    function showComment(){
        img.src=IMAGEN[0];
     //   img.src="http://4.bp.blogspot.com/-1QdTjGJEBWc/T3s--K-hskI/AAAAAAAAC-w/uk27W0ypb2c/s1600/EL-UNIVERSO-061.jpg";
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
    } 
    let botonDescargarImagen=document.getElementById("download").addEventListener("click",function(){       
        descargar_imagen();   
     });
    let botonBorradoAlternativo=document.getElementById("limpiar").addEventListener("click",function(){       
        c.width=c.width;
    });
    let botonBorradoAutomatico=document.getElementById("borrado-automatico").addEventListener("click",function(){       
        borrado_automatico(imageData);
        con.putImageData(imageData,0,0);
    }); 
    let botonNegativo=document.getElementById("filtro-negativo").addEventListener("click",function(){
        filtro_negativo(imageData);
        con.putImageData(imageData,0,0);
    });
    let botonGris=document.getElementById("filtro-gris").addEventListener("click",function(){
        filtro_gris(imageData);
        con.putImageData(imageData,0,0);
    });
    let botonSepia=document.getElementById("filtro-sepia").addEventListener("click",function(){
        filtro_sepia(imageData);
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


   function filtro_gris(imageData){
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
    function filtro_negativo(imageData){
        
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
            imageData.data[index+0]=255 - r;
            imageData.data[index+1]=255 - g;
            imageData.data[index+2]=255 - b;
        }
        con.putImageData(imageData,0,0);
    }
    function borrado_automatico(){
        for (let x=0;x<c.width; x++){
            for(let y=0;y<c.height;y++){
                let r=rojo(imageData,x,y);
                let g=verde(imageData,x,y);
                let b=azul(imageData,x,y);
                let f=255;
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
            imageData.data[index+0]=  255;
            imageData.data[index+1]=  255;
            imageData.data[index+2]=  255;
        }
        con.putImageData(imageData,0,0);
    }
  
    function filtro_sepia(){
             for (let x=0;x<c.width; x++){
                for(let y=0;y<c.height;y++){
                    let r=rojo(imageData,x,y);
                    let g=verde(imageData,x,y);
                    let b=azul(imageData,x,y);
                    let f=0.2126*r+0.7152*g+0.0722*b;
                    //set_pixeles(imageData,x,y,f,f,f);
                    set_pixeles2(imageData,x,y,f,f,f);
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
                imageData.data[index+0]=255 - r;
                imageData.data[index+1]=255 - g;
                imageData.data[index+2]=255 - b;
            }
            function set_pixeles2(imageData,x,y,r,g,b){
                let index=(x+y*imageData.width)*4;
                imageData.data[index+0]=( r * .393 ) + ( g *.769 ) + ( b * .189 );
                imageData.data[index+1]=( r * .349 ) + ( g *.686 ) + ( b * .168 );
                imageData.data[index+2]=( r * .272 ) + ( g *.534 ) + ( b * .131 );
            }
            con.putImageData(imageData,0,0);
   }
function descargar_imagen(){
        let imgTag = 0;
        imgTag = c.toDataURL("image/png");
        imagen.src = imgTag;
        imagen.setAttribute('style','display: block;');
        document.getElementById("download").setAttribute("href", imgTag);
  
        img.onerror = function() {
            imagen.src = imgTag;
            imagen.setAttribute('style','display: none;');
            document.getElementById("download").setAttribute("href", imgTag);
        }
    
}
}