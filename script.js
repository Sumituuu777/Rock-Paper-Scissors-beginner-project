console.log("script connected");
const rockBtn = document.querySelector(".rock-btn")
const paperBtn = document.querySelector(".paper-btn")
const scissorBtn = document.querySelector(".scissor-btn")
let sry = document.querySelector(".sry")
let line = document.querySelector(".line")

let arr = ["Rock", "Paper", "Scissor"]
let det = {
    winc: 0,
    losec: 0,
    tiec: 0
}

//initializing game
function init() {
    atStart = localStorage.getItem("ourstr")
    det = JSON.parse(atStart)
    if (det.winc === 0 && det.losec === 0 && det.tiec === 0) {
        sry.innerHTML = `let's start the game.`
    } else {
        sry.innerHTML = `your counts are :- WIN:${det.winc} LOSE:${det.losec} TIE:${det.tiec}`
    }
}

// game's main function
function game(val) {
    let random = Math.floor(Math.random() * 3)
    let ichoose = ` you choose ${arr[val]} <br/> I choose ${arr[random]} `;
    let output = ''
    if (random == val) {
        output = "tie"
        det.tiec += 1;
    }
    else {
        if (val == 0) {
            if (random == 1) { output = "YOU LOSE"; det.losec += 1; }
            else if (random == 2) { output = "YOU WIN"; det.winc += 1; }
        }
        else if (val == 1) {
            if (random == 2) { output = "YOU LOSE"; det.losec += 1; }
            else if (random == 0) { output = "YOU WIN"; det.winc += 1; }
        }
        else if (val == 2) {
            if (random == 0) { output = "YOU LOSE"; det.losec += 1; }
            else if (random == 1) { output = "YOU WIN"; det.winc += 1; }
        }
    }
    line.innerHTML = `${ichoose} <br/> so! ${output}`
    sry.innerHTML = `your counts are :- WIN:${det.winc} LOSE:${det.losec} TIE:${det.tiec}`
    tostore = JSON.stringify(det)
    localStorage.setItem("ourstr", tostore)
}

// Reset function
function reset() {
    det.winc = 0; det.losec = 0; det.tiec = 0
    tostore = JSON.stringify(det)
    localStorage.setItem("ourstr", tostore)
    sry.innerHTML = `let's start the game.`
    line.innerHTML=''
}
// calling initializing function
init()