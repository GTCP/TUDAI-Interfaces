let color= "black";
let grosor= 2;
let dibujando = false;
let borrando = false;
let canvas=document.getElementById("canvas-ejercicio");
let ctx=canvas.getContext("2d");
let botonlapiz=document.getElementById("lapiz");
let goma=document.getElementById("goma");
let inputColor=document.getElementById("color");
canvas.width=500;
canvas.height=500;
botonlapiz.addEventListener("click",function(e){
        borrando=false;
        let rect= canvas.getBoundingClientRect();
        let x=0;
        let y=0;
        dibujando=false;
        let grosor=2;
        let color="black";
        function defcolor(g){
             let color=g;
             return color;
        }
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
    let rect= canvas.getBoundingClientRect();
    let x=0;
    let y=0;
    borrando= false;
    let grosor= 10;
  
    function defgrosor(g){
        grosor=g;
    }
    canvas.addEventListener("mousedown",function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        borrando=true;
    });
    canvas.addEventListener("mousemove", function(e){
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