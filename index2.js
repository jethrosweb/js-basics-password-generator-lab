window.addEventListener("load", () => {
    //start your code here 
    document.addEventListener('submit', showPassword)
  
   
  });

function showPassword(event) {
  event.preventDefault() // could use this instead https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
  setPasswordLength = parseInt(document.getElementById('passwordLength').value)
  
  if (setPasswordLength >= 4) {
  const password = generatePassword(setPasswordLength)
  document.getElementById('result').innerText = password
  } else {
    document.getElementById('result').innerText = "Enter a number 4 or above "
  
  }
  
  
  }
  
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const NUMBERS = '0123456789'.split('')
  const SYMBOLS = '!#$%&()*+,-./:;<=>?@[\\]^_{|}~'.split('')
  
  
  function randomiseArray(array) {
    // logic from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
    const randomised = array
    // console.log('original is ' + randomised)
  
  // Iterate over the array from back to front
    for (let arrayItemIndex = array.length -1; arrayItemIndex >= 0; arrayItemIndex--)  {
      // get a random index from the array e.g. if array is 'abcd1234' there are 8 values in the array and the index of 'b' is 1 
    const randomItemIndex = Math.floor(Math.random() * (arrayItemIndex+1))
    // get the value of the item being iterated over currently
    const itemValue = array[arrayItemIndex]
    // console.log('item in loop: ' + itemValue)
    // console.log('random item: ' + array[randomItemIndex])
    // assign the item being iterated over currently to be the random item selected above
    randomised[arrayItemIndex] = array[randomItemIndex]
    // console.log('current item set to randomly selected item, Now ' + randomised)
      // assign this random number to the value of the item being iterated over currently
    randomised[randomItemIndex] = itemValue
    // console.log('random item is now set to current item Now ' + randomised)
  
    }
    return randomised
  
  }
  
  function generatePassword(passwordLength){
  
    const characterCount = Math.floor(passwordLength / 4)
    const characterCountRemainder = passwordLength % 4 
  
    const randomSymbol = randomiseArray(SYMBOLS).slice(0, characterCount)
    const randomNumber = randomiseArray(NUMBERS).slice(0, characterCount)
    const randomUpper = randomiseArray(UPPERCASE).slice(0, characterCount)
    const randomLower = randomiseArray(LOWERCASE).slice(0, characterCount + characterCountRemainder)
  
    const nonRandomPassword = randomSymbol.concat(randomNumber, randomUpper, randomLower)
    const randomPassword = randomiseArray(nonRandomPassword)
    return randomPassword.join('')
  
  }
  
  
  
  const randompwd = generatePassword(10)
  console.log(randompwd)
  
  
  // Tasks
  // 1. get upper case, lower case, numbers, and symbols. (assign these to their own variables)
  // 2. Implement a function that takes in an array of characters and outputs a randomised version of the array
  // 3. Implement a function that takes in the password length, gets 1 random symbol, 1 random number and for the rest of the length, randomise upper and lowercase characters equally. E.G. You want a password with 10 characters: the function outputs a password with 1 number, 1 symbol, 4 uppercase and 4 lowercase 
  // randomise then randomise...seems overkill or like there's a better way - maybe put them all together and get the first of each. That sounds annoying too
  
  
  // function getASCIIValues(start, end) {
  //   const asciValues = []
  //   for (let asciIndex = start; asciIndex <= end; asciIndex++) {
  //     const asciValue = String.fromCharCode(asciIndex)
  //     asciValues.push(String.fromCharCode(asciIndex))
  //   }
  // return asciValues
  // }
  //https://www.petefreitag.com/cheatsheets/ascii-codes/
  // const UPPERCASE = getASCIIValues(65, 90)
  // const LOWERCASE = getASCIIValues(97, 122)
  // const NUMBERS = getASCIIValues(48, 57)
  // const SYMBOLS = getASCIIValues(33, 33).concat(
  //   getASCIIValues(35, 38),
  //   getASCIIValues(40, 47),
  //   getASCIIValues(58, 64),
  //   getASCIIValues(91, 95), 
  //   getASCIIValues(123, 126)
  //   )