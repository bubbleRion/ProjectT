export default function moveRoad(){
    let randomSpeed = Math.floor((Math.random() + 7) * 7)
    let moveSquare = randomSpeed
    let square = createSquare()
    setInterval(()=>{
        moveSquare += randomSpeed
        square.style.left = `${squarePostionLeft - moveSquare}px`
    }, 100)
    return square
}
