let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let new_butn = document.querySelector("#new-btn");
let mesg_container = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset_game = () => {
    turnO = true;
    enable_btns();
    mesg_container.classList.add("hide");
} 

const disable_btns = () => {
    for(let bn of boxes){
        bn.disabled = true;
    }
}

const enable_btns = () => {
    for(let bn of boxes){
        bn.disabled = false;
        bn.innerText = "";
    }
}

boxes.forEach((btn) => {
    btn.addEventListener('click',() => {
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;

        checkWinner();
    });
});

const showWinner = (Winner) => {
    msg.innerText = `Winner is ${Winner}`;
    mesg_container.classList.remove("hide");
    new_butn.classList.remove("hide");
    disable_btns();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText; 

        if(pos1 != "" && pos1 != "" && pos1 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

new_butn.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);