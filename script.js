// getting reference of the elements 

let userInput = document.querySelector(".city-input")

let submitButton = document.querySelector(".submit-btn")

let cityName = document.querySelector("#cityoutput")

let description = document.querySelector("#description")

let temp = document.querySelector("#temp")

let wind = document.querySelector("#wind")


// start of the code 

apik = "3045dd712ffe6e702e3245525ac7fa38"

function convertion(val){
    return (val - 273).toFixed(2)
}

submitButton.addEventListener("click", ()=> {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+userInput.value+'&appid='+apik)
    .then((response)=> {
        return response.json()
    })
    .then((data)=> {
        console.log(data);
        
            let nameval = data['name']
            let descrip = data['weather']['0']['description']
            let tempature = data['main']['temp']
            let wndspd = data['wind']['speed']

            cityName.innerHTML = `City: ${nameval}`
            description.innerHTML = `Conditions: ${descrip}`
            temp.innerHTML = `Temperature: ${convertion(tempature)} (Degrees)`
            wind.innerHTML =  `Wind Speed: ${wndspd} km/h`
            console.log(nameval);
            
    })
    .catch((Error)=> {
        document.querySelector(".weather-information").innerHTML = Error;
    })
})