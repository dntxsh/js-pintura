function setup() {
    createCanvas(500, 500);
    background("purple");
  }
  
  function draw() {
  
    stroke("black")
    fill("white")
    
    console. log(mouseIsPressed)
   
    
    if(mouseIsPressed){
      
     rect(mouseX, mouseY, 50, 50);
    }
    
  }