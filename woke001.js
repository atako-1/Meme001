let box1 = document.getElementById('op1')
let box2 = document.getElementById('op2')
let box3 = document.getElementById('op3')
let box4 = document.getElementById('op4')
let box_final = document.getElementById('op_final')

let sincero = document.querySelector('div.fundo_triste')

let res = document.getElementById('re4')
let imagem = document.querySelector('div.img')


let questionario1 = document.getElementById('quest1')
let questionario2 = document.getElementById('quest2')
let questionario3 = document.getElementById('quest3')
let questionario4 = document.getElementById('quest4')
let julgamento = document.querySelector('p.chek')

let quest_text2 = document.getElementById('text2')
let quest_text3 = document.getElementById('text3')
let quest_text4 = document.getElementById('text4')

let nomes = []

function env1(){
  var nome = document.getElementById('teg').value
  
  if(nome.length == ''){
    window.alert('por favor preencha o dado com seu nome')
  }else{
    questionario1.style.display = 'none'
    questionario2.style.display = 'block'
    quest_text2.innerText = `Por favor ${nome} me responda, você ja fez sexo?`
    nomes.push(nome)
    
    
  }
  
}










function env2() 
{
  if(box1.checked == false && box2.checked == false){
    
    window.alert('Selecione uma das alternativas')
    
  }else if(box1.checked == true && box2.checked == true){
    
    window.alert('Não é possivel selecionar as duas opções')
    
  }else if(box1.checked == true){
    
    window.alert('Não mente')
    questionario2.style.display = 'none'
    questionario3.style.display = 'block'
    quest_text3.innerText = `Não minta pra min ${nomes[0]} eu sou esperto`
  }else{
    
    questionario2.style.display = 'none'
    window.alert('obrigado pela resposta sincera')
    sincero.style.display = 'block'
  }
}    
    
  
  function env3() 
{
  if(box3.checked == false && box4.checked == false){
    
    window.alert('Selecione uma das alternativas')
    
  }else if(box3.checked == true && box4.checked == true){
    
    window.alert('Não é possivel selecionar as duas opções')
    
  }else if(box3.checked == true){
    
    window.alert('KKKKKKKKKK')
    questionario3.style.display = 'none'
    questionario4.style.display = 'block'
    quest_text4.innerHTML = `Você acha que engana quem?`
  }else{
    
    window.alert('finalmente foi sincero em')
    questionario3.style.display = 'none'
    sincero.style.display = 'block'
  }
}



function env4() 
{
  if(box_final.checked == false){
    
    window.alert('Seleciona logo e admita')
    
  }else{
    res.innerHTML = 'QUE OTARIO KKKKKK'
    julgamento.style.display = 'none'
    imagem.style.display = 'block'
  }
}