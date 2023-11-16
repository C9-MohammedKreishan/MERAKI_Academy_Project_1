const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const body = document.querySelector("main");
const words = [
  { id: 1, word: "cat" },
  { id: 2, word: "dog" },
  { id: 3, word: "lion" },
  { id: 4, word: "tiger" },
  { id: 5, word: "shark" },
  { id: 6, word: "fish" },
  { id: 7, word: "elephant" },
  { id: 8, word: "frog" },
  { id: 9, word: "mouse" },
  { id: 10, word: "wolf" },
  { id: 11, word: "horse" },
  { id: 12, word: "monkey" },
  { id: 13, word: "sneck" },
  { id: 14, word: "camel" },
  { id: 15, word: "bear" },
  { id: 16, word: "whale" },
  { id: 17, word: "spider" },
  { id: 18, word: "scorpion" },
  { id: 19, word: "bat" },
  { id: 20, word: "rabbit" },
  { id: 21, word: "giraffe" },
];
const images = [
  { id: 0, src: "./0.jpg" /*add more key/value if need*/ },
  { id: 1, src: "./1.jpg" /*add more key/value if need*/ },
  { id: 2, src: "./2.jpg" /*add more key/value if need*/ },
  { id: 3, src: "./3.jpg" /*add more key/value if need*/ },
  { id: 4, src: "./4.jpg" /*add more key/value if need*/ },
  { id: 5, src: "./5.jpg" /*add more key/value if need*/ },
];

// Start page
const Start_game = document.createElement("div");
Start_game.classList.add("welcom-container");
const start_btn = document.createElement("button");


// Create audio
const Sound = document.createElement("audio")
Sound.innerText = "Sound"
// Sound.controls = true


// Creat Welcome Paragraph
const welcome_paragraph = document.createElement("p");
welcome_paragraph.innerText =
  "Welcome to the Hangman Game on our website! Get ready for a thrilling word-guessing challenge. To play, simply start by selecting letters to unveil the mystery word. With each correct guess, the hidden letters are revealed, but beware—incorrect guesses bring you one step closer to the suspenseful hangman's completion. Your mission is to crack the code and guess the entire word before the hangman takes its final form. Test your linguistic skills, and may the odds be in your favor as you embark on this engaging and interactive journey. Best of luck!";
welcome_paragraph.classList.add("welcome-paragraph");
start_btn.innerText = "Start Game";

// Create Student section
const Student = document.createElement("div");
Student.classList.add("welcom-container", "student-class");
Student.innerText =
  "Project_1 \n HangMan Game \nPrepared by: \n Mohammad Kreishan";
const imgMeraki = document.createElement("img");
imgMeraki.classList.add("img-Meraki");
imgMeraki.classList.add("welcom-container");
imgMeraki.src = "./Meraki.jpg";
Student.append(imgMeraki);
Start_game.append(start_btn, welcome_paragraph, Student);
body.append(Start_game,Sound);

// Create how to play
const HowToPlay = document.createElement("div");
HowToPlay.classList.add("how-to-play");
const HowToPlayHeader = document.createElement("h2");
const paragraph_1 = document.createElement("p");
paragraph_1.innerText = "Welcome to Hangman!";
const paragraph_2 = document.createElement("p");
paragraph_2.innerText =
  "Guess the hidden word by inputting letters. Each incorrect guess reveals part of the hangman.";
const paragraph_3 = document.createElement("p");
paragraph_3.innerText =
  "Use the input area, uncover the word, and beat the hangman!";
const paragraph_4 = document.createElement("p");
paragraph_4.innerText = "Have fun testing your word skills!";
HowToPlay.append(
  HowToPlayHeader,
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4
);
body.append(HowToPlay);
HowToPlay.style.display = "none";

// Create Word Box
const word_box = document.createElement("div");
const word_head = document.createElement("h1");
const wordText = document.createElement("p");
const word = document.createElement("p");

// Create Picture Box
const pictureBox = document.createElement("div");
const imgOfMan = document.createElement("img");

// Create Key Box
const keyBox = document.createElement("div");
const btnsBox = document.createElement("div");
const key = document.createElement("button");

alphabet.forEach((element) => {
  const key = document.createElement("button");
  key.innerText = element;
  key.classList.add("alpha_btn");
  key.addEventListener("click", input_key);
  keyBox.append(key);
});

// Create buttons Box
const ResetGame = document.createElement("button");

start_btn.addEventListener("click", Hangman);

// HangMan function --> Start Game
function Hangman() {
  // Start
  Start_game.style.display = "none";
  HowToPlay.style.display = "block";

  // ResetGame
  ResetGame.classList.add("btns-Box");
  ResetGame.innerText = "Reset";
  btnsBox.append(ResetGame);
  ResetGame.addEventListener("click", Reset_Game);

  // wordBox
  word_box.classList.add("word-box");
  word_head.innerText = "Guess the word";
  word_head.classList.add("word-Head");
  wordText.innerText =
    "The length of word is  " +
    random_word.length +
    " and it is an animal name";
  wordText.classList.add("word-text");
  word.classList.add("select-word");
  word.innerText = under_score(random_word.length);
  word_box.append(word_head, wordText, word);

  // Picture Box
  imgOfMan.src = "./0.jpg";
  pictureBox.append(imgOfMan);
  pictureBox.classList.add("picture-Box");

  // key Box

  keyBox.classList.add("key-box");
  keyBox.style.background = "wight";
  // Buttons Box
  btnsBox.classList.add("btns-Box");

  // Append all Boxes to main
  body.append(word_box, keyBox, pictureBox, btnsBox);
}

// Create under scores function ==> before entering any character.
function under_score(len) {
  let under_scores = "";
  while (len) {
    under_scores += "_ ";
    len -= 1;
  }
  return under_scores;
}

// Input key function
function input_key(e) {
  Sound.src = "Click.wav"
  Sound.play()
  let current_key = e.target.innerText;
  e.target.style.background = "red";
  check_words(current_key);
}

// Choose word function ==> function chooses randomly word from array (Words).
function choose_word(words) {
  return words[Math.floor(Math.random() * words.length)].word;
}

let random_word = choose_word(words);
let AllWord = under_score(random_word.length).split(" ");

// Update wordBox function ==> the function updates the wordBox section after each input, if the input is true.
function update_wordBox(current_key, char) {
  AllWord[char] = current_key;
  word.innerText = AllWord.join("");
}


// Update imgOfMan section ==> the function updates the imgOfMan section after each input, if the input is wrong.
let wrong_count = 0;
const update_imgOfMan = () => {
  if (wrong_count + 1 === images.length) {
    GameOver();
  } else {
    wrong_count += 1;
    imgOfMan.src = images[wrong_count].src;
  }
};

// Check word function
const check_words = (current_key) => {
  let flag = true;
  for (char in random_word) {
    if (random_word[char] === current_key) {
      flag = false;
      update_wordBox(current_key, char);
    }
  }
  if (flag) {
    update_imgOfMan();
  }

  if (wrong_count + 1 === images.length) {
    GameOver();
  } else if (AllWord.join("") === random_word) {
    YouWin();
  }
};

// Reset Game function
const Reset_Game = () => {
  Sound.src = "reset.mp3"
  Sound.play()
  imgOfMan.src = images[0].src;
  random_word = choose_word(words);
  AllWord = under_score(random_word.length).split(" ");
  word_head.innerText = "Guess the word ";
  word.innerText = under_score(random_word.length);
  wordText.innerText =
    "The length of word is  " +
    random_word.length +
    " and it is an animal name";
  wrong_count = 0;
  key.style.background = "black";
  const btns = document.querySelectorAll(".alpha_btn");
  btns.forEach(function (element, index) {
    element.style.background = "whitesmoke";
  });
};

// End Game function
const GameOver = () => {
  Sound.src = "Game_Over.mp3"
  Sound.play()
  imgOfMan.src = "./GameOver.jpg";
  word_head.innerText = "Game Over";
  word.innerText = "hard luck".toLocaleUpperCase();
  wordText.innerText = "Wrong answer!";
};

// You win function
const YouWin = () => {
  Sound.src = "win_sound.mp3"
  Sound.play()
  imgOfMan.src = "./win.png";
  word_head.innerText = "You Win";
  word.innerText = "Congratulation!";
  wordText.innerText = "Correct answer!";
};





