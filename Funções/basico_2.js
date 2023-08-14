function bomDia(){
   console.log('Bom dia!')
}

const boaTarde = function (){
   console.log('Boa tarde!')
}


// 1) Passar uma função como parametro para outra função
function executa (fn){
   if(typeof fn == 'function'){
    fn()
  }
}

executa(3)
executa(bomDia)
executa(boaTarde)


// 2) Retornar uma função a partir de outra função
function potencia(base) {
  return function(exp) {
     return Math.pow(base,exp)
   }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))