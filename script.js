var timer = 60;
var rn,hitrn;
var score = 0;
function makebubble() {
    var clutter = "";
    for (let index = 1; index <= 108; index++) {
        let digit = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${digit}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runtimer() {
    setInterval(() => {
        if (timer>0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            document.querySelector("#timerval").textContent = 0;
            document.querySelector("#pbtm").innerHTML = "";
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
makebubble();
runtimer();
hitbubble();
scorechecker();