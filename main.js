var rows = 5
var columns = 5

var currTile
var otherTile

var turns = 0

var imgOrder = [
  '16',
  '14',
  '23',
  '4',
  '24',
  '6',
  '17',
  '8',
  '9',
  '10',
  '21',
  '12',
  '25',
  '2',
  '15',
  '1',
  '7',
  '22',
  '19',
  '20',
  '11',
  '18',
  '3',
  '5',
  '13',
]

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement('img')
      tile.id = r.toString() + '-' + c.toString()
      tile.src = imgOrder.shift() + '.jpg'

      tile.addEventListener('dragstart', dragStart)
      tile.addEventListener('dragover', dragOver)
      tile.addEventListener('dragenter', dragEnter)
      tile.addEventListener('dragleave', dragLeave)
      tile.addEventListener('drop', dragDrop)
      tile.addEventListener('dragend', dragEnd)

      document.getElementById('board').append(tile)
    }
  }
}

function dragStart() {
  currTile = this
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
}

function dragLeave() {}

function dragDrop() {
  otherTile = this
}

function dragEnd() {
  let currImg = currTile.src
  let otherImg = otherTile.src

  currTile.src = otherImg
  otherTile.src = currImg

  turns += 1
  document.getElementById('turns').innerHTML = turns
}
