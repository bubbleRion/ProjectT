export default function moveRoad(create){
    let randomSpeed = Math.floor((Math.random() + 7) * 7)
    let moveSquare = randomSpeed
    let square = create.square
    let squarePostionLeft = create.squarePostionLeft
    setInterval(()=>{
        moveSquare += randomSpeed
        square.style.left = `${squarePostionLeft - moveSquare}px`
    }, 100)
    return square
}
