// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

// Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variáveis das raquetes
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variável de colisão
let colidiu = false;

// Placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  MostraBolinha();
  MovimentacaoBolinha();
  VerificaColisaoBorda();
  MostraRaquete(xRaquete, yRaquete);
  MostraRaquete(xRaqueteOponente, yRaqueteOponente);
  MovimentaMinhaRaquete();
  MovimentaRaqueteOponente();
  ColisaoRaquete();
  ColisaoRaqueteOponente();
  IncluiPlacar();
  MarcaPonto();
}

function MostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function MovimentacaoBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function VerificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function MostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function MovimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function MovimentaRaqueteOponente() {
  if (keyIsDown(87)) { // UP_ARROW ou tecla "w"
    yRaqueteOponente -= 10;
  }

  if (keyIsDown(83)) { // DOWN_ARROW ou tecla "s"
    yRaqueteOponente += 10;
  }
}
function ColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function ColisaoRaqueteOponente() {
  if (
    xBolinha + raio > xRaqueteOponente &&
    yBolinha + raio > yRaqueteOponente &&
    yBolinha - raio < yRaqueteOponente + raqueteAltura
  ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}



function IncluiPlacar() {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function MarcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente += 1;
    ponto.play();
  }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

