const canvas=document.getElementById("canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

 const ctx = canvas.getContext("2d");

 let mouse={
     x:undefined,
     y:undefined,
 };
    let color="green";
    document.getElementById("box1").addEventListener("click",(e)=>{
        color="red";
    });
    document.getElementById("box2").addEventListener("click",(e)=>{
        color="green";
    });
    document.getElementById("box3").addEventListener("click",(e)=>{
        color="yellow";
    });
    document.getElementById("box3").addEventListener("click",(e)=>{
        color="orange";
    });
    document.getElementById("box4").addEventListener("click",(e)=>{
        color="blue";
    });
    document.getElementById("box5").addEventListener("click",(e)=>{
        color="blue";
    });
    document.getElementById("box6").addEventListener("click",(e)=>{
        color="palevoiletred";
    });
    document.getElementById("box7").addEventListener("click",(e)=>{
        color="voilet";
    });
    document.getElementById("box8").addEventListener("click",(e)=>{
        color="#800080";
    });
    document.getElementById("box9").addEventListener("click",(e)=>{
        color="#808000";
    });
    document.getElementById("box10").addEventListener("click",(e)=>{
        color="purple";
    });
   
 canvas.addEventListener("mousemove",(e)=>{
     console.log("hello")   
     mouse.x=e.x;  
     mouse.y=e.y;
     console.log(mouse)
     ctx.beginPath()
     ctx.arc(mouse.x,mouse.y,50,0,2*Math.PI);
     ctx.lineWidth=1;
     ctx.fillStyle=color;
     ctx.fill()
     ctx.strokeStyle=color
     ctx.stroke 
       
     
});
 


