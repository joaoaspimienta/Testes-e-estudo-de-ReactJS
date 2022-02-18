//Gerar coisas na tela
document.write("<h2>h2 gerado no JS</h2>")

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