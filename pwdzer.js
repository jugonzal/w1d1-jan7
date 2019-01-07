// I am coding here my password analyzer

// first step is to collect the password from command line

var pwd = process.argv[2]

console.log('Password to analyze: ', pwd)

// - Should include capital letters

var allCapitals = "QWERTYUIOPASDFGHJKLZXCVBNM"
var areThereCapitals = false
for (var p = 0; p < pwd.length; p++) {
  if (allCapitals.includes(pwd[p])) { // is a capital letter
    areThereCapitals = true
  }
}

console.log('Does it have Capitals? ', areThereCapitals)

// - Should be really long...  13 characters
// - should not have your name
// - no dictionary words
// - replace numbers for certain letters...   A -> 4   O -> 0
// - should include some special characters...  !!!


