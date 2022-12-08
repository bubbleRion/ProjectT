export default function alive(player, squareBox, stop, clientW){
    const playerLeft = player.playerPositionLeft
    const goal = playerLeft
    const speed = squareBox.speed
    
    console.log(playerLeft)
    setInterval(()=>{
        let touch = clientW
        touch -= speed
        // console.log(player.player.style.bottom)
        let [num , splitString] = player.player.style.bottom.split("px")
        let number = Number(num)
        console.log(touch)
        
        if(number <= 270 && playerLeft >= touch){
            console.log("hi")
            clearInterval(stop)
        }
        else{
            touch = 0
        }
    }, 100)
    
    
    
}  