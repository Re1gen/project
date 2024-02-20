//HOMEWORK 1 PART 1
const gmail_input = document.querySelector("#gmail_input")
const gmail_button = document.querySelector("#gmail_button")
const gmail_result = document.querySelector("#gmail_result")
const regExp = /\D@gmail.com/
gmail_button.addEventListener("click", () => {
    if (regExp.test(gmail_input.value)){
        gmail_result.innerHTML = "OK!";
        gmail_result.style.color = "green"
    }else {
        gmail_result.innerHTML = "NOT OK!";
        gmail_result.style.color = "red"
    }
})
//HOMEWORK 1 PART 2
const childBlock = document.querySelector(".child_block");
const parentBlock = document.querySelector(".parent_block");
let positionX = 0;
let positionY = 0;
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight;
const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth;

const moveChild = () => {
    if (positionY < maxParentHeight && positionX === 0) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX < maxParentWidth && positionY === maxParentHeight) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } else if (positionY > 0 && positionX === maxParentWidth) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    } else if (positionX > 0 && positionY === 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    }
    setTimeout(moveChild, 1)
}


moveChild();

//HOMEWORK2 PART 2
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")
let time = document.querySelector("#seconds")
let interval = 0;
let seconds = 0;

const start = () =>{
    clearInterval(interval)
        interval = setInterval(() =>{
        seconds++
        time.innerHTML = seconds;
        }, 1000)
}
startButton.addEventListener("click", start)
const stop = () =>{
    clearInterval(interval)
}
stopButton.addEventListener("click", stop)

const reset = () =>{
    clearInterval(interval)
    seconds = 0;
    time.innerHTML = seconds;
}
resetButton.addEventListener("click", reset)
