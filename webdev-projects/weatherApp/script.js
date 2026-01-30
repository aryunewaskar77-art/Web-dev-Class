let btn = document.getElementById("btn");

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

            const weatherBox = document.querySelector(".weatherBox");
            weatherBox.innerHTML = `
                <div class="location">${data.name}, ${data.sys.country}</div>
                <div class="temp">${Math.round(data.main.temp)}°C</div>
                <div class="condition">${data.weather[0].description}</div>
            `;

            inputValue.value = "";
        })
        .catch(err => {
            alert(err.message);
        });
});
