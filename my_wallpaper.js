//your parameter variables go here!写参数变量
let hatx=70;
let haty=70;
let topx=5;
let topy=5;
let earX=2;
let pSize=3;

let eyeStyle=1;
let tailStyle=1;
let starStyle=1;
let mouthStyle=0;
let pointStyle=1;

let black;
let white;
let red;
let orange;
let yellow;
let deepPink;
let lightPink;
let purple;
let blue;
let deepGreen;
let lightGreen;

//颜色变量：line57，84，94，100，112，120，127，152，208，211，218等


// 基础设置
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER); //平铺方式
  pWallpaper.resolution(A3); //分辨率
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings网格设置
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  //颜色申明
  black=color(0,0,0);
  white=color(255,255,255);
  red=color(204, 59, 18);
  orange=color(245, 110, 32);
  yellow=color(252, 247, 144);
  deepPink=color(207, 74, 107);
  lightPink=color(255, 230, 248);
  purple=color(190, 136, 247);
  blue=color(47, 57, 247);
  deepGreen=color(14, 115, 15);
  lightGreen=color(99, 219, 195);

}

function wallpaper_background() {
  background(lightPink); //---背景颜色
}

function my_symbol() { 
// 星星的if
  if(starStyle==0){//lines
    strokeWeight(0.5);
    stroke(0)
    line(20,0,20,78);
    line(180,0,180,35);
    line(140,0,140,150);

    strokeWeight(1);
    stroke(black)//---华丽星星外部颜色
   fill(black);//---华丽星星外部颜色
      drawStars(20,88,28,20);
      drawStars(180,45,28,20);
      drawStars(140,150,28,20);
      drawStars(80,31,28,20);

    stroke(white) //---华丽星星内部颜色 
    fill(black);//---华丽星星内部颜色
      drawStars(20,88,20,12);
      drawStars(180,45,20,12);
      drawStars(140,150,20,12);
      drawStars(80,31,20,12);
    }else{ 
      fill(black);//---普通星星颜色
      drawStars(20,88,20,12);
      drawStars(180,45,20,12);
      drawStars(140,150,20,12);
      drawStars(80,31,20,12);
    }

  //尾巴的if
  strokeWeight(0)
  stroke(0)
  fill(black);//---尾巴颜色
 if (tailStyle==0){
    drawTail()
  }

  // head&body
   fill(deepPink);//---身体颜色
  strokeWeight(0);
  ellipse(67, 110, 37, 32);
  strokeWeight(0);
  ellipse(100, 100, 53, 50);
  triangle(80, 84, 70, 95, 75, 96);
  triangle(68, 126, 99, 125, 82, 118);

  // 耳朵
  drawEars(earX)

  // 帽子
  fill(deepGreen);//---帽子颜色
  strokeWeight(1);
  stroke(0);
  drawHat(topx,topy)

  //波点
  if(pointStyle==0){
  strokeWeight(0);
  fill(lightGreen);//---帽子波点颜色
  drawPoints(67,81);
  drawPoints(70,86);
  drawPoints(63,89);
  drawPoints(67,93);
  }else{
    strokeWeight(0);
  fill(black);//---身体波点颜色
  drawPoints(120,93);
  drawPoints(92,90);
  drawPoints(116,86);
  drawPoints(106,80);
  drawPoints(105,88);
  drawPoints(95,80);
  }

  

  //眼睛的if
  if(eyeStyle==0){
  stroke(0);
  strokeWeight(1);
  line(53, 113, 57, 113);
  line(69, 112, 73, 110);
//   }
//  if(eyeStyle==1){
//   stroke(255);
//   strokeWeight(3);
//   line(55, 111, 55, 114);
//   line(71, 110, 71, 113);
   }else{
    stroke(1)
    fill(white)//---星星眼颜色
    drawStars(55,113,16,9)
    drawStars(71,112,16,9)
   }

  // 嘴的if函数
  if(mouthStyle==0){
  strokeWeight(1/3);
  stroke(0)
  line(61, 114, 63, 341/3);
  }else{
  strokeWeight(0);
  stroke(0);
  fill(224, 99, 162)
  triangle(61, 117, 63, 117, 62,123);
  }
  
  }

//自定义函数
//星星函数
function drawStars(STARx,STARy,a,b){
  strokeWeight(1);
    beginShape();
    vertex(STARx,STARy-a);
    vertex(STARx-3,STARy-3);
    vertex(STARx-b,STARy);
    vertex(STARx-3,STARy+3);
    vertex(STARx,STARy+a);
    vertex(STARx+3,STARy+3);
    vertex(STARx+b,STARy);
    vertex(STARx+3,STARy-3);
    endShape(CLOSE);
  }
  //点点函数
  function drawPoints(pointx,pointy){
    ellipse(pointx,pointy,pSize,pSize)
  }

  //尾巴函数
  function drawTail(){
  
  beginShape();
  // vertex(130,110);
  curveVertex(110,110);
  curveVertex(140,70);
  curveVertex(140,45);
  curveVertex(130,30);
  curveVertex(110,20);
  curveVertex(120,50);
  curveVertex(110,80);
  endShape(CLOSE);
  }

  //耳朵函数
  function drawEars(x){
    fill(deepPink);//---左耳颜色
    strokeWeight(0);
    triangle(55, 98, 44-x, 100, 49, 108);
    fill(deepGreen);//---右耳颜色
    triangle(74, 95, 84, 105, 85+x, 90);
  }
  //帽子函数
  function drawHat(x,y){
    triangle(hatx, haty, 55, 98, 74, 95);
    ellipse(hatx, haty, x, y);
    fill(black);//---内top颜色
    ellipse(hatx, haty, x/2, y/2);
  }


