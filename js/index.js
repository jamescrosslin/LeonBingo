const squares = document.querySelectorAll("#board section")
const board = document.getElementById("board")

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
]

shuffleArray(phrases)

squares.forEach((square, i) => {
  if (i !== 12) {
    square.innerHTML = phrases[i]
  }
  i++
})

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

board.addEventListener("click", (event) => {
  if (event.target.id !== "freeSpace") {
    event.target.classList.toggle("stamp")
  }
})
