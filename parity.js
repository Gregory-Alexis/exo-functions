const isOdd = num => {
  return num % 2 !== 0
}


const isEven = num => {
  return !isOdd(num)
}
console.log(isOdd(33))