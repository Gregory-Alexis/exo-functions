/* const biggest = (a, b, c, d) => {
  return Math.max(a, b, c, d)
}

console.log(biggest(99, 100, 101, 1)) */

/* let sortAscend = [99, 100, 101, 1];

sortAscend.sort((a, b) => {
  return a - b
});
console.log(sortAscend) */



const makeUniques = (arr) => {
  return [...new Set(arr)]
}
console.log(makeUniques([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))