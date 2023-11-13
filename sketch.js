//Palheta de cores: https://lospec.com/palette-list/florentine24
//Fonte de texto usada: https://fonts.google.com/specimen/VT323/tester?preview.size=35&classification=Monospace

var xb00; // Texto centralizado

var fonte

//variaveis da tela 0 - Tela inicial
var yb01;
var yb02;
var yb03;
var larguraB1;
var alturaB1;
var suavizaB;

//variaveis da tela 1 - jogo
var xb11_sair
var yb11_sair
var yb12_cartas
var xb12_cartas
var alturaC
var larguraB

//variaveis da tela 2 - Instruções
var yb21_voltar
var xb21_voltar
var larguraB2;
var alturaB2;

var tela = 0;

function preload(){
  fonte = loadFont('VT323-Regular.ttf');
}
function setup() {
  createCanvas(400, 400);
  
  //variaveis da tela 0 - Tela inicial
  xb00=100;
  yb01=90;
  yb02=190;
  yb03=290;
  larguraB1 = 200;
  alturaB1 = 60;
  suavizaB=17;
  
  //variaveis da tela 1 - jogo
  xb11_sair = 325
  yb11_sair = 355
  alturaB_sair = 30
  larguraB_sair = 60
  yb12_cartas = 70
  xb12_cartas = 28
  alturaC = 120
  larguraC = 80
  
  //variaveis da tela 2 - Instruções
  yb21_voltar = 345;
  xb21_voltar = 270;
  larguraB2 = 120;
  alturaB1 = 45;
  
}

function draw() {
  
  if (tela==0){
    background('#4876bb');
    textSize(28);
    textFont(fonte);
  
    text("Jogo da memória", xb00+10, yb01-30);
  
    if(mouseY>yb01 && mouseY<yb01+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#7fd3e6') 
    }
    rect(xb00,yb01, larguraB1,alturaB1,suavizaB);
    fill(0)
    text("Jogar", xb00+65, yb01+30);
    fill(255)
  
    if(mouseY>yb02 && mouseY<yb02+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#7fd3e6') 
    }
    rect(xb00,yb02,larguraB1,alturaB1,suavizaB);
    fill(0);
    text("Instruções", xb00+40, yb02+30);
    fill(255);
    
    if(mouseY>yb03 && mouseY<yb03+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#7fd3e6') 
    }
    rect(xb00,yb03,larguraB1,alturaB1,suavizaB);
    fill(0);
    text("Créditos", xb00+50, yb03+30);
    fill(255);
  }
  
  if(tela==1){
    background('#4876bb');
    textSize(28);
    text("Jogo da memória", xb00+30, yb01-50);
    textSize(15);
    if(mouseY>yb11_sair && mouseY<yb11_sair+alturaB_sair && mouseX>xb11_sair && mouseX <xb11_sair+larguraB_sair){
      fill('#ee3046')
    }
    rect(xb11_sair, yb11_sair, larguraB_sair, alturaB_sair,suavizaB);
    fill(0)
    text("Sair", xb21_voltar + 70, yb21_voltar+30);
    fill(255)
    
    rect(20, 60, 365, 270);
    fill(255);
    
    fill('#7fd3e6');
    //cartas
    rect(xb12_cartas, yb12_cartas, larguraC, alturaC);
    rect(xb12_cartas+larguraC+10, yb12_cartas, larguraC, alturaC);
    rect(xb12_cartas+2*larguraC+20, yb12_cartas, larguraC, alturaC);
    rect(xb12_cartas+3*larguraC+30, yb12_cartas, larguraC, alturaC);
    rect(xb12_cartas, yb12_cartas+alturaC+10 , larguraC, alturaC);
    rect(xb12_cartas+larguraC+10, yb12_cartas+alturaC+10 , larguraC, alturaC);
    rect(xb12_cartas+2*larguraC+20, yb12_cartas+alturaC+10 , larguraC, alturaC);
    rect(xb12_cartas+3*larguraC+30, yb12_cartas+alturaC+10 , larguraC, alturaC);
  }
  
  if (tela == 2){
    background('#4876bb');
    textSize(28);
    text("Intruções", xb00+40, yb01-30);
    fill(255);
    rect(6, 75, 385, 260,suavizaB);
    fill(255);
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      fill('#7fd3e6') 
    }
    rect(xb21_voltar,yb21_voltar,larguraB2,alturaB1,suavizaB);
    fill(0);
    text("Voltar", xb21_voltar + 25, yb21_voltar + 30);
    
    textSize(20);
    text("1.O jogo consiste em alguns pares de\ncartas iguais\n2.Elas são embaralhas e viradas para \nbaixo no início do jogo\n3.O objetivo do jogo é que jogador deve \nvirar duas cartas e, caso elas forem iguais,\nele recebe a pontuação.\nCaso contrário as duas cartas são viradas \nnovamente para baixo e o jogador deve\ntentar novamente", 10, 100);
  }

  if(tela == 3){
    background('#4876bb');
    textSize(28);
    text("Créditos", xb00+50, yb01-30);
    fill(255);
    rect(6, 75, 385, 260,suavizaB);
    fill(255);
    
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      fill('#7fd3e6') 
    }
    rect(xb21_voltar,yb21_voltar,larguraB2,alturaB1,suavizaB);
    fill(0);
    text("Voltar", xb21_voltar + 25 , yb21_voltar + 32);
    
    textSize(20);
    text("Maria Clara Parpinelli da Silva Chaves\nEstudante do curso de Bacharelado de\nCiência e Tecnologia na UFRN\nTurma: 01B ", 30, 120);

  }
}

function mousePressed(){
  if (tela == 0){
    if(mouseY>yb01 && mouseY<yb01+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela =1 
    }
    if(mouseY>yb02 && mouseY<yb02+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela = 2
    }if(mouseY>yb03 && mouseY<yb03+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela = 3
    }
  }
  if (tela==1){
    if(mouseY>yb11_sair && mouseY<yb11_sair+alturaB_sair && mouseX>xb11_sair && mouseX <xb11_sair+larguraB_sair){
      tela = 0
    }
  }
  if(tela== 2){
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      tela = 0
    } 
  }if(tela == 3){
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      tela = 0
    }     
  }
}