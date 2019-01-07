// I am coding here my password analyzer

// first step is to collect the password from command line

var pwd = process.argv[2]

console.log('Password to analyze: ', pwd)

// - Should include capital letters

// var allCapitals = "QWERTYUIOPASDFGHJKLZXCVBNM"
// var areThereCapitals = false
// for (var p = 0; p < pwd.length; p++) {
//   if (allCapitals.includes(pwd[p])) { // is a capital letter
//     areThereCapitals = true
//   }
// }

function areThereAny(fullset, word) {
  var areThere = false
  for (var p = 0; p < word.length; p++) {
    if (fullset.includes(word[p])) { // is a capital letter
      return true
    }
  }
  return false
}


var allCapitals = "QWERTYUIOPASDFGHJKLZXCVBNM"
console.log('Does it have Capitals? ', areThereAny(allCapitals,pwd))

// - Should be really long...  13 characters

console.log('Is it really long? ',pwd.length>13?true:false)
// - should not have your name
// - no dictionary words
// - replace numbers for certain letters...   A -> 4   O -> 0
// - should include some special characters...  !!!

console.log('Does it have Special symbols? ',areThereAny("!@#%$^&*()[]{}",pwd))

