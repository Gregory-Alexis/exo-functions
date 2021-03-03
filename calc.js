const add = (a, b) => {
  return a + b
}

console.log(add(1, 2))

const sum = (a, b) => {
  return a - b
}

console.log(sum(2, 2))

const mul = (a, b) => {
  return a * b
}

console.log(mul(4, 2))

const div = (a, b) => {
  return a / b
}

console.log(div(8, 2))


const calcul = (ope, nb1, nb2) => {
  if (ope === add || ope === sum || ope === mul || ope === div) {
    return ope(nb1, nb2)
  }

}
console.log(calcul(sum, 100, 10))