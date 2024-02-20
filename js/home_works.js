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
    if (positionX < maxParentHeight) {
        positionX++;
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveChild)
    }
}


moveChild();

//HOMEWORK2 PART 2

