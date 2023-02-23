let numberOne = Number(prompt("Digite o primeiro número"));
let numberTwo = Number(prompt("Digite o segundo número"))

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;
let rest = numberOne % numberTwo;

alert(`A soma dos dois numeros é: ${sum}`)

alert(`A subtração dos dois números é : ${subtraction}`)

alert(`A multiplicação dos dois números é : ${multiplication}`)

alert(`A divisão dos dois números é : ${division}`)

alert (`O resto da divisão dos dois números é : ${rest} `)

if (sum % 2 === 0){
  alert("A soma dos dois números é par")
}else {
  alert("A soma dos dois números é impar")
}

if (numberOne == numberTwo) {
  alert("Os dois números inseridos são iguais")

}else  {
  alert("Os dois números são diferentes!")

}