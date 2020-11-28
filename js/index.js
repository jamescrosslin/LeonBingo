const squares = document.querySelectorAll("#board section")
const board = document.getElementById("board")

board.addEventListener("click", (event) => {
  event.target.classList.toggle("stamp")
})
