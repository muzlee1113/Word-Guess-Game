//create a variable key
var key
//Get the id of currentWords and decalre it aas currentWords
let currentWords = document.getElementById("currentWords")
//Get the id of lettersGuessed and declare it as keyPress
let keyPress = document.getElementById("lettersGuessed")
//Get the id of guessLeft and declare it as guessLeftShow
let guessLeftShow = document.getElementById("guessLeft")
//Get the id of resume and declare it as buttonResume
let buttonResume = document.getElementById("resume")
//set the origin guess left 10
let i = 10;

//Round 1
//Create an array to save the answer
const answer = ["l","u","f","f","y"];

//Show place holder _ on current words with the number equal to the number of letters in the answer
for(let index=0; index < answer.length; index++) {
    
    currentWords.innerText += " _"
}



//Create a function that enter every key the user pressed into the p tags
const keyHandler = function(event) {
    key = event.key;
    keyPress.innerText = keyPress.innerText + " " + key;
//Create a variable guessLeft that start with 5
    i = i - 1;
    if(i>0) {
        guessLeftShow.innerText = i;// how to make the initial number different each time according to the length of the answer array and show pictures with hangman
    }
    else {
        guessLeftShow.innerText = "Game Over";
        resume.style.display = "block";
    }
    //check the answer: if answer match, print the letter on current word
    function check(string) {
        if( string === key) {
            console.log(string);
            //how to show the string (correct letter on the screen)
        }
    }
    answer.forEach(check)
}

document.onkeyup = keyHandler;

// restart button
// onclick reset keyPress.innerText = "" and reset guessLeftShow.innerText  = 10
onclick




