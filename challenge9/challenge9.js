
function moveTrain(board, mov) {

    const moves = {
        "L": [0, -1],
        "R": [0, 1],
        "U": [-1, 0],
        "D": [1, 0]
    }

    const y = board.findIndex(row => row.includes("@"))
    const x = board[y].indexOf("@")

    const [dy, dx] = moves[mov]
    const newX = x + dx
    const newY = y + dy

    if (newX < 0 || newX >= board[0].length || newY < 0 || newY >= board.length) {
        return 'crash'
    }

    if (board[newY][newX] === 'o') {
        return 'crash'
    }

    if (board[newY][newX] === '*') {
        return 'eat'
    }

    return 'none'

}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, 'R'))
// ➞ 'none'
// The train moves to the right and there is empty space on the right