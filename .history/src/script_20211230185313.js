//Gerar coisas na tela
document.write("<h2>h2 gerado no JS</h2>")


//Arrays
var userList = ['EMIYA', 'Code', 'Carvalho', 'DrA'];

userList.indexOf('Carvalho') //2
userList.join(' e ') //EMIYA e Code e Carvalho...
userList.pop() //remove DrA
userList.shift() //remove EMIYA
userList.push('Honda') //add Honda no final

if(userList.indexOf('EMIYA') > -1) {
  console.log('Este nome está na lista')
} else {
  console.log('Este nome não está na lista')
}

console.log(userList)


//Loops
x = 0;
while(x <= 3) {
  document.write('</br> Valor de X = ' + x + '</br>')  
  x++
}

for(y = 0; y <= 3; y++){
  document.write('</br> Valor de Y é ' + y + '</br>')
}

//Timers
function writeForever(){
  document.write('Escrevendo coisas</br>')
}
//setInterval(writeForever, 1000) //write eterno
//setTimeout(writeForever, 3000) //1 write com delay
clearInterval(writeForever) //interrompe o write

//Local Storage
localStorage.nome = "EMIYA";
localStorage.nome //EMIYA
localStorage.removeItem("nome")

//Pegando elemento e alterando conteúdo
document.getElementById('divTitulo').innerHTML = 'Título foda';

//Desconstrução 
const rpgCharacter = {nome: 'Frei', lvl: 10}
let { lvl } = rpgCharacter
lvl //10 
let { lvl:nivelPersonagem } = rpgCharacter
nivelPersonagem //10

let characters = ['Ky', 'Sol', 'Axl']
let { 1:ungaBunga } = characters
ungaBunga //Sol
let { 1:ungaBunga, 0:RTL } = characters
ungaBunga //Sol
RTL //Ky


//Spread operator
let primeirosNumeros = [1,2,3]
let maisNumeros = [...primeirosNumeros,4,5,6]
maisNumeros //[1,2,3,4,5,6]

//Rest operator
function meusNFTS(...nomes){
  console.log(nomes)
}
meusNFTS('bomb', 'ships', 'cars') //sem o rest, só aparece o bomb

//map
Percorre um array e permite interagir com seus itens
const niveis = rpgParty.map((rpgParty) => rpgParty.name)
//reduce

//find