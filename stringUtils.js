const reverseStr = string => {

  return string.split('').reverse().join('')
}
reverseStr('SEXES')

const isPalindrome = string1 => {
  if (reverseStr(string1) === string1) {
    return true
  }
  else {
    return false
  }
}

console.log(isPalindrome('SEXES'))