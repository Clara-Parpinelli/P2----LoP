//Palheta de cores: https://lospec.com/palette-list/cherry-love
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
var img_qs1
var img_qs2
var xb1p;
var yb1p;
var larguraB1P;
var alturaB1P;
var xt1p;
var yt1p;
var nivel = 1;

//variaveis da tela 2 - Instruções
var yb21_voltar
var xb21_voltar
var larguraB2;
var alturaB2;

//variaveis da tela 3 - Créditos
var img_autor

//variaveis da tela 4 - "Fim de jogo"
var ganhou = false

//Mudança de tela
var tela = 0;
function preload(){
  fonte = loadFont('VT323-Regular.ttf');
  img_autor = loadImage('Maria_Clara.png')
  img_qs1 = loadImage('\Qs1.png')
  img_qs2 = loadImage('\Qs3.png')
  img_qs3 = loadImage('\Qs2_.png')
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
  xb1p = 100
  yb1p = 210
  larguraB1P = 80
  alturaB1P = 50
  xt1p = 130
  yt1p = 243
  
  //variaveis da tela 2 - Instruções
  yb21_voltar = 345;
  xb21_voltar = 270;
  larguraB2 = 120;
  alturaB1 = 45;
}
function telaMenu() {
    background('#d2a6a0');
    textSize(28);
    textFont(fonte);
  
    text("Quiz matemático", xb00+10, yb01-30);
    if(mouseY>yb01 && mouseY<yb01+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#c4edd2') 
    }
    rect(xb00,yb01, larguraB1,alturaB1,suavizaB);
    fill(0)
    text("Jogar", xb00+65, yb01+30);
    fill(255)
  
    if(mouseY>yb02 && mouseY<yb02+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#c4edd2') 
    }
    rect(xb00,yb02,larguraB1,alturaB1,suavizaB);
    fill(0);
    text("Instruções", xb00+40, yb02+30);
    fill(255);
    
    if(mouseY>yb03 && mouseY<yb03+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      fill('#c4edd2') 
    }
    rect(xb00,yb03,larguraB1,alturaB1,suavizaB);
    fill(0);
    text("Créditos", xb00+50, yb03+30);
    fill(255);
}
function telaInstrucoes() {
  background('#d2a6a0');
    textSize(28);
    text("Intruções", xb00+40, yb01-30);
    fill(255);
    rect(6, 75, 385, 260,suavizaB);
    fill(255);
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      fill('#c4edd2') 
    }
    rect(xb21_voltar,yb21_voltar,larguraB2,alturaB1,suavizaB);
    fill(0);
    text("Voltar", xb21_voltar + 25, yb21_voltar + 30);
    
    textSize(20);
    text("1.O jogo consiste em algumas perguntas \nenvolvendo matemática básica\n2.Algumas opções serão apresentadas para \no jogador com apenas uma resposta correta\n3.O objetivo do jogo é resolver os desafios \nmatemáticos e selecionar a opção de resposta \ncorreta.\nCaso contrário o jogador perde uma vida e se \nelas zerarem o jogo dá Game Over", 10, 100);
}
function telaCreditos() {
background('#d2a6a0');
    textSize(28);
    text("Créditos", xb00+50, yb01-30);
    fill(255);
    rect(12, 75, 370, 260,suavizaB);
    fill(255);
    
    if(mouseY>yb21_voltar && mouseY<yb21_voltar+alturaB1 && mouseX>xb21_voltar && mouseX <xb21_voltar+larguraB2){
      fill('#c4edd2') 
    }
    rect(xb21_voltar,yb21_voltar,larguraB2,alturaB1,suavizaB);
    fill(0);
    text("Voltar", xb21_voltar + 25 , yb21_voltar + 32);
    
    image(img_autor, 40, 90, 100, 100);
    textSize(18);
    text("Maria Clara Parpinelli da Silva Chaves\nEstudante do curso de Bacharelado de\nCiência e Tecnologia na UFRN\nTurma: 01B ", 30, 220);
}
function fase1(){
   background('#d2a6a0');
    textSize(28);
    textFont(fonte);
    escolhaFase = 0
    fill(10);
    text("Resolva a seguinte equação", 50, 50);
    image (img_qs1, 40, 80, 310, 110)
    fill(255)
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+80+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+alturaB1P+80 && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    fill(0)
    text("20", xt1p, yt1p);
    text("13", xt1p+100, yt1p)
    text("-5", xt1p+100, yt1p+80)
    text("35", xt1p, yt1p+80)
}
function fase2(){
    background('#d2a6a0');
    textSize(28);
    textFont(fonte);
    escolhaFase = 0
    fill(10);
    text("Resolva a seguinte equação", 50, 50);
    image (img_qs2, 50, 80, 300, 60)
    fill(255)
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+80+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+alturaB1P+80 && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    fill(0)
    text("10", xt1p, yt1p);
    text("32", xt1p+100, yt1p)
    text("05", xt1p+100, yt1p+80)
    text("08", xt1p, yt1p+80)
}
function fase3(){
  background('#d2a6a0');
    textSize(28);
    escolhaFase = 0
    textFont(fonte);
    fill(10);
    text("Resolva a seguinte equação", 50, 50);
    image (img_qs3, 60, 85, 270, 80)
    fill(255)
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+80+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p, larguraB1P,alturaB1P,suavizaB);
    if(mouseY>yb1p+80 && mouseY<yb1p+alturaB1P+80 && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      fill('#c4edd2') 
    }else{
      fill(255)
    }
    rect(xb1p + 100 ,yb1p + 80, larguraB1P,alturaB1P,suavizaB);
    fill(0)
    text("124/31", xt1p-22, yt1p);
    text("16/9", xt1p+90, yt1p)
    text("13/09", xt1p+80, yt1p+80)
    text("7/3", xt1p-08, yt1p+80)

}
function gameover(){
  if(ganhou==false){
    background('#e25868');
    textSize(28);
    text("Fim de jogo", 50, 50 )
  }else if (ganhou == true){
    background('#a0deb5');
    textSize(28);
    text("Parabéns você ganhou :D", 50, 50 )
  }
}

function draw() {
  
  if (tela==0){
    telaMenu();
  }
  
  if (tela == 1) {
        if (nivel == 1) {
            fase1();
        }
        if (nivel == 2) {
            fase2();
        }
        if (nivel == 3) {
            fase3();
        }
    }
  if (tela == 2){
    telaInstrucoes()
  }
  if(tela == 3){
    telaCreditos()
  }
  if(tela==4){
    gameover()
  }
}

function mouseClicked() {
  
  if (tela == 0){
    if(mouseY>yb01 && mouseY<yb01+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela =1 
    }
  }
  if (tela == 1 ){
    if(nivel == 1){
      if (mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
      nivel = 2
      }else if (mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
        tela = 4
      }else if(mouseY>yb1p+80 && mouseY<yb1p+80+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
        tela = 4
      }else if(mouseY>yb1p+80 && mouseY<yb1p+alturaB1P+80 && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
        tela = 4
      }
    }else if(nivel == 2){
      if(mouseY>yb1p+80 && mouseY<yb1p+alturaB1P+80 && mouseX>xb1p+100 && mouseX < xb1p+larguraB1P+100){
        nivel = 3
      }else{
        tela = 4
      }
    }else if(nivel == 3){
      if(mouseY>yb1p && mouseY<yb1p+alturaB1P && mouseX>xb1p && mouseX < xb1p+larguraB1P){
        ganhou = true
        tela = 4
      }else{
        tela = 4
      }
    }
  }
}

function mousePressed(){
  if (tela == 0){
    if(mouseY>yb02 && mouseY<yb02+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela = 2
    }if(mouseY>yb03 && mouseY<yb03+alturaB1 && mouseX>xb00 && mouseX < xb00+larguraB1){
      tela = 3
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

function keyPressed(){
  if(tela == 1){
    if(keyCode === ESCAPE){
      tela = 0
    }
  }
}
