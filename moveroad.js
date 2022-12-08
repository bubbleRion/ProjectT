export default function moveRoad(create){

    let speed = 50
    let moveSquare = speed
    let square = create.square
    setInterval(()=>{
        let squarePostionLeft = create.squarePostionLeft
        moveSquare += speed
        square.style.left = `${squarePostionLeft - moveSquare}px`
    }, 100)
    return {square, speed, moveSquare}
}
