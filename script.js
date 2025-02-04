var timer = 10;
var rn,hitrn;
var score = 0;
var timerInterval;
function makebubble() {
    var clutter = "";
    for (let index = 1; index <= 108; index++) {
        let digit = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${digit}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
    clearInterval(timerInterval); // Clear any existing interval
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            document.querySelector("#timerval").textContent = 0;
            clearInterval(timerInterval); // Stop timer when game is over
            gameover();
        }
    }, 1000);
}
function hitbubble() {
    rn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = rn;
}
function increasescore() {
    score += 10;
    document.querySelector("#scoreval")
    .textContent = score;
}
function scorechecker() {
    document.querySelector("#pbtm")
    .addEventListener("click",(bubble)=>{
        hitrn = Number(bubble.target.textContent);
        if (rn === hitrn) {
            increasescore();
            makebubble();
            hitbubble();
        };    
    });
};
function gameover() {
    gsap.to("#pbtmgo", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: .5
    })
    let gotop = document.querySelector("#gotop");
    gotop.style.borderStyle = "solid";
    gotop.style.borderWidth = "1px";
    gotop.style.borderColor = "aliceblue";
    let go = document.querySelector("#go");
    go.style.borderStyle = "solid";
    go.style.borderWidth = "1px";
    go.style.borderColor = "aliceblue";
    document.querySelector("#gotop").textContent = "Game Over";
    document.querySelector("#gobtm").innerHTML = '<button id="mybutton">Retry</button>';
    document.querySelector("#mybutton").addEventListener("click",()=>{
        restart();
    })
}
function restart() {
    timer = 10;
    score = 0;
    document.querySelector("#scoreval").textContent = 0;
    document.querySelector("#gotop").textContent = "";
    document.querySelector("#gobtm").innerHTML = '';
    let gotop = document.querySelector("#gotop");
    gotop.style.borderStyle = "";
    gotop.style.borderWidth = "";
    gotop.style.borderColor = "";
    let go = document.querySelector("#go");
    go.style.borderStyle = "";
    go.style.borderWidth = "";
    go.style.borderColor = "";
    gsap.to("#pbtmgo", {
        width: "0",
        ease: Expo.easeInOut,
        duration: .5
    })
    runtimer();
    hitbubble();
    makebubble();
    scorechecker();
}
makebubble();
runtimer();
hitbubble();
scorechecker();