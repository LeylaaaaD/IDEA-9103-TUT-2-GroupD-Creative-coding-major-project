let numDots = 700; 

function setup() {
  createCanvas(300, 600);
  background(242,169,4); 
  noLoop();

}

function drawgrass() {
   // draw the curve for the first huge grass
   noFill();
   strokeWeight(4);
 
  let ellipseCenterX = 190, ellipseCenterY = 80;
  let numCurves = 8; 
  let lineLength = 120; 
  let curveAmount = 40; 
 
  for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.2) {
      stroke(209, 79, 127);  
     } else {
       stroke(179, 70, 105);      
     }

     let angle = map(i, 0, numCurves, 0, -HALF_PI);  
     
     let x1 = ellipseCenterX;
     let y1 = ellipseCenterY;
     let x2 = x1 + curveAmount * sin(angle);
     let y2 = y1 + curveAmount * cos(angle);
     let x3 = x1 + (lineLength - curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}

 function drawFlippedGrass() {
  push();  
 
  translate(375, 10);
  scale(-1, 1);
  drawgrass(); 
  pop();  
}

function drawgrass1() {
  // draw the curve for the first huge grass
  noFill();
  strokeWeight(4);

  let ellipseCenterX = 140, ellipseCenterY = 320;
  let numCurves = 8; 
  let lineLength = 110; 
  let curveAmount = 50; 
 
  for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.5) {
      stroke(209, 79, 127);  
     } else {
       stroke(0);      
     }

    let angle = map(i, 0, numCurves, 0, -HALF_PI);  
     
    let x1 = ellipseCenterX;
    let y1 = ellipseCenterY;
    let x2 = x1 + (lineLength - curveAmount) * cos(angle);
    let y2 = y1 - curveAmount * sin(angle);  // 修改y2
    let x3 = x1 + curveAmount * 2 * cos(angle);
    let y3 = y1 + curveAmount * sin(angle) * 2 // 修改y3的系数
    let x4 = x1 + lineLength * cos(angle);
    let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);  
  }
}

function drawFlippedGrass1() {
  push();  
 
  translate(300, -5);
  scale(-1, 1);
  drawgrass1(); 
  pop();  
}

function drawgrass2() {
  // draw the curve for the first huge grass
  noFill();
  strokeWeight(4);

    let ellipseCenterX = 90, ellipseCenterY = 450;
    let numCurves = 18; 
    let lineLength = 100; 
    let curveAmount = 40; 
 
   for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.3) {
      stroke(209, 79, 127);  
     } else {
       stroke(0);      
     }

     let angle = map(i, 2, numCurves, 0, PI);  
     
     let x1 = ellipseCenterX;
     let y1 = ellipseCenterY;
     let x2 = x1 + curveAmount * cos(angle);
     let y2 = y1 - curveAmount * sin(angle);
     let x3 = x1 + (lineLength - curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
}

function drawLeaveCurve(){
  noFill();
  stroke(0);
  strokeWeight(5)
  beginShape();
  curveVertex(0,140);
  curveVertex(0,140);
  curveVertex(80,140);
  curveVertex(150,155);
  curveVertex(150,155);
  endShape();
  
  for (let i = 0; i < 7; i++) {
    noFill();
    stroke(0);
    beginShape();
    curveVertex(30 + i * 19, 140 + i);
    curveVertex(30 + i * 19, 140 + i * 2);
    curveVertex(45 + i * 18, 120 + i * 4);
    curveVertex(75 + i * 19, 100 + i * 6);
    curveVertex(75 + i * 19, 100 + i * 7);
    endShape();
  }

  for (let i = 0; i < 7; i++) {
    noFill();
    stroke(0);
    beginShape();
    curveVertex(35 + i * 16, 140 + i);
    curveVertex(35 + i * 16, 140 + i * 2);
    curveVertex(35 + i * 18, 150 + i * 4);
    curveVertex(60 + i * 19, 170 + i * 6);
    curveVertex(35 + i * 19, 180 + i * 7);
    endShape();
  }
}

function draw() {
  drawgrass();
  drawgrass1();
  drawFlippedGrass();
  drawFlippedGrass1();
  drawgrass2();

  stroke(79, 21, 27);
  line(190, 80, 220, 180)

  // draw the first roots of the huge grass
  noStroke();
  fill(183, 90, 125);  
  ellipse(190, 90, 40, 30);  

  //draw the second roots of the huge grass
  fill(196, 85, 135);  
  ellipse(150, 320, 40, 35);

  fill(105, 46, 76);  
  ellipse(150, 320, 35, 30);
  
  fill(252, 105, 155); 
  ellipse(150, 320, 30, 25);  
  
  fill(82, 25, 50); 
  ellipse(150, 320, 25, 20);

  //draw the third roots of the huge grass
  fill(229, 82, 139);  
  ellipse(90, 450, 45, 30);  

  // draw the pink and black dots
  for (let i = 0; i < numDots; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(6, 9);
    
    if (random(1) > 0.5) {
      fill(209, 132, 161);  
     } else {
       fill(0);      
     }
     noStroke();
     ellipse(x, y, size);
   }
   drawLeaveCurve();
}
 

