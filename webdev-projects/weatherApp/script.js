let btn = document.getElementById("btn");
let City = document.getElementById("place");
let Country = document.getElementById("country");
let time = document.getElementById("time");
let day = document.getElementById("day");
let date = document.getElementById("date");
let weather = document.getElementById("weather");
let icon = document.getElementById("icon");
let temp = document.getElementsByClassName("temp");

btn.addEventListener("click", () => {
    const inputValue = document.getElementById("input");
    const input = inputValue.value;

   fetch("https://api.weatherapi.com/v1/current.json?key=edc804997f3e4f47abf43028262301&q=pune&aqi=no",)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json(); // 🔑 return data
        })
        .then(data => {
            console.log(data);
            City.innerText = data.location.name + ", ";
            Country.innerText = data.location.country;
            time.innerText = data.location.localtime.split(" ")[1];
            date.innerText = data.location.localtime.split(" ")[0];
            weather.innerText = data.current.condition.text;
            temp[0].innerText = data.current.temp_c + "°C";
            if(weather.innerText==="Sunny"){
                icon.value = "☀️";
            }
            else if(weather.innerText==="Partly cloudy"){
                icon.value = "🌤️";
            } else if(weather.innerText==="Rainy"){
                icon.value = "🌧️";
            }

            inputValue.value = "";
        })
        .catch(err => {
            alert(err.message);
        });
});
