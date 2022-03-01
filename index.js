window.addEventListener("load", () => {
  //start your code here 
// Submit & display output
  let submitEl = document.getElementById("submit")

  submitEl.addEventListener("click", function(e) {
    e.preventDefault()
    document.getElementById("result").innerText = generatePassword()
  })
})

// Password data
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specialCharacters = "!#$%&()*+,-./:;<=>?@][\^_{|}~"
const numbers = "0123456789"
const totalCharacters = lowercase.concat(uppercase).concat(specialCharacters).concat(numbers)

// Generate Password
function generatePassword() {
  let lengthEl = document.getElementById("password-length")
  length = lengthEl.value
  lengthEl.value = ""
  let password = ""
  if (length == 4) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)] 
  } else if (length > 4) {
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)] 
    let remainingLength = length - 4
    for (i = 0; i < remainingLength; i++) {
      password += totalCharacters[Math.floor(Math.random() * totalCharacters.length)]
    }
  } else {
    password = "Please enter a valid password length of four units"
  }
  return password
}









