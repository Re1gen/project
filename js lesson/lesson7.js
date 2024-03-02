//async await,
//try catch
url = "https://jsonplaceholder.typicode.com/posts?_limit"
// const getPost = () =>{
//     fetch(url)
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data)
//         })
// }
// getPost()
const getPost = async () =>{
    try{
        const response = await fetch(url)
        const data =  response.json
        console.log(data)
    } catch (error){
        console.log(error)
    }
}
getPost()