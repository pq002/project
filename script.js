const anwsers = ['fries', 'chicken nuggets', 'handburger', 'hotdog', 'ice cream', 'fried chicken', 'donuts', 'cupcake', 'cake', 'pancake', 'sauce', 'apple pie', 'macaroni', 'pasta', 
'nachos', 'pizza'];
const randomNum = Math.floor(Math.random() * anwsers.length);
const word1 = anwsers[randomNum];

window.addEventListener('load', () => {
  
  [ ...word1 ].forEach((x) => {
    if (x === ' ') {
      word.innerHTML += '  '
    } else {
      word.innerHTML += '_ '
    }
    if (guess.value ==  x) {
      word.innerHTML = '';
    }

  });

});

guessButton.addEventListener(' ', () => {
  [ ...word1 ].forEach((x, i) => {
    if (guess.value[i] ==  x) {
      rightOrWrong.innerHTML = 'You are right!';
    } else {
      rightOrWrong.innerHTML = 'That guess is not correct. Try another one!';   
    }

  });
})