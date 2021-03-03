const count = (max, min, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i)
  }
}

count(100, 0, 2)