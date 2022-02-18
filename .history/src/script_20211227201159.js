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

setInterval(writeForever, 1000)