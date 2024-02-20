//modal
const modalButton = document.querySelector("#btn-get")
const modal = document.querySelector('.modal')
const modalCloseButton = document.querySelector(".modal_close")
const showModal = () =>{
    modal.style.display = 'block'
}
modalButton.addEventListener("click", showModal)
const hideModal = () =>{
    modal.style.display = 'none'

}
modalCloseButton.onclick = (hideModal)
modal.onclick = (event) =>{
    if (event.target === modal){
    hideModal()
    }
}
