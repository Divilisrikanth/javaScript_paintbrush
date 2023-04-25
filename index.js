//let paintbrush =document.querySelector("body")
// body.addEventListener("click",(e)=>{
//     let angle =degrees();
//     let c1 =randomColor();
//     let c2 =randomColor();
//     let c3 =randomColor();
//     let c4 =randomColor();
//     let bgman="linear-gradient("+angle+" ,"+c1 +" ,"+ c2 + " ,"+ c3 +" ,"+ c4 +")";
//     console.log(angle);
//     body.style.backgroundImage=bgman;
// })
// const canvas=document.getElementsByClassName("mycircle")

// canvas.width = window.innerWidth;
// canvas.height=window.innerHeight;

//  const context =canvas.getContext("2d")

//  let mouse={
//      x:undefined,
//      y:undefined,
//  };
//  let hex =["0","1","2","3","4","5","6","7","8","9","A","B","c","D","E","F"];
//  function randomColor(){
//     let color="#";
//      for(let i=0;i<6;i++){
//         color += hex[Math.floor(Math.random()*16)];
//      }
//      return color;
//  }
//  canvas.addEventListener("click",(e)=>{
//      mouse.x=e.x;
//      mouse.y=e.y;
//      console.log(mouse)
//      context.beginPath()
//      context.arc(mouse.x,mouse.y,50,0,2*Math.PI);
//      context.stroke() 
//      context.fillStyle=randomColor();
//      context.fill()
     
// });
let div =
            document.querySelector("mycircle");
  
        div.addEventListener(
            "mousemove", function (e) {
                x = e.offsetX;
                y = e.offsetY;
                div.style.backgroundColor
                    = `rgb(${x}, ${y}, ${x - y})`;
});