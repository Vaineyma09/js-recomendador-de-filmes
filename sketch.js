//idades:14 anos
//Desencanto

//idade:10 anos
//ICarly

//idade:18 anos
//Deadpool

let campoIdade

function setup() {
  createCanvas(600, 400);
  campoIdade = createInput();
  
}

function draw() {
  background('purple');
  textAlign(CENTER, CENTER);
  textSize(50);
  fill('orange');
  
  let idade = campoIdade.value()
  
  text('Deadpool', width/2, height/2);
}

function geraRecomendacao(idade){
  if(idade >= 18){
    return 'Deadpool'
  } else if(idade >= 14){
    return 'Desencanto'
  } else (idade >= 10)
}
