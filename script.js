console.log("script connected");

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorBtn = document.querySelector(".scissor-btn");

const line = document.querySelector(".line");

const winCount = document.getElementById("win-count");
const loseCount = document.getElementById("lose-count");
const tieCount = document.getElementById("tie-count");

let arr = ["Rock", "Paper", "Scissor"];

let det = {
    winc: 0,
    losec: 0,
    tiec: 0
};

// Initialize game
function init() {

    let atStart = localStorage.getItem("ourstr");

    if (atStart) {
        det = JSON.parse(atStart);
    }

    updateScore();
}

// Update scoreboard
function updateScore() {
    winCount.innerHTML = det.winc;
    loseCount.innerHTML = det.losec;
    tieCount.innerHTML = det.tiec;
}

// Main game function
function game(val) {

    let random = Math.floor(Math.random() * 3);

    let ichoose = `
        You chose <b>${arr[val]}</b> <br/>
        Computer chose <b>${arr[random]}</b>
    `;

    let output = "";

    if (random === val) {

        output = "🤝 It's a Tie!";
        det.tiec += 1;

    } else {

        if (val === 0) {

            if (random === 1) {
                output = "❌ You Lose!";
                det.losec += 1;
            }
            else {
                output = "🎉 You Win!";
                det.winc += 1;
            }

        }

        else if (val === 1) {

            if (random === 2) {
                output = "❌ You Lose!";
                det.losec += 1;
            }
            else {
                output = "🎉 You Win!";
                det.winc += 1;
            }

        }

        else if (val === 2) {

            if (random === 0) {
                output = "❌ You Lose!";
                det.losec += 1;
            }
            else {
                output = "🎉 You Win!";
                det.winc += 1;
            }
        }
    }

    line.innerHTML = `
        ${ichoose}
        <br/><br/>
        <span style="font-size: 2rem;">${output}</span>
    `;

    updateScore();

    localStorage.setItem("ourstr", JSON.stringify(det));
}

// Reset game
function reset() {

    det = {
        winc: 0,
        losec: 0,
        tiec: 0
    };

    localStorage.setItem("ourstr", JSON.stringify(det));

    updateScore();

    line.innerHTML = `
        <span style="color: #ddd;">
            Game reset successfully 🚀
        </span>
    `;
}

// Start game
init();