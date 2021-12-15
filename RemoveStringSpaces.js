// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let newStrg = ''
  for (let i = 0; i < x.length; i++ ) {
    if ( x[i] !== ' ' ) {
        newStrg += x[i]
    }
  } return newStrg
}