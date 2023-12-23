
let favorite ='Bahubhali';

let guess=prompt("Enter your guess");

while((guess!= favorite)&&(guess!='quit'))
{
    console.log('You guessed it wrong');
    guess=prompt('Try again or quit')
}