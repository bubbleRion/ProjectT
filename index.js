import moveroad from './moveroad.js'

const root = document.getElementById("root")
const body = document.body
const road = document.createElement("div")

road.style.width = "100vw"
road.style.height = "40vh"
road.style.backgroundColor = "#333"
body.appendChild(road)

function createSquare(){
    let squareSize = 30
    let squarePostionLeft = body.clientWidth - squareSize
    let squarePostionTop = root.clientHeight - squareSize
    let square = document.createElement("div")
    square.style.width = `${squareSize}px`
    square.style.height = `${squareSize}px`
    square.style.backgroundColor = "pink"
    square.style.position = "absolute"
    square.style.left = `${squarePostionLeft}px`
    square.style.top = `${squarePostionTop}px`
    root.appendChild(square)
    return {square, squarePostionLeft, squarePostionTop}
}

setInterval(()=>{
    moveroad(createSquare())
}, 1000)
