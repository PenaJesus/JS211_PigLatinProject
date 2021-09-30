'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatinTest = (word) => {
  // The basic idea of Pig Latin is to take the first letters of a word up to the first vowel, move them to the end of the word, and add 'ay' to the end of it.
  
  //get word = car
  word = word.trim().toLowerCase()
  let wordArray = word.split('')
  console.log(wordArray)
  let vowels = ['a','e','i','o','u']
  //checking if first position is a vowel
   if (vowels.indexOf(wordArray[0]) != -1){
     console.log ("word + 'yay'",word + 'yay')
    return word + 'yay'
   } 
   //***stops previous funtion if word starts with vowel
    else {
      //looking for vowel
      let counter = 0
      for (let index = 0; index < word.length; index++) {
        const individualLetter = word[index];
        if (vowels.indexOf(wordArray[index]) == -1) {
          counter = counter + 1 
          console.log(individualLetter)
          // console.log(wordArray[index])
        } 
        else if 
          (vowels.indexOf(wordArray[index]) != -1) {
    
          break;
         
        }
        
      }
      console.log(wordArray[counter])
      let firstPart = word.substring(0,counter)
      let secondPart = word.substring(counter)
      console.log(secondPart.concat(firstPart,'ay'))
      return secondPart.concat(firstPart,'ay')
      
    }
  
     
      
      // let firstPart = word.substring(0,vowelIndex)
      // let secondPart = word.substring(vowelIndex)
      // console.log('vowelIndex',vowelIndex)
      // console.log('firstPart',firstPart)
      // console.log('secondPart',secondPart)
      // secondPart.concat(firstPart,'ay')
      
      // console.log('**secondPart',secondPart)
    
   //find the vowel then push it to the front then delete the old objects and push to the back adding ay
     
       
     
    
    
    
    // console.log('individualLetter',individualLetter)
    // console.log('index',index)
    // console.log(vowels.includes('vowel includes individualLetter',individualLetter))
  }
  // if (i=0;)
  //if our array is true then we need to move the vowel to index[0]

  //move first letters (up to the first vowel) to the back of the word
  //then add 'ay' tot he end of that word


  // Your code here



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatinTest(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatinTest()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatinTest('car'), 'arcay');
      assert.equal(pigLatinTest('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatinTest('create'), 'eatecray');
      assert.equal(pigLatinTest('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatinTest('egg'), 'eggyay');
      assert.equal(pigLatinTest('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatinTest('HeLlO '), 'ellohay');
      assert.equal(pigLatinTest(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
