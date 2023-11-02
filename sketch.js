let numDots = 700;
let smallerGrass = [];
let stems = [];
let leave = []
let smallerleave = [];

function setup() {
  createCanvas(300, 600);
  background(242,169,4); 
  noLoop();
  StemOne = new stem(0, 140, 80, 140, 150, 150, 0, 0, 0, null, null, null)
  LeaveOne = new leaves(30, 140, 45, 120, 75, 105, 19, 18, 19, 1, 4, 6, 0, 0, 0, null, null, null)
  LeaveOnes = new leaves(20, 138, 35, 145, 50, 155, 19, 18, 19, 1, 4, 6, 0, 0, 0, null, null, null)
  LeaveOneP = new smallerleaves(35, 140, 65, 120, 80, 110, 27, 20, 19, 2, 5, 6, color(209, 79, 127), null, null, null)
  LeaveOnePS = new smallerleaves(25, 140, 45, 140, 80, 160, 27, 21, 19, 2, 5, 6, color(209, 79, 127), null, null, null)
  StemTwo = new stem(0, 300, 25, 310, 50, 335, 0, 0, 0, null, null, null)
  LeaveTwo = new smallerleaves(0, 300, 5, 295, 12, 285, 1, 2, 13, 1, 4, 10, 0, 0, 0, null, null, null)
  LeaveTwos = new smallerleaves(5, 300, 0, 310, 6, 330, 1, 10, 11, 1, 7, 8, 0, 0, 0, null, null, null)
  LeaveTwoP = new smallerleaves(8, 300, 10, 295, 20, 285, 6, 10, 12, 2, 5, 6, color(209, 79, 127), null, null, null)
  LeaveTwoPS = new smallerleaves(8, 300, 3, 312, 10, 340, 7, 10, 13, 5, 6, 6, color(209, 79, 127), null, null, null)
  StemThree = new stem(160, 450, 220, 380, 240, 340, 0, 0, 0, null, null, null)
  LeaveThree = new smallerleaves(180, 430, 180, 400, 190, 365, 9, 10, 12, -15, -14, -10, 0, 0, 0, null, null, null)
  LeaveThrees = new smallerleaves(185, 420, 220, 410, 250, 385, 10, 7, 4, -14, -14, -13, 0, 0, 0, null, null, null)
  LeaveThreeP = new smallerleaves(185, 420, 175, 390, 190, 360, 9, 13, 10, -12, -14, -9, color(209, 79, 127), null, null, null)
  LeaveThreePS = new smallerleaves(180, 430, 210, 420, 250, 385, 9, 7, 4, -12, -15, -15, color(209, 79, 127), null, null, null)
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
     let x3 = x1 + (lineLength + curveAmount) * cos(angle);
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
  let numCurves = 9; 
  let lineLength = 100; 
  let curveAmount = 50; 
  let steps = 8;
  let dotSize = 5;

  for (let i = 0; i < numCurves; i++) {
    if (random(1) > 0.5) {
      stroke(209, 79, 127);  
     } else {
       stroke(0);      
     }

    let angle = map(i, 0, numCurves, 0, -HALF_PI);  
     
    let x1 = ellipseCenterX;
    let y1 = ellipseCenterY;
    let x2 = x1 + (curveAmount * 0.5) * cos(angle);  
    let y2 = y1 + (lineLength * 0.5) * sin(angle);  
    let x3 = x1 + (lineLength * 0.75) * cos(angle); 
    let y3 = y1 + (curveAmount * 0.75) * sin(angle); 
    let x4 = x1 + lineLength  * cos(angle);
    let y4 = y1 + lineLength * sin(angle);
 
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);  

  // add the red dots align the grass line
    fill(255, 0, 0);  
    noStroke();  
    for (let j = 0; j <= steps; j++) {
      let t = j / steps;
      let px = bezierPoint(x1, x2, x3, x4, t);
      let py = bezierPoint(y1, y2, y3, y4, t);

      let dotsAngle = atan2(py - y1, px - x1) + HALF_PI; 
      let offsetDistance = random(2, 4); 
      let offsetX = offsetDistance * cos(dotsAngle);
      let offsetY = offsetDistance * sin(dotsAngle);

      px += offsetX;
      py += offsetY;

      ellipse(px, py, dotSize, dotSize);
    }
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

    let ellipseCenterX = 115, ellipseCenterY = 460;
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
     let x3 = x1 + (lineLength + curveAmount) * cos(angle);
     let y3 = y1 + (lineLength - curveAmount) * sin(angle);
     let x4 = x1 + lineLength * cos(angle);
     let y4 = y1 + lineLength * sin(angle);
 
     bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    }
}

function drawStraightWeeds() {
  let numWeeds = 30;
  let weedSpacing = width / numWeeds;
  let weedWidth = 3;
  let minWeedHeight = 20;
  let maxWeedHeight = 50;

  for (let i = 0; i <= numWeeds; i++) {
    if (random(1) > 0.2) {
      stroke(209, 79, 127);
    } else {
      stroke(0);
    }
    strokeWeight(weedWidth);
  }

  // Drawing straight weeds on the bottom
  for (let i = 0; i <= numWeeds; i++) {
    let x = i * weedSpacing;
    x = constrain(x, 0, 180)
    let weedHeight = random(minWeedHeight, maxWeedHeight);
    line(x, height, x, height - weedHeight);
  }

  // Drawing straight weeds on the right
  for (let i = 0; i <= numWeeds; i++) {
    let y = i * weedSpacing;
    y = constrain(y, 100, 200)
    let weedHeight = random(15, 20);
    line(width, y, width - weedHeight, y);
  }
}

function drawCurvedWeeds() {
  let numWeeds = 20;
  let weedSpacing = height / numWeeds;
  let weedWidth = 3;
  let minWeedHeight = 20;
  let maxWeedHeight = 50;
  let controlOffset = 20;

  for (let i = 0; i <= numWeeds; i++) {
    if (random(1) > 0.2) {
      stroke(179, 70, 105);
    } else {
      stroke(0);
    }
    strokeWeight(weedWidth);

    // Drawing curved weeds on the bottom
    let x = i * weedSpacing;
    x = constrain(x, 0, 180);
    let weedHeight = random(minWeedHeight, maxWeedHeight);
    let ctrlPt1X = constrain(x + random(-controlOffset, controlOffset), 0, width);
    let ctrlPt2X = constrain(x + random(-controlOffset, controlOffset), 0, width);
    bezier(x, height, ctrlPt1X, height - weedHeight / 3, ctrlPt2X, height - 2 * weedHeight / 3, x, height - weedHeight);

    // Drawing curved weeds on the left
    let y1 = i * weedSpacing;
    y1 = constrain(y1, 450, height);
    weedHeight = random(20, 30);
    let ctrlPtY1 = constrain(y1 + random(-controlOffset, controlOffset), 0, height);
    let ctrlPtY2 = constrain(y1 + random(-controlOffset, controlOffset), 0, height);
    bezier(0, y1, weedHeight / 3, ctrlPtY1, 2 * weedHeight / 3, ctrlPtY2, weedHeight, y1);

    // Drawing curved weeds on the right
    let y2 = i * weedSpacing;
    y2 = constrain(y2, 100, 200);
    weedHeight = random(15, 20);
    let ctrlPtY3 = constrain(y2 + random(-controlOffset, controlOffset), 0, height);
    let ctrlPtY4 = constrain(y2 + random(-controlOffset, controlOffset), 0, height);
    bezier(width, y2, width - weedHeight / 3, ctrlPtY3, width - 2 * weedHeight / 3, ctrlPtY4, width - weedHeight, y2);
  }
}

class stem {
  constructor(SX1, SY1, SX2, SY2, SX3, SY3, sColor, tX1, tY1, sAngle){
    this.SX1 = SX1;
    this.SY1 = SY1;
    this.SX2 = SX2;
    this.SY2 = SY2;
    this.SX3 = SX3;
    this.SY3 = SY3;
    this.sColor = sColor;
    this.tX1 = tX1;
    this.tY1 = tY1;
    this.sAngle = sAngle
  }
  display(){
    push()
    translate(this.tX1, this.tY1)
    fill(0);
    stroke(this.sColor);
    strokeWeight(5)
    beginShape();
    curveVertex(this.SX1,this.SY1);
    curveVertex(this.SX1,this.SY1);
    curveVertex(this.SX2,this.SY2);
    curveVertex(this.SX3,this.SY3);
    curveVertex(this.SX3,this.SY3);
    endShape();
    pop()
  }
}

class Small {
  constructor(x, y, color, angleMultiplier = 1, numCurves = 5, strokeW = 3, lineLength = 20, circleSize = 5) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.circleRadius = circleSize / 2;
    this.numCurves = numCurves;
    this.curveWidth = 2.5;
    this.strokeW = strokeW;
    this.lineLength = lineLength;
    this.angleMultiplier = angleMultiplier;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.circleRadius * 2);

    stroke(this.color);
    strokeWeight(this.strokeW);
    noFill();

    let rotationOffset = PI / 2;

    for (let i = 0; i < this.numCurves; i++) {
      let startAngle = this.angleMultiplier * PI / this.numCurves * i + rotationOffset; 
      let endAngle = startAngle + HALF_PI / this.numCurves;
      let curveRadius = this.circleRadius + this.lineLength; 
      let startX = this.x + this.circleRadius * cos(startAngle);
      let startY = this.y + this.circleRadius * sin(startAngle);

      beginShape();
      vertex(startX, startY);
      for (let a = startAngle; a < endAngle; a += 0.01) {
        let x = this.x + curveRadius * cos(a);
        let y = this.y + curveRadius * sin(a);
        let offset = map(sin(a * 4), -1, 1, -this.curveWidth, this.curveWidth);
        vertex(x + offset, y);
      }
      endShape();
    }
  }
}

class Leave {
  constructor(LX1, LY1, LX2, LY2, LX3, LY3, numA, numB, numC, numD, numE, numF, lColor, tX2, tY2, lAngle){
    this.LX1 = LX1;
    this.LY1 = LY1;
    this.LX2 = LX2;
    this.LY2 = LY2;
    this.LX3 = LX3;
    this.LY3 = LY3;
    this.numA = numA;
    this.numB = numB;
    this.numC = numC;
    this.numD = numD;
    this.numE = numE;
    this.numF = numF;
    this.lColor = lColor;
    this.tX2 = tX2;
    this.tY2 = tY2;
    this.lAngle = lAngle
  }
  display(){
    for (let i = 0; i < 7; i++) {
      push()
      translate(this.tX2, this.tY2)
      fill(0);
      stroke(this.lColor);
      strokeWeight(5)
      beginShape();
      curveVertex(this.LX1 + i * this.numA, this.LY1 + i * this.numD);
      curveVertex(this.LX1 + i * this.numA, this.LY1 + i * this.numD);
      curveVertex(this.LX2 + i * this.numB,this.LY2 + i * this.numE);
      curveVertex(this.LX3 + i * this.numC,this.LY3 + i * this.numF);
      curveVertex(this.LX3 + i * this.numC,this.LY3 + i * this.numF);
      endShape();
      pop()
    }
  }
}

class Smallerleave {
  constructor(sX1, sY1, sX2, sY2, sX3, sY3, num1, num2, num3, num4, num5, num6, ColorS, tX3, tY3, AngleS){
    this.sX1 = sX1;
    this.sY1 = sY1;
    this.sX2 = sX2;
    this.sY2 = sY2;
    this.sX3 = sX3;
    this.sY3 = sY3;
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.num4 = num4;
    this.num5 = num5;
    this.num6 = num6;
    this.ColorS = ColorS;
    this.tX3 = tX3;
    this.tY3 = tY3;
    this.AngleS = AngleS
  }
  display(){
    for (let i = 0; i < 5; i++) {
      push()
      translate(this.tX3, this.tY3)
      noFill();
      stroke(this.ColorS);
      strokeWeight(4)
      beginShape();
      curveVertex(this.sX1 + i * this.num1, this.sY1 + i * this.num4);
      curveVertex(this.sX1 + i * this.num1, this.sY1 + i * this.num4);
      curveVertex(this.sX2 + i * this.num2, this.sY2 + i * this.num5);
      curveVertex(this.sX3 + i * this.num3, this.sY3 + i * this.num6);
      curveVertex(this.sX3 + i * this.num3, this.sY3 + i * this.num6);
      endShape();
      pop()
    }
  }
}



