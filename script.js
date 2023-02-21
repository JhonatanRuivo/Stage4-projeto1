let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))

// A soma dos dois números
const sum = numberOne + numberTwo
alert(`A soma dos dois números: ${sum}`)

// A subtração dos dois números
const sub = numberOne - numberTwo
alert(`A subtração dos dois números: ${sub}`)

// A multiplicação dos dois números
const multi = numberOne * numberTwo
alert(`A multiplicação dos dois números: ${multi}`)

// A divisão dos dois números
const divi = numberOne / numberTwo
alert(`A divisão dos dois números: ${divi}`)

// O resto da divisão dos dois números
const rest = numberOne % numberTwo
alert(`O restante dos dois números: ${rest}`)


// Verifique se a soma dos dois números é par ou ímpar
function evenOrOdd() {
  if (rest === 0) {
    alert("A soma dos dois números é par!")
  } else {alert("A soma dos dois números é ímpar!")}
}
evenOrOdd()

// Verifique se os dois números inseridos são iguais
function different() { 
  if (numberOne != numberTwo) {
  alert('Os dois números inseridos são diferentes!')
} else {
  alert('Os dois números inseridos são iguais!')
}
}
different()