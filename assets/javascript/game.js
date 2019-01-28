//Get the id of startHint and declare it as startHint
let startHint = document.getElementById("startHint");
//Get the id of currentWords and decalre it aas currentWords, and declare a array named currentWordsShow
let currentWords = document.getElementById("currentWords");
var currentWordsShow = [];
//Get the id of lettersGuessed and declare it as keyPress
let keyPress = document.getElementById("lettersGuessed");
//Get the id of guessLeft and declare it as guessLeftShow
let guessLeftShow = document.getElementById("guessLeft");
//Get the id of resume and declare it as buttonResume
let buttonResume = document.getElementById("resume");
//Get the id of hangmanimg and declare it as buttonResume
let hangmanimg = document.getElementById("hangmanimg");
//Get the id of welcome image and declare it as welcomeimg
let welcomeimg = document.getElementById("welcome");
//Get the id of welcome image and declare it as welcomeimg
let hint = document.getElementById("hint");

//Declare global variables 
var answer = [];
var guessLeft = 0;
var round = -1;
var key;
var gamestarter;




//Round 1
//Create an global variable which is an array to save the answer
const answerlibrary = [
    ["l", "u", "f", "f", "y"],
    ["z", "o", "r", "o"],
    ["s", "a", "n", "j", "i"],
    ["l", "a", "w"],
    ["a", "c", "e"],
    ["s", "h", "a", "n", "k", "s"],
    ["m", "e", "r", "r", "y"],
    ["v", "i", "n", "s", "m", "o", "k", "e"],
    ["n", "e", "w", "w", "o", "r", "l", "d"],
    ["s", "h", "i", "c", "h", "i", "b", "u", "k", "a", "i"]
]
const hintlibrary = [
    ["Hint: Capitan of the Straw Hat Pirates."],
    ["Hint: Memebr of the Straw Hat Pirates. Named after a swordsman."],
    ["Hint: Member of the Straw Hat Pirates. A cook."],
    ["Hint: Captain of the Heart Pirates. A cook."],
    ["Hint: Luffy's brother. Named. Name indicating one or best"],
    ["Hint: Luffy's friend. Nickname Red Hair"],
    ["Hint: The name of the boat. Golden ____."],
    ["Hint: The name of this family. Name includes the a cloud coming from a cigar."],
    ["Hint: A location area in One Piece that refers to the second half of the Grand Line"],
    ["Hint: The name of seven pirates who have allied themselves with the World Government."]
]

let gameFunction = {

    //start the game
    start: function (event) {
        // add round
        round = round + 1;
        // get answerkey from library to answer
        answer = answerlibrary[round];
        // change welcome pic into hint picture
        welcomeimg.src = 'assets/images/hint/' + round + '.png';
        //set the origin guessleft to twice of the answer length
        guessLeft = answer.length + 7;
        guessLeftShow.innerText = guessLeft;
        //Show place holder _ on current words with the number equal to the number of letters in the answer
        for (let index = 0; index < answer.length; index++) {
            currentWordsShow.push(" _")
            currentWords.innerText += currentWordsShow[index]
        }
        // start button disappears
        startHint.style.display = "none"; 
        // get hint from library to hint and display hint 
        hint.innerText = hintlibrary[round];
        hint.style.display = "block"; 
    },

    //save the key
    savekey: function (event) {
        // turn everu key pressed into lowercase and save it to a variable
        key = event.key.toLowerCase();
    },

    reset: function (event) {
        // reset currentWordsShow both on DOM and on screen
        currentWordsShow = [];
        currentWords.innerText = currentWordsShow;
        // reset hangmanimg
        hangmanimg.src = "assets/images/Start.png"
        // reset letter already guessed
        key = [];
        keyPress.innerHTML = "&nbsp";
        // add round
        round = round + 1;
        // get answerkey from library to answer
        answer = answerlibrary[round];
        // change welcome pic into hint picture
        welcomeimg.src = 'assets/images/hint/' + round + '.png';
        //set the origin guessleft to twice of the answer length
        guessLeft = answer.length + 7;
        guessLeftShow.innerText = guessLeft;
        //Show place holder _ on current words with the number equal to the number of letters in the answer
        for (let index = 0; index < answer.length; index++) {
            currentWordsShow.push(" _")
            currentWords.innerText += currentWordsShow[index]
        }
        // hide next button
        resume.style.display = "none";
        // reset background color
        document.body.style.backgroundColor = "white";
        // get hint from library to hint and display hint 
        hint.innerText = hintlibrary[round];
        hint.style.display = "block"; 
    },




    // var game = {
    // function that count guess times and print guessed letters
    guess: function (event) {
        // print every key the user pressed into the p tags
        keyPress.innerText = keyPress.innerText + " " + key;
        // substract 1 when the user pressed one key
        //Create a loop for guess left that substract 1 when the user pressed one key
        guessLeft = guessLeft - 1;
        if (guessLeft > 0) {
            guessLeftShow.innerText = guessLeft;
        }
        else {
            guessLeftShow.innerText = "Naah! Answer is " + answer.join("");
            resume.style.display = "block";
            hint.style.display = "none"; 
        };

        if (guessLeft < 6) {
            document.body.style.backgroundColor = "red";
        };

        if (guessLeft === 1) {
            hangmanimg.src = "assets/images/Step5.png"
        }
        else if (guessLeft === 2) {
            hangmanimg.src = "assets/images/Step4.png"
        }
        else if (guessLeft === 3) {
            hangmanimg.src = "assets/images/Step3.png"
        }
        else if (guessLeft === 4) {
            hangmanimg.src = "assets/images/Step2.png"
        }
        else if (guessLeft === 5) {
            hangmanimg.src = "assets/images/Step1.png"
        }
        else if (guessLeft === 0) {
            hangmanimg.src = "assets/images/Step6.png"

        }
    },


    check: function (event) {
        let matchcount = 0;
        // check the answer array: if answerarray match, print the letter on current word
        for (let j = 0; j < answer.length; j++) {
            if (answer[j] === key) {
                currentWordsShow[j] = answer[j];
            }
        }
        // End the round
        //turn the two arrays to string and show the win screen
        if (currentWordsShow.toString() === answer.toString()) {
            currentWords.innerText = currentWordsShow.join("  ")
            resume.style.display = "block";
            hint.style.display = "none"; 
            hangmanimg.src = "assets/images/Win.png";
        }
        else {
            // push the identical index into currentWordsShow
            currentWords.innerText = currentWordsShow.join("  ");
        }
    }

}
// document.getElementById("startHint").onclick = start;
document.getElementById("startHint").addEventListener("click", gameFunction.start);
document.addEventListener("keyup", gameFunction.savekey);
document.addEventListener("keyup", gameFunction.guess);
document.addEventListener("keyup", gameFunction.check);
document.getElementById("resume").addEventListener("click", gameFunction.reset);










