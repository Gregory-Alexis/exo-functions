const isOdd = num => {
  if (num % 2 !== 0) {
    return true
  } else {
    return false
  }
}

const isEven = num => {
  if (isOdd(num) % 2 === 0) {
    return true
  } else {
    return false
  }
}
console.log(isEven(33))