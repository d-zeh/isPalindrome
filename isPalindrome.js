// Write your code below

// function Palindrome(word) {
//     let checker = []
//     for(let i = word.length-1; i >= 0; i--) {
//         checker.push(word[i])
//     }
//     let name = []
//     for(let i = 0; i < word.length; i++) {
//         name.push(word[i])
//     }
//     console.log(checker);
//     console.log(name)
//     if(checker === name) {
//         return console.log("PALIDRONE")
//     } else {
//         return console.log("NOO")
//     }
// }

// let example = Palindrome('ava')

function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }