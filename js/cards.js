const getCards = async () =>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
    const data = await response.json()
    console.log(data)
        const displayCards = (data) =>{
            const cardContainer = document.querySelector(".cardContainer")
            cardContainer.innerHTML = ""

            data.forEach(post => {
                const card = document.createElement("div")
                card.classList.add("card")
                card.innerHTML =`
                    <div class="card_img">
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    `
                cardContainer.appendChild(card);
            })
        }
        displayCards(data)
    } catch (error){
        console.log(error)
    }
}

getCards()
