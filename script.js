
  
const anwsers = ['fries', 'chicken nuggets', 'handburger', 'hotdog', 'ice cream', 'fried chicken', 'donuts', 'cupcake', 'cake', 'pancake', 'sauce', 'apple pie', 'macaroni', 'pasta', 
'nachos', 'pizza', 'hi'];
const randomNum = Math.floor(Math.random() * anwsers.length);
const word1 = anwsers[randomNum];
const num = 10;
let guesses = 9;

window.addEventListener('load', () => {
  
  [ ...word1 ].forEach((x) => {
    if (x === ' ') {
      word.innerHTML += ' '
    } else {
      word.innerHTML += '•'
    }                                                         


  });

});

//'abc'.includes('a') 

function myFunction() {

   if (word1.includes(guess.value)) {
    rightOrWrong.innerHTML = 'You are right! ' + guesses + ' guesses left!';
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] == guess.value) {
        const array = [ ...word.innerHTML ];
        array[i] = guess.value;
        word.innerHTML = array.join('');
      }   
      if (word.innerHTML[i] == '•') {
        rightOrWrong.innerHTML = 'You won!';
      }
    }
   } else if(guesses == 0) {
       rightOrWrong.innerHTML = 'You lost!';
   } else {
       rightOrWrong.innerHTML = 'That guess is not correct. Try another one! ' + guesses + ' guesses left!';   
       guessess.innerHTML = '';
       guesses--;
   }


}







