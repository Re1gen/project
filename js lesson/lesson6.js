//hell callback
// console.log("loading..")
// setTimeout(() =>{
//     const product = {
//         name : "milk",
//         price: "$4"
//     }
//     console.log(product, "1 step")
//     setTimeout(() =>{
//         product.name = "milk Pro"
//         product.price = "$7"
//         console.log(product, "2 step")
//         setTimeout(() =>{
//             product.name = "milk Pro MAX"
//             product.price = "$10"
//             console.log(product, "3 step")
//             setTimeout(() =>{
//                 product.name = "MILK ULTRA MAX"
//                 product.price = "$30"
//                 console.log(product, "4 step")
//             }, 2000)
//         }, 2000)
//     }, 2000)
// },2000)

//Promise
console.log("loading...")
const promise = new Promise((resolve, reject) =>{
    // throw new Error("")
    setTimeout(() =>{
        const product = {
            name: "milk",
            price: "$4"
        }
        console.log(product, "1 step")
        resolve(product)
        reject()
    }, 2000)
})

promise.then(
    (product) =>{
    return new Promise((resolve, reject) =>{
        // throw new Error()
    setTimeout(() =>{
        product.name = "Milk Pro"
        product.price = "$8"
        console.log(product, "after promise")
        resolve(product)
        reject()
    }, 2000)
}, () =>{
        console.log("Promise one is not resolved")
    })
}).then((product) =>{
    setTimeout(() =>{
        product.name = "Milk Pro Max"
        product.price = "$10"
        console.log(product, "after  second promise")
    }, 2000)
}, () =>{
    console.log("Promise two is not resolved")
})

const response = fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET"
})
    .then((response) =>{
        console.log(response)
    })