export default function alive(player, squareBox, stop, clientW){
    const playerLeft = player.playerPositionLeft
    const goal = playerLeft
    const speed = squareBox.speed
    
    console.log(playerLeft)
    setInterval(()=>{
        let touch = clientW
        touch -= speed
        let [num , splitString] = player.player.style.bottom.split("px")
        let number = Number(num)
        console.log(touch)
        
        if(number <= 270 && playerLeft >= touch){//노란색 원과 핑크색 네모의 접촉 판단 조건처리 미해결
            console.log("hi")
            clearInterval(stop)
        }
        else{
            touch = 0
        }
    }, 100)
    
    
    
}  