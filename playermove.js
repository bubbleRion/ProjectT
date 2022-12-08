export default function playerMove(){
    let player = document.createElement("div")
    let jump = 30
    let playerSize = 30
    let playerPositionLeft = playerSize * 2
    let playerPositionBottom = playerSize * 8
    player.style.width = `${playerSize}px`
    player.style.height = `${playerSize}px`
    player.style.borderRadius = `${playerSize / 2}px`
    player.style.backgroundColor = "yellow"
    player.style.position = "absolute"
    player.style.left = `${playerPositionLeft}px`
    player.style.bottom = `${playerPositionBottom}px`
    root.appendChild(player)
    window.addEventListener("keydown",(e)=>{
        if(e.code === "Space"){
            player.style.bottom = `${playerPositionBottom + jump}px`
            setTimeout(()=>{
                player.style.bottom = `${playerPositionBottom + jump + jump}px`
            }, 200)
            setTimeout(()=>{
                player.style.bottom = `${playerPositionBottom + jump}px`
            }, 400)
            setTimeout(()=>{
                player.style.bottom = `${playerPositionBottom}px`
            }, 600)
            // console.log(player.style.bottom)
        }
    })
    return {player, playerPositionLeft, playerPositionBottom, jump}
}