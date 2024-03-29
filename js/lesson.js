// //lesson 1

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");
const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.addEventListener("click",  () => {
   if(regExp.test(phoneInput.value)){
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
   }else{
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
   }
})
//Tab slider
const tabContents = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector(".tab_content_items   ")
const hideTabContents = () =>{
    tabContents.forEach((item)=>{
        item.style.display = 'none'
    })
    tabs.forEach((item) =>{
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContents = (index = 0) =>{
    tabContents[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}
tabsParent.onclick = (event) =>{
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tabItem, tabIndex) => {
            if (event.target ===tabItem){
                hideTabContents()
                showTabContents(tabIndex)
            }
        })
    }
}
hideTabContents()
showTabContents()

const autoTabSlider = (i = 0) => {
    
    setInterval(() => {
        i++;
        if (i > tabs.length - 1) {
            i = 0;
        }

        hideTabContents();
        showTabContents(i);
    }, 3000);
};
autoTabSlider();

//Converter
const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");

const converter =  (element, targetElement,secTargetElement, current) =>{
    element.oninput = () =>{
        const request = new XMLHttpRequest();
        request.open("GET", "../data/converter.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () =>{
            const data = JSON.parse(request.response)
            switch (current){
                case 'som':
                    targetElement.value = (element.value /data.usd).toFixed(2)
                    secTargetElement.value = (element.value /data.eur).toFixed(2)
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    secTargetElement.value = (element.value * data.usdToEur).toFixed(2)
                    break;
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    secTargetElement.value = (element.value / data.usdToEur).toFixed(2)
                    break;
                default:
                    break;
            }
            if (element.value === ''){
                targetElement.value = ""
                secTargetElement.value = ""
            }
        }

    }
}
converter(somInput, usdInput,eurInput, "som")
converter(usdInput, somInput, eurInput, "usd")
converter(eurInput, somInput, usdInput, "eur")
//Card Switcher
const btnPrev = document.querySelector("#btn-prev")
const btnNext = document.querySelector("#btn-next")
const cardBlock = document.querySelector(".card")
let count = 1
const dataType = async () =>{
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        const data = await response.json()
        cardBlock.style.borderColor = ` ${data.completed ? "rgb(34,255,0)": "rgb(201,52,52)"}`
        cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? "green" : "red"}">
                    ${data.completed}
                </p>
                <span>id: ${data.id}</span>
                `
    }catch (error){
        console.log(error)
    }
}
dataType()
btnNext.onclick = () =>{
    count++
    dataType()
    if (count === 201)
        count = 0
}
btnPrev.onclick = () =>{
    count--
    if (count === 0){
        count = 200
    }
    dataType()
}

//Weather

const cityInput = document.querySelector(".cityName")
const citySpan = document.querySelector(".city")
const tempSpan = document.querySelector(".temp")
const api_key = 'e417df62e04d3b1b111abeab19cea714'
const baseUrl = 'http://api.openweathermap.org'
const searchCity = () =>{
    cityInput.oninput = async (event) =>{
        try {
            const response = await fetch(`${baseUrl}/data/2.5/weather?q=${event.target.value}&appid=${api_key}`)
            const data = await response.json()
            citySpan.innerHTML = data.name ? data.name: "Город не найден"
            tempSpan.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : "&#9785"
        }catch (error){
            console.log(error)
        }

    }
}

searchCity()