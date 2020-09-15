"use strict";
Entregable();
function ocultar(){
    document.getElementById("mostrarOcultar").style.display="none";
   }
   function mostrar(){
       document.getElementById("mostrarOcultar").style.display="block";
   }
document.getElementById("mostrarOcultar").style.display="none";
function Entregable(){
    let c=document.querySelector(".canvas-ejercicio");
    let image=new Image();
    let con=c.getContext('2d');
    let img=new Image();
    let imageData;
    let imagen= document.getElementById("download");
    img.crossOrigin="Anonymous";
    let botonBorradoAutomatico=document.getElementById("borrado-automatico").addEventListener("click",function(){       
        con.clearRect(0,0,c.width,c.height);
    });
   // img.src="http://4.bp.blogspot.com/-1QdTjGJEBWc/T3s--K-hskI/AAAAAAAAC-w/uk27W0ypb2c/s1600/EL-UNIVERSO-061.jpg";
    img.onload=function(){
        escalaFoto=Math.min(c.width/img.width,c.height/img.height);
        myDrawImage(this,0,0,this.width*escalaFoto,this.height*escalaFoto);
        imageData=con.getImageData(0,0,c.width,c.height);
        con.putImageData(imageData,0,0);
    }  
        function myDrawImage(img){
            c.width=img.naturalWidth;
            c.height=img.naturalHeight;
            con.drawImage(img,0,0);
    } 
//-------------------------- DESCARGAR ARCHIVO----------------------------------------------------------------------------------------------------
    let botonDescargarImagen=document.getElementById("download").addEventListener("click",function(){       
            descargar_imagen();   
    });
    function descargar_imagen(){
        let imgTag=0;
        imgTag=c.toDataURL("image/png");
        imagen.src=imgTag;
        imagen.setAttribute("style","display: block;");
        document.getElementById("download").setAttribute("href",imgTag);
        img.onerror = function() {
            imagen.src=imgTag;
            imagen.setAttribute("style","display: none;");
            document.getElementById("download").setAttribute("href",imgTag);
        }
    } 
//-------------------------- SUBIR ARCHIVO----------------------------------------------------------------------------------------------------
    let archivoSubido=document.getElementById("archivoSubido").addEventListener("change",function(ev){ 
        if (ev.target.files){
            document.getElementById("mostrarOcultar").style.display="block";
            let file=ev.target.files[0];
            let proceso=new FileReader();
            proceso.readAsDataURL(file);
            proceso.onloadend=function(e) {
                image.src=e.target.result; 
                image.onload=function(ev) {
                let canvas=document.getElementById("canvas-ejercicio");
                cargar_image();
                function cargar_image(){
                    image.width=canvas.width;
                    image.height=canvas.height; 
                    con.drawImage(image,0,0,canvas.width,canvas.height); 
                    imageData=con.getImageData(0,0,canvas.width,canvas.height);
                    con.putImageData(imageData,0,0);
                }
            };
            let color="black";
            let grosor=2;
            let dibujando=false;
            let borrando=false;
            let canvas=document.getElementById("canvas-ejercicio");
            let ctx=canvas.getContext("2d");
            let botonlapiz=document.getElementById("lapiz");
            let goma=document.getElementById("goma");
            c.width=500;
            c.height=500;
            canvas.width=500;
            canvas.height=500;
            botonlapiz.addEventListener("click",function(e){
                    borrando=false;
                    let rect=canvas.getBoundingClientRect();
                    let x=0;
                    let y=0;
                    dibujando=false;
                    let color="black";
                    let grosor= 2;
                    let inputColor=document.getElementById("color");
                    canvas.addEventListener("mousedown",function(e){
                        x=e.clientX-rect.left;
                        y=e.clientY-rect.top;
                        dibujando=true;
                        borrando=false;
                    });
                    canvas.addEventListener("mousemove",function(e){
                        if(dibujando===true){
                            dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top);
                            x=e.clientX-rect.left;
                            y=e.clientY-rect.top;
                        }
                    });
                    canvas.addEventListener("mouseup",function(e){
                    if(dibujando===true){
                        dibujar(x,y,e.clientX-rect.left,e.clientY-rect.top);
                        x=0;
                        y=0;
                        dibujando=false;
                    }
            });
    function dibujar(x1,y1,x2,y2){
        ctx.strokeStyle=color;
        ctx.lineWidth=grosor;
        ctx.lineCap="round";
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }
});
goma.addEventListener("click",function(e){
    let rect=canvas.getBoundingClientRect();
    let x=0;
    let y=0;
    borrando=false;
    let grosor=10;
    function defgrosor(g){
        grosor=g;
    }
    canvas.addEventListener("mousedown",function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        borrando=true;
    });
    canvas.addEventListener("mousemove",function(e){
        if(borrando===true){
            borrar(x,y,e.clientX-rect.left,e.clientY-rect.top);
            x=e.clientX-rect.left;
            y=e.clientY-rect.top;
        }
    });
    canvas.addEventListener("mouseup",function(e){
        if(borrando===true){
            borrar(x,y,e.clientX-rect.left,e.clientY-rect.top);
            x=0;
            y=0;
            borrando=false;
        }
    });
    function borrar(x1,y1,x2,y2){
        ctx.strokeStyle="white";
        ctx.lineWidth=grosor;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }
});
};
//-------------------------- FILTRO CONTRASTE----------------------------------------------------------------------------------------------------
    let botonFiltroContraste=document.getElementById("filtro-contraste").addEventListener("click",function(){       
        filtro_contraste();  
    });
    function filtro_contraste(){
        image.width=canvas.width;
        image.height=canvas.height;
        con.drawImage(image, 0, 0, canvas.width, canvas.height); 
        imageData=con.getImageData(0,0,canvas.width,canvas.height);
        con.putImageData(imageData,0,0);;      
        let C=100;
        let FACTOR=(259*(C+255))/(255*(259-C));
        for (let x=0;x<c.width; x++){
            for(let y=0;y<c.height;y++){
                let r=rojo(imageData,x,y);
                let g=verde(imageData,x,y);
                let b=azul(imageData,x,y);
                set_pixeles(imageData,x,y,r,g,b);
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
            imageData.data[index+0]=FACTOR*(r-128)+128;
            imageData.data[index+1]=FACTOR*(g-128)+128;
            imageData.data[index+2]=FACTOR*(b-128)+128;
        }
        con.putImageData(imageData,0,0);
    }
//-------------------------- BORRADO TOTAL----------------------------------------------------------------------------------------------------
    let botonBorradoAutomatico=document.getElementById("borrado-automatico").addEventListener("click",function(){       
    con.clearRect(0, 0, c.width, c.height);
    document.getElementById("mostrarOcultar").style.display="none";
    borrado_automatico();
    }); 
    function borrado_automatico(){
        for (let x=0;x<c.width; x++){
            for(let y=0;y<c.height;y++){
                let r=rojo(imageData,x,y);
                let g=verde(imageData,x,y);
                let b=azul(imageData,x,y);
                set_pixeles(imageData,x,y,r,g,b);
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
            imageData.data[index+0]=255;
            imageData.data[index+1]=255;
            imageData.data[index+2]=255;
        }
        con.putImageData(imageData,0,0);
    }
//-------------------------- FILTRO NEGATIVO----------------------------------------------------------------------------------------------------
    let botonNegativo=document.getElementById("filtro-negativo").addEventListener("click",function(){
        filtro_negativo(imageData);
    });
    function filtro_negativo(){
        image.width=canvas.width;
        image.height=canvas.height;
        con.drawImage(image,0,0,canvas.width,canvas.height); 
        imageData=con.getImageData(0,0,canvas.width,canvas.height);
        con.putImageData(imageData,0,0);;
        for (let x=0;x<c.width;x++){
            for(let y=0;y<c.height;y++){
                let r=rojo(imageData,x,y);
                let g=verde(imageData,x,y);
                let b=azul(imageData,x,y);
                set_pixeles(imageData,x,y,r,g,b);
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
            imageData.data[index+0]=255-r;
            imageData.data[index+1]=255-g;
            imageData.data[index+2]=255-b;
        }
        con.putImageData(imageData,0,0);
    }
//-------------------------- FILTRO GRIS----------------------------------------------------------------------------------------------------
    let botonGris=document.getElementById("filtro-gris").addEventListener("click",function(){
        filtro_gris();
    });
    function filtro_gris(){
        image.width=canvas.width;
        image.height=canvas.height;
        con.drawImage(image,0,0,canvas.width,canvas.height); 
        imageData=con.getImageData(0,0,canvas.width,canvas.height);
        con.putImageData(imageData,0,0);
        for (let x=0;x<c.width;x++){
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
//-------------------------- FILTRO SEPIA----------------------------------------------------------------------------------------------------
    let botonSepia=document.getElementById("filtro-sepia").addEventListener("click",function(){
        filtro_sepia();
    });
    function filtro_sepia(){
        image.width=canvas.width;
        image.height=canvas.height;
        con.drawImage(image,0,0,canvas.width,canvas.height); 
        imageData=con.getImageData(0,0,canvas.width,canvas.height);
        con.putImageData(imageData,0,0);;
        for (let x=0;x<c.width;x++){
           for(let y=0;y<c.height;y++){
               let r=rojo(imageData,x,y);
               let g=verde(imageData,x,y);
               let b=azul(imageData,x,y);
               set_pixeles(imageData,x,y,r,g,b);
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
           imageData.data[index+0]=(r*.393 )+(g*.769 )+(b*.189);
           imageData.data[index+1]=(r*.349 )+(g*.686 )+(b*.168);
           imageData.data[index+2]=(r*.272 )+(g*.534 )+(b*.131);
       }
       con.putImageData(imageData,0,0);
    }  
//-------------------------- FILTRO BLUR----------------------------------------------------------------------------------------------------
let botonBlur=document.getElementById("filtro-blur").addEventListener("click", filtro_blur);
function filtro_blur() {
    image.width=canvas.width;
    image.height=canvas.height;
    con.drawImage(image, 0, 0, canvas.width, canvas.height); 
    imageData=con.getImageData(0,0,canvas.width,canvas.height);
    con.putImageData(imageData,0,0);;
    let mat=[[1,2,1],[2,4,2],[1,2,1]];
    for (let contador=0;contador<5;contador++) {
        for (let w=0;w<imageData.width;w++) {
            for (let h=0;h<imageData.height;h++) {
                let index=[ , , , , , , , , ];
                index[0]=((w - 1 + imageData.width)% imageData.width + imageData.width *((h - 1 + imageData.height)% imageData.height))*4; 
                index[1]=((w - 0 + imageData.width)% imageData.width + imageData.width *((h - 1 + imageData.height)% imageData.height))*4; 
                index[2]=((w + 1 + imageData.width)% imageData.width + imageData.width *((h - 1 + imageData.height)% imageData.height))*4; 
                index[3]=((w - 1 + imageData.width)% imageData.width + imageData.width *((h + 0 + imageData.height)% imageData.height))*4; 
                index[4]=((w - 0 + imageData.width)% imageData.width + imageData.width *((h + 0 + imageData.height)% imageData.height))*4; 
                index[5]=((w + 1 + imageData.width)% imageData.width + imageData.width *((h + 0 + imageData.height)% imageData.height))*4; 
                index[6]=((w - 1 + imageData.width)% imageData.width + imageData.width *((h + 1 + imageData.height)% imageData.height))*4; 
                index[7]=((w - 0 + imageData.width)% imageData.width + imageData.width *((h + 1 + imageData.height)% imageData.height))*4; 
                index[8]=((w + 1 + imageData.width)% imageData.width + imageData.width *((h + 1 + imageData.height)% imageData.height))*4; 
                let r=rojo(imageData,index);
                let g=verde(imageData,index);
                let b=azul(imageData,index);
                let f=imageData.data[index[7]+3];
                set_pixeles(imageData,r,g,b,f);
                function rojo(imageData,index){
                    return ((imageData.data[index[0]]* mat[0][0] + imageData.data[index[1]]* mat[0][1] + imageData.data[index[2]]* mat[0][2] + imageData.data[index[3]]* mat[1][0] + imageData.data[index[4]]* mat[1][1]+imageData.data[index[5]]* mat[1][2] + imageData.data[index[6]]* mat[2][0] + imageData.data[index[7]]* mat[2][1] + imageData.data[index[8]]* mat[2][2])/16); 
                }
                function verde(imageData,index){
                    return ((imageData.data[index[0]+1]* mat[0][0] + imageData.data[index[1]+1]* mat[0][1] + imageData.data[index[2]+1]* mat[0][2] + imageData.data[index[3]+1]* mat[1][0] + imageData.data[index[4]+1]* mat[1][1] + imageData.data[index[5]+1]* mat[1][2] + imageData.data[index[6]+1]* mat[2][0] + imageData.data[index[7]+1]* mat[2][1] + imageData.data[index[8]+1]* mat[2][2])/16); 
                }
                function azul(imageData,index){
                    return ((imageData.data[index[0]+2]* mat[0][0] + imageData.data[index[1]+2]* mat[0][1] + imageData.data[index[2]+2]* mat[0][2] + imageData.data[index[3]+2]* mat[1][0] + imageData.data[index[4]+2]* mat[1][1] + imageData.data[index[5]+2]* mat[1][2] + imageData.data[index[6]+2]* mat[2][0] + imageData.data[index[7]+2]* mat[2][1] + imageData.data[index[8]+2]* mat[2][2])/16); 
                } 
                function set_pixeles(imageData,r,g,b,f){
                    imageData.data[index[4]+0]=r;
                    imageData.data[index[4]+1]=g;
                    imageData.data[index[4]+2]=b;
                    imageData.data[index[4]+3]=f;
                }               
            }
        }
    }
    con.putImageData(imageData, 0, 0);
}
}
});
}
