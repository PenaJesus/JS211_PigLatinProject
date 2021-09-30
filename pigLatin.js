const pigLatin = () => {
  // The basic idea of Pig Latin is to take the first letters of a word up to the first vowel, move them to the end of the word, and add 'ay' to the end of it.
  let word = document.getElementById('user').value;
  let pcontainer = document.getElementById('convertWord');
  let pigLatin = ''
  //get word = car
  word = word.trim().toLowerCase()
  let wordArray = word.split('')
  console.log(wordArray)
  let vowels = ['a','e','i','o','u']
  //checking if first position is a vowel
   if (vowels.indexOf(wordArray[0]) != -1){
     console.log ("word + 'yay'",word + 'yay')
    pigLatin = word + 'yay'
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
        // else if 
        //   (vowels.indexOf(wordArray[index]) != -1) {
    
        //   break;
         
        // }
        
      }
      //adding the First part before the vowel, then starting the word with found vowel and adding first part to the end with a 'ay'
      console.log('The vowel is',wordArray[counter])
      let firstPart = word.substring(0,counter)
      let secondPart = word.substring(counter)
      console.log(secondPart.concat(firstPart,'ay'))
      pigLatin = secondPart.concat(firstPart,'ay') 
      
      
    }
     
    pcontainer.innerHTML = pigLatin
  }
