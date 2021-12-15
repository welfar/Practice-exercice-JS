function noSpace(x) {
  let newStrg = ''
  for (let i = 0; i < x.length; i++ ) {
    if ( x[i] !== ' ' ) {
        newStrg += x[i]
    }
  } return newStrg
}