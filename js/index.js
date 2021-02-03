const squares = document.querySelectorAll("#board section");
const board = document.getElementById("board");
const shuffleBtn = document.getElementById("shuffleBtn");
const coverAllBtn = document.getElementById("coverAllBtn");
let coverAllMode = false;

const phrases = [
  "Leon acknowledges a hair compliment",
  "Someone emotes a Micro Leon in chat",
  "Leon says octothorpe",
  "Leon says 'automagically' \r✨✨✨✨",
  "Leon forgets to turn off the background music 🎶",
  "Three people finish a challenge before the timer goes off ⏲️",
  "Leon mentions the OnlyFans page 🔞 ",
  "Alissa posts a helpful link in chat 🔗",
  "Leon tells us what he is drinking today",
  "Hydrate! 🚰",
  "Posture Check!",
  "Someone asks Leon how he balances his time ⌛",
  "Don't call yourself a junior dev 🙅🏿",
  "one job please! 💰",
  "STRETCH!",
  "community goal met 🎉",
  "Bob is mentioned",
  "Leon answers which languages he uses",
  "Dylan spits hot fire 🔥🔥",
  "The Bachelor 🌹",
  "Bring It On 📣",
  "Blame the nuns!",
  "Domino's 🍕",
  "Simba barks in the background 🐕",
  "Leon transforms into Little Leon",
  "It looks like we're going to run a little late",
  "Leon forgets and then remembers that bingo exists",
  "You messed up",
  "Leon is amused by bootieliquor's name",
  "The Golden Rule 👑👑👑",
  "What is the internet? 💻 🖥️",
  "angry Shia LaBeouf",
  "Hello world!",
  "Size doesn't matter, okay? OKAY???",
  "CSS is about <em>style</em>",
  "Ordered List",
  "Unordered List",
  `Syntax:
   Spelling and Grammar rules`,
  'Someone preemptively types "organization" in the chat 👩🏽‍💻',
  "Resetting the Forgetting Curve 😱",
  "What should go in the head tag?",
  "anchor tags are for links ⚓",
  "Progressive Enhancement"
];

function populateBoard() {
  shuffleArray(phrases);

  squares.forEach((square, i) => {
    if (i !== 12) {
      square.innerHTML = phrases[i];
    }
    i++;
  });
}

const winScenario = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
  [0, 4, 12, 20, 24]
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function winCheck() {
  winScenario.forEach((scenario) => {
    if (coverAllMode) {
      const stampedSquares = Array.from(squares).filter((square) =>
        square.classList.contains("stamp")
      );
      stampedSquares.length === 25 && board.remove();
    } else {
      let count = 0;
      scenario.forEach((num) => {
        if (squares[num].classList.contains("stamp")) {
          count++;
        }
      });
      if (count === 5) board.remove();
    }
  });
}

board.addEventListener("click", (event) => {
  if (event.target.id !== "freeSpace") {
    event.target.classList.toggle("stamp");
    winCheck();
  }
});

shuffleBtn.addEventListener("click", populateBoard);

coverAllBtn.addEventListener("click", (event) => {
  coverAllMode = !coverAllMode;
  event.target.innerHTML =
    event.target.innerHTML === `Cover All Mode: Off`
      ? `Cover All Mode: On`
      : `Cover All Mode: Off`;
  setTimeout(winScenario, 600);
});

populateBoard();
