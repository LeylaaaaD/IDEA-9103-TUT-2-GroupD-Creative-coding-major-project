let numDots = 1000; 
let colorvariant;

function setup() {
  createCanvas(300, 600);
  background(242,169,4); 
  noLoop();
}

function drawgrass() {
   // draw the curve for the first huge grass
   noFill();
   strokeWeight(4);
 
   let ellipseCenterX = 190, ellipseCenterY = 90;
   let numCurves = 18; 
   let lineLength = 100; 
   let curveAmount = 40; 
 
   for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.5) {
      stroke(209, 79, 127);  
     } else {
       stroke(179, 70, 105);      
     }

     let angle = map(i, 0, numCurves, 0, -PI);  
     
     let x1 = ellipseCenterX;
     let y1 = ellipseCenterY;
     let x2 = x1 + curveAmount * sin(angle);
     let y2 = y1 - curveAmount * cos(angle);
     let x3 = x1 + (lineLength - curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
   }
 }

function draw() {
  drawgrass();

  stroke(79, 21, 27);
  line(190, 80, 220, 180)

  // draw the first roots of the huge grass
  noStroke();
  fill(183, 90, 125);  
  ellipse(180, 80, 40, 30);  

  //draw the second roots of the huge grass
  fill(196, 85, 135);  
  ellipse(150, 300, 40, 35);

  fill(105, 46, 76);  
  ellipse(150, 300, 35, 30);
  
  fill(252, 105, 155); 
  ellipse(150, 300, 30, 25);  
  
  fill(82, 25, 50); 
  ellipse(150, 300, 25, 20);

  //draw the third roots of the huge grass
  fill(229, 82, 139);  
  ellipse(90, 450, 45, 30);  

  // draw the pink and black dots
  for (let i = 0; i < numDots; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(6, 9);
    
    if (random(1) > 0.5) {
     fill(206, 72, 121);  
    } else {
      fill(0);      
    }
    noStroke();
    ellipse(x, y, size);
  }
}

