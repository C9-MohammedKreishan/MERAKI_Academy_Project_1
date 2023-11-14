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
  { id: 11, word: "bird" },
];
const images = [
  { id: 0, src: "./zero.jpg" /*add more key/value if need*/ },
  { id: 1, src: "./1.jpg" /*add more key/value if need*/ },
  { id: 2, src: "./2.jpg" /*add more key/value if need*/ },
  { id: 3, src: "./3.jpg" /*add more key/value if need*/ },
  { id: 4, src: "./4.jpg" /*add more key/value if need*/ },
  // { id: 5, src: "./GameOver.jpg" /*add more key/value if need*/ },
];

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

function Hangman() {
  // ResetGame
  ResetGame.classList.add("btns-Box");
  ResetGame.innerText = "Reset";
  btnsBox.append(ResetGame);
  ResetGame.addEventListener("click", Reset_Game);


  // wordBox
  word_box.classList.add("word-box");
  word_head.innerText = "Guess the word";
  word_head.classList.add("word-Head")
  wordText.innerText =  "The length of word is  " + random_word.length + " and it is an animal name";
  wordText.classList.add("word-text");
  word.classList.add("select-word");
  word.innerText = under_score(random_word.length);
  word_box.append(word_head, wordText, word);

  // Picture Box
  imgOfMan.src = "./zero.jpg";
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
  let current_key = e.target.innerText;
  e.target.style.background = "red";
  console.log(e.target);
  check_words(current_key);
}

// Choose word function ==> function chooses randomly word from array (Words).
function choose_word(words) {
  console.log(Math.floor(Math.random() * words.length));
  return words[Math.floor(Math.random() * words.length)].word;
}

let random_word = choose_word(words);
let AllWord = under_score(random_word.length).split(" ");

// Update wordBox function ==> the function updates the wordBox section after each input, if the input is true.
function update_wordBox(current_key, char) {
  console.log(current_key, char);
  AllWord[char] = current_key;
  console.log(AllWord);
  word.innerText = AllWord.join("");
}

// Update imgOfMan section ==> the function updates the imgOfMan section after each input, if the input is wrong.
let wrong_count = 0;
function update_imgOfMan() {
  console.log(images.length);
  if (wrong_count +1 === images.length) {
    GameOver()
  } else {
    wrong_count += 1;
    console.log(images[wrong_count].src, " ", wrong_count);
    imgOfMan.src = images[wrong_count].src;
  }
}

// Check word function
function check_words(current_key) {
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

  if (wrong_count +1 === images.length) {
    GameOver()
  } else if (AllWord.join("") === random_word) {
    YouWin ()
}
}

// Reset Game function
function Reset_Game() {
  imgOfMan.src = images[0].src;
  random_word = choose_word(words);
  AllWord = under_score(random_word.length).split(" ");
  word_head.innerText = "Guess the word "
  word.innerText = under_score(random_word.length);
  wordText.innerText = "The length of word is  " + random_word.length + " and it is an animal name";
  wrong_count = 0;
  key.style.background = "black"
  const btns = document.querySelectorAll(".alpha_btn")
  btns.forEach(function(element,index){
    element.style.background =  "whitesmoke"
  })

}

// End Game function
function GameOver() {
  imgOfMan.src = "./GameOver.jpg"
word_head.innerText = "Game Over"
word.innerText = "hard luck".toLocaleUpperCase()
wordText.innerText = "Wrong answer!" 

}

// You win function
function YouWin() {
  imgOfMan.src = "./win.png"
  word_head.innerText = "You Win"
  word.innerText = "Congratulation!"
  wordText.innerText = "Correct answer!"
  }
Hangman();
