var color= "black";
var grosor= 2;
// let activarLapiz=false;
// let activarGoma=false;

let dibujando = false;
let borrando = false;


var canvas=document.getElementById('canvas-ejercicio');
var ctx=canvas.getContext('2d');
let botonlapiz=document.getElementById('lapiz');
let goma=document.getElementById('goma');


 botonlapiz.addEventListener('click', function(e){
        borrando=false;
        let rect= canvas.getBoundingClientRect();
        let x=0;
        let y=0;
        dibujando= false;
        let color= "black";
        let grosor= 2;
        let inputColor=document.getElementById('color');
     
    
        canvas.addEventListener('mousedown', function(e){
            x=e.clientX - rect.left;
            y=e.clientY - rect.top;
            dibujando=true;
            borrando=false;
        });
        canvas.addEventListener('mousemove', function(e){
            if(dibujando===true){
                dibujar(x,y,e.clientX - rect.left,e.clientY-rect.top);
                x=e.clientX - rect.left;
                y=e.clientY - rect.top;
            }
        });
        canvas.addEventListener('mouseup', function(e){
            if(dibujando===true){
                dibujar(x,y,e.clientX - rect.left,e.clientY-rect.top);
                x=0;
                y=0;
                dibujando=false;
            }
        });
        function dibujar(x1,y1,x2,y2){
            ctx.strokeStyle=color;
            ctx.lineWidth=grosor;
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo(x1,y1);
            ctx.lineTo(x2,y2);
            ctx.stroke();
            ctx.closePath();
        }
    
});

goma.addEventListener('click', function(e){
    
   
    var rect= canvas.getBoundingClientRect();
    var x=0;
    var y=0;
    borrando= false;
    var grosor= 10;


    

    function defgrosor(g){
        grosor=g;
    }
    canvas.addEventListener('mousedown', function(e){
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        borrando=true;
    });

    canvas.addEventListener('mousemove', function(e){
        if(borrando===true){
            borrar(x,y,e.clientX - rect.left,e.clientY-rect.top);
            x=e.clientX - rect.left;
            y=e.clientY - rect.top;
        }
    });

    canvas.addEventListener('mouseup', function(e){
        if(borrando===true){
            borrar(x,y,e.clientX - rect.left,e.clientY-rect.top);
            x=0;
            y=0;
            borrando=false;
        }
    });

    function borrar(x1, y1, x2,y2){
        ctx.strokeStyle="white";
        ctx.lineWidth=grosor;
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    }

});


