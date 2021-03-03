const pyramide = (nbBase, bool, motif) => {
  if (bool) {
    for (let i = 0; i < nbBase; i++) {
      console.log(motif.repeat(i))
    }
  }
}

pyramide(15, true, 'G')