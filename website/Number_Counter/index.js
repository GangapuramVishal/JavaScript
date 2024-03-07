const incrmtbtn = document.getElementById("incrmtbtn");
const resetbtn = document.getElementById("resetbtn");
const dcrmtbtn = document.getElementById("dcrmtbtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

incrmtbtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

dcrmtbtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

