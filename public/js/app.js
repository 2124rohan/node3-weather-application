// console.log("Client side javascript file is loaded!")

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.getElementById('location')
const message_2 = document.getElementById('error')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value

    message_1.textContent ='Loading!'
    message_2.textContent = ''
    fetch('/weather?address='+ encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
            if(data.error){
                message_1.textContent = data.error
            }else{
                message_1.textContent =  data.Forcast
                message_2.textContent =  data.Location
            }    
    })
})    
    
})