let idade = Number(prompt('Digite a idade'));
let ensinoMedio = prompt('Você terminou o ensino médio? ');
let isCursandoOutraFaculdade =prompt('Você esta cursando faculdade? Sim ou Não? ')

if(idade>=18 && isCursandoOutraFaculdade === 'Sim' && ensinoMedio ==='Sim'){
  ensinoMedio = typeof(Boolean)
  isCursandoOutraFaculdade = typeof(Boolean)
  ensinoMedio = true;
  isCursandoOutraFaculdade = true;
 console.log('Você é maior de idade, terminou o ensino médio e esta cursando faculdade');
} else if (idade >=18 && ensinoMedio !=='Sim'){
  ensinoMedio = typeof(Boolean)
  isCursandoOutraFaculdade = typeof(Boolean)
  ensinoMedio = false
  isCursandoOutraFaculdade = false
  console.log('Você é maior de idade, não terminou o ensino medio e por isso nao cursa a faculdade ');
} else if (idade <18){
  ensinoMedio = typeof(Boolean)
  isCursandoOutraFaculdade = typeof(Boolean)
  ensinoMedio = false
  isCursandoOutraFaculdade = false
  console.log('Você é menor de idade, por isso não terminou o ensino médio e não cursa faculdade');
} else if (idade >= 18 && ensinoMedio ==='Sim' || isCursandoOutraFaculdade !=='Sim' ){
  ensinoMedio = typeof(Boolean)
  isCursandoOutraFaculdade = typeof(Boolean)
  ensinoMedio = true
  isCursandoOutraFaculdade = false
  console.log('Você é maior de idade, terminou o ensino médio mas não cursa faculdade');
}