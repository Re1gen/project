//modal
const modalButton = document.querySelector("#btn-get")
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector(".modal_close")
const openModal = () =>{
    modal.style.display = 'block'
}
modalButton.addEventListener("click", openModal)
const hideModal = () =>{
    modal.style.display = 'none'

}
modalCloseButton.onclick = (hideModal)
modal.onclick = (event) =>{
    if (event.target === modal){
    hideModal()
    }
}
let showedModal = false;
function handleScroll() {
    const windowHeight = window.innerHeight
    const scrollPosition = window.scrollY;
    const documentHeight = document.body.offsetHeight
    if (scrollPosition + windowHeight >= documentHeight && !showedModal) {
        openModal()
        window.removeEventListener('scroll', handleScroll);
        showedModal = true
    }
}
window.addEventListener('scroll', handleScroll);

const thenOpenModal = () =>{
    setTimeout(() => {
        openModal();
    }, 10000);
}
thenOpenModal();

//POst data
const formElement = document.querySelector("form")
const postData = (url, dataJson) =>{
    const response = fetch(url, {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: dataJson
        })
}

const bindPostData = (form) =>{
    form.onsubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        const user = {}
        formData.forEach((item, index) =>{
            user[index] = item
        })
        const json = JSON.stringify(user)
        postData("server.php", json)
    }
}
bindPostData(formElement)

